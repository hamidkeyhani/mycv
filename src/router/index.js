import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from "@/components/GeneralViews/NotFoundPage";

import Accomplishments from "@/components/accomplishments/Accomplishments";
import Contact from "@/components/contact/Contact";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Resume from "@/components/resume/Resume";
import Skills from "@/components/skills/Skills";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: Resume
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/accomplishments',
    name: 'Accomplishments',
    component: Accomplishments
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
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
