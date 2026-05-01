import { createRouter, createWebHistory } from 'vue-router'
import VditorEditor from '../components/VditorEditor.vue'

const routes = [
  {
    path: '/',
    name: 'Editor',
    component: VditorEditor,
  },
  // 可在此扩展其他路由，如关于页面
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router