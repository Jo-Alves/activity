import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../components/Welcome.vue"
import question1 from "../components/question-1.vue"
import question2 from "../components/question-2.vue"
import question3 from "../components/question-3.vue"
const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome
  },
  {
    path: '/questao-1',
    name: "questao-1",
    component: question1
  },
  {
    path: '/questao-2',
    name: "questao-2",
    component: question2
  },
  {
    path: '/questao-3',
    name: "questao-3",
    component: question3
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
