
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://youcef1712.github.io/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 775, hash: '76f1ab648fd2ea6f29c756f0514a37c5e27ed33826ce800017bbf074be89fa5e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: '1e6f51abe8d41c566a434b26fce6b00982168f69ac5074a5bdfd51fd12d29bac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14174, hash: '922bcb72c45d05614f350ef01e15b5619cc0024f380dfdcc562c4234ebfb2ec9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R44DHS57.css': {size: 117, hash: 'Rk95mCtqJIM', text: () => import('./assets-chunks/styles-R44DHS57_css.mjs').then(m => m.default)}
  },
};
