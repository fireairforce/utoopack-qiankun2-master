import { defineConfig } from '@umijs/max';

export default defineConfig({
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:8101',
        },
      ],
    },
  },
  routes: [
    { path: '/', component: 'index' },
    { path: '/app1/*', microApp: 'app1' },
  ],
});
