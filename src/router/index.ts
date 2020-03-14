import Vue from 'vue';
import VueRouter from 'vue-router';
import itemList from '@/views/item-list.vue';



Vue.use(VueRouter);

const routes = [
  {
    path: '/:status?', // 여기서 다 매칭한다.
    name: 'item-list', // name은 라우트의 키값
    component: itemList,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
