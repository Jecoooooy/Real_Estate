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
                title:'Initial',
                image:'./images/sellingProcess/photo1.jpg',
                content:'Initial Consultation & Planning',
            },
            {
                id:2,
                title:'Execute',
                image:'./images/sellingProcess/photo2.jpg',
                content:'Devise & Execute Marketing Plan'
            },
            {
                id:3,
                title:'Review',
                image:'./images/sellingProcess/photo3.jpg',
                content:'Review Offers & Reach Agreement with Buyer'
            },
            {
                id:4,
                title:'Complete',
                image:'./images/sellingProcess/photo4.jpg',
                content:'Complete Transaction Process'
            },
            {
                id:5,
                title:'After Sale',
                image:'./images/sellingProcess/photo5.jpg',
                content:'After - Sale Service'
            },
        ],
        buyingProcess:[
            {
                id:1,
                content:'Initial Consultation & Planning'
            },
            {
                id:2,
                content:'Search for a Home & Get Pre-Approved'
            },
            {
                id:3,
                content:'Submit an Offer'
            },
            {
                id:4,
                content:'Complete Settlement Process'
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