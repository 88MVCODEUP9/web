import { createContext, useContext, useEffect, useState } from 'react';
import { defaultConfig, mergeConfig } from '../lib/config.js';
import { fetchJson } from '../lib/json.js';
import palette from '../lib/palette.json';

const SiteConfigContext = createContext({ config: defaultConfig, error: false });
const themeNames = { primary: 'primary', secondary: 'secondary', background: 'background', backgroundSecondary: 'background-secondary', surface: 'surface', surfaceSecondary: 'surface-secondary', text: 'text', textSecondary: 'text-secondary', border: 'border' };

function colorRgb(value) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  const context = canvas.getContext('2d');
  context.fillStyle = value;
  context.fillRect(0, 0, 1, 1);
  return [...context.getImageData(0, 0, 1, 1).data].slice(0, 3);
}

function applyTheme(theme) {
  const resolved = { ...defaultConfig.theme };
  for (const [key, cssName] of Object.entries(themeNames)) {
    if (CSS.supports('color', theme[key])) resolved[key] = theme[key];
    document.documentElement.style.setProperty(`--color-${cssName}`, resolved[key]);
  }
  // Original shades are derived from the configured colors. At the default theme
  // they reproduce every original RGB value exactly, including glow opacity.
  const bases = Object.fromEntries(['primary', 'secondary', 'surface', 'surfaceSecondary', 'text', 'textSecondary', 'background', 'backgroundSecondary'].map(key => [key, colorRgb(resolved[key])]));
  for (const [variable, entry] of Object.entries(palette)) {
    const rgb = entry.rgb.map((channel, index) => Math.round(Math.max(0, Math.min(255, bases[entry.base][index] + channel - entry.default[index]))));
    document.documentElement.style.setProperty(variable, rgb.join(', '));
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolved.background);
  if (resolved.border !== defaultConfig.theme.border) document.documentElement.style.setProperty('--configured-border', resolved.border);
  else document.documentElement.style.removeProperty('--configured-border');
}

export function SiteConfigProvider({ children }) {
  const [state, setState] = useState({ config: defaultConfig, error: false });
  useEffect(() => {
    const controller = new AbortController();
    fetchJson('site-config.json', controller.signal).then(data => setState({ config: mergeConfig(data), error: false })).catch(error => {
      if (error.name !== 'AbortError') setState({ config: defaultConfig, error: true });
    });
    return () => controller.abort();
  }, []);
  useEffect(() => {
    const { config } = state;
    applyTheme(config.theme);
    document.title = config.site.name;
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) { favicon = document.createElement('link'); favicon.rel = 'icon'; document.head.appendChild(favicon); }
    favicon.href = config.site.favicon || `${import.meta.env.BASE_URL}logo.svg`;
  }, [state.config]);
  return <SiteConfigContext.Provider value={state}>{children}</SiteConfigContext.Provider>;
}

export const useSiteConfig = () => useContext(SiteConfigContext);
