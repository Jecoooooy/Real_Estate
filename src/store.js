import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        drawer:false,
        darkMode:true,
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
        ],
        sellingProcess:[
            {
                id:1,
                title:'Initial Consultation & Planning'
            },
            {
                id:2,
                title:'Devise & Execute Marketing Plan'
            },
            {
                id:3,
                title:'Review Offers & Reach Agreement with Buyer'
            },
            {
                id:4,
                title:'Complete Transaction Process'
            },
            {
                id:5,
                title:'After - Sale Service'
            },
        ],
        buyingProcess:[
            {
                id:1,
                title:'Initial Consultation & Planning'
            },
            {
                id:2,
                title:'Search for a Home & Get Pre-Approved'
            },
            {
                id:3,
                title:'Submit an Offer'
            },
            {
                id:4,
                title:'Complete Settlement Process'
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