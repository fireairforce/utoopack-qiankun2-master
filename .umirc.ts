import { defineConfig } from '@umijs/max';

export default defineConfig({
  qiankun: {
    master: {
      apps: [
        {
          name: 'utoopack-qiankun2-slave',
          entry: '//localhost:8101',
        },
      ],
    },
  },
  routes: [
    { path: '/', component: 'index' },
    { path: '/app1/*', microApp: 'utoopack-qiankun2-slave' },
  ],
  utoopack: {}
});
