import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        drawer:false,
        darkMode:true,
        windowWidth:window.innerWidth,
        ComprehensiveMarketingPlanData:[
            {
                image:'./images/cmp/photo1.png',
                title:'Responsive',
                subTitle:'I am always available via phone, text, or email.',
                show:false,
            },
            {
                image:'./images/cmp/photo2.png',
                title:'Syndication',
                subTitle:'I market your property locally, nationally, and internationally',
                show:false,
            },
            {
                image:'./images/cmp/photo3.png',
                title:'Virtual Tour',
                subTitle:`Let's make your home stand out with a high quality virtual tour.`,
                show:false,
            },
            {
                image:'./images/cmp/photo4.png',
                title:'Photography',
                subTitle:'Beatiful, high-end photography is a central part of our marketing plan for your property.',
                show:false,
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
                content:'Initial Consultation & Planning',
                show:false,
            },
            {
                id:2,
                content:'Search for a Home & Get Pre-Approved',
                show:false,
            },
            {
                id:3,
                content:'Submit an Offer',
                show:false,
            },
            {
                id:4,
                content:'Complete Settlement Process',
                show:false,
            },
        ],
        about:[
            {
                id:1,
                title:'Over 33 Years of Real Estate Success',
                content:'We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. ​​​​​​​In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an experience like no other.',
                image:'./images/about/photo1.jpg',
            },
            {
                id:2,
                title:'We Want To Create An Unforgettable Experience For You...',
                content:'We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. ​​​​​​​ Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.',
                image:'./images/about/photo2.jpg',
            },
            {
                id:3,
                title:'The Hansen Partners Communications Tablet',
                content:'We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available at the with a click of your tablet.',
                additionals:'We believe that transparency and guiding you and your family through the process is key to having the best experience.  During these uncertain times. It is a good feeling to know you have some one with a proven track record you can count on.  We will be here to handle your needs during the Real Estate process.  We think of it before a need even arises. Because, that is just what we do.  Who you work with does matter! ',
                benefits:[
                    'Review all documents and sign in the comfort of your home or anywhere.',
                    'Stay up to date on all marketing activities, review materials, photos, etc. in real time.',
                    'Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.',
                    'You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our Bomb bomb video messaging system.'
                ],
                image:'./images/about/photo3.jpg',
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