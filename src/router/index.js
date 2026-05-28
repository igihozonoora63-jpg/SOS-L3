import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue';
import Gallery from '../views/Gallery.vue';
import Destination from '../views/Destination.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
import Home from '../views/Home.vue';



const routes =[
    {path:'/home', name:'About', component:Home},
    {path:'/about',name:'About', component:About},
    {path:'/Gallery',name:'Gallery', component:Gallery},
    {path:'/Destination',name:'Destination', component:Destination},
    {path:'/contact',name:'Contact', component:Contact},
    {path:'/services', name:'Services', component:Services},
]

const router = createRouter({history: createWebHistory(import.meta.env.BASE_URL),routes,})

export default router
