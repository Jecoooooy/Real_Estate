import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        drawer:false,
        darkMode:false,
        ComprehensiveMarketingPlanData:[
            {
                image:'./images/cmp/photo1.png',
                title:'Responsive',
                subTitle:'I am always available via phone, text, or email.'
            },
            {
                image:'./images/cmp/photo2.png',
                title:'Syndication',
                subTitle:'I market your property locally, nationally, and internationally'
            },
            {
                image:'./images/cmp/photo3.png',
                title:'Virtual Tour',
                subTitle:`Let's make your home stand out with a high quality virtual tour.`
            },
            {
                image:'./images/cmp/photo4.png',
                title:'Photography',
                subTitle:'Beatiful, high-end photography is a central part of our marketing plan for your property.'
            },
        ]
    }),
    actions: {
    },
    persist: {
        enabled: true,
        strategies: [
            { 
                key: 'services', 
                storage: localStorage, 
                paths: ['drawer','darkMode'] 
            } 
        ]
    }
});