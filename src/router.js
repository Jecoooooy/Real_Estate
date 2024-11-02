import { createRouter, createWebHistory } from "vue-router";

import meetTheTeam from "./pages/meetTheTeam.vue";
import searchForHomes from "./pages/searchForHomes.vue";
import ourCommunities from "./pages/ourCommunities.vue";
import homeValuation from "./pages/homeValuation.vue";
import services from "./pages/services.vue";
import homeAcrossAmerica from "./pages/homesAcrossAmerica.vue";
import testimontials from "./pages/testimonials.vue";
import contactUs from "./pages/contactUs.vue";





const routes = [
    { 
        path: "/meetTheTeam",
        name:'Meet The Team',
        component: meetTheTeam
    },
    { 
        path: "/searchForHomes",
        name:'Search For Homes',
        component: searchForHomes
    },
    { 
        path: "/ourCommunities",
        name:'Our Communities',
        component: ourCommunities
    },
    { 
        path: "/homeValuation",
        name:'Home Valuation',
        component: homeValuation
    },
    { 
        path: "/",
        name:'Services',
        component: services
    },
    { 
        path: "/homeAcrossAmerica",
        name:'Home Across America',
        component: homeAcrossAmerica
    },
    { 
        path: "/testimontials",
        name:'Testimontials',
        component: testimontials
    },
    { 
        path: "/contactUs",
        name:'Contact Us',
        component: contactUs
    },
];




export default createRouter({
    history: createWebHistory(),
    routes,
});