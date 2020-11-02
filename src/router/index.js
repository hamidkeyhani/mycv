import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from "@/components/GeneralViews/NotFoundPage";

import Contact from "@/components/contact/Contact";
import Background from "@/components/background/Background";
import aboutMe from "@/components/aboutMe/aboutMe";
import Skills from "@/components/skills/Skills";
import Works from "@/components/works/Works";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: aboutMe
  },
  {
    path: '/aboutMe',
    name: 'aboutMe',
    component: aboutMe
  },
  {
    path: '/background',
    name: 'Background',
    component: Background
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
