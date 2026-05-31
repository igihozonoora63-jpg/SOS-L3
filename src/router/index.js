import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue';
import Gallery from '../views/Gallery.vue';
import Destination from '../views/Destination.vue';
import Contact from '../views/Contact.vue';
import Services from '../views/Services.vue';
import Home from '../views/Home.vue';
import Images from '../views/Images.vue';
import Videos from '../views/Videos.vue';
import Kigali from '../views/Kigali.vue';
import Northern from '../views/Northern.vue';
import Western from '../views/Western.vue';
import Southern from '../views/Southern.vue';
import Eastern from '../views/Eastern.vue';



const routes =[
    {path:'/', name:'Home', component:Home},
    {path:'/about',name:'About', component:About},
    {path:'/Gallery',name:'Gallery', component:Gallery},
    {path:'/Destination',name:'Destination', component:Destination},
    {path:'/contact',name:'Contact', component:Contact},
    {path:'/services', name:'Services', component:Services},
    {path:'/images', name:'Images', component:Images},
    {path:'/videos', name:'Videos', component:Videos},
    {path :'/kigali', name:'Kigali', component:Kigali},
    {path :'/northern', name:'Northern', component:Northern},
    {path :'/western', name:'Western', component:Western},
    {path :'/southern', name:'Southern', component:Southern},
    {path :'/eastern', name:'Eastern', component:Eastern},
]

const router = createRouter({history: createWebHistory(import.meta.env.BASE_URL),routes,})

export default router
