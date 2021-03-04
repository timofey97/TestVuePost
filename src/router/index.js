import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import Note from '../views/Note.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/create',
    name: 'Note',
    component: Note
  },
  {
    path: '/edit/:noteId',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
