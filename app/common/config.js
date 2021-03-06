
let config = {};

if (__CLIENT__ && window && window.__CONFIG__) {
  try {
    config = JSON.parse(unescape(window.__CONFIG__));
  } catch (e) {} // eslint-disable-line
}

export const PORT = config.PORT || process.env.PORT || 8080;
export const HOSTNAME = typeof window !== 'undefined' ? window.location.origin : (config.HOSTNAME || 'http://localhost:8080');
export const API_ENDPOINT = config.API_ENDPOINT || process.env.API_ENDPOINT || 'http://private-bf6ee-annon.apiary-mock.com';

export const SITEMAP_HOSTNAME = config.SITEMAP_HOSTNAME || process.env.SITEMAP_HOSTNAME || 'http://localhost:8080'; // used in sitemap
export const LANG_COOKIE_NAME = config.LANG_COOKIE_NAME || process.env.LANG_COOKIE_NAME || 'lang';

export const PROJECT_NAME = config.PROJECT_NAME || process.env.PROJECT_NAME || 'Project name';
export const PROJECT_DESCRIPTION = config.PROJECT_DESCRIPTION || process.env.PROJECT_DESCRIPTION || 'Project description';
export const PROJECT_BACKGROUND = config.PROJECT_BACKGROUND || process.env.PROJECT_BACKGROUND;

export const API_PROXY_PATH = '/api';

// for internal app usage. for example for XHR requests or server side rendering
export const API_URL = typeof window !== 'undefined' ? API_PROXY_PATH : API_ENDPOINT;
