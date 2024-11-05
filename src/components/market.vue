<template>
    <section id="market">
        <v-container>
            <h2 class="text-center text-secondary pb-4">We Market Your Home to The World</h2>
            <v-row>
                <v-col cols="12">
                    <h5 class="text-center pb-4">Our Online Marketing Strategy</h5>
                    <p :class="(windowWidth >= 800 ? 'text-body-1 ' : 'text-body-2 ') + ' text-justify '">
                        The Bay Area remains one of the world's most sought-after regions to live in, 
                        and when looking to sell, it is vital that your home be marketed online to audiences locally, 
                        nationally, and internationally.
                    </p>
                </v-col>
                <v-col
                    cols="12" 
                    sm="4"
                    md="4"
                    v-for="(item,index) in market"
                    :key="index"
                >
                    <h5 class="text-center pb-4">{{ item.title }}</h5>
                    <p :class="(windowWidth >= 800 ? 'text-body-1 ' : 'text-body-2 ') + ' text-justify '">
                    {{ item.content }}
                    </p>
                </v-col>
                <v-col cols="6" class="ma-auto">
                    <v-sheet class="pa-4 rounded-lg elevation-5" color="white">
                        <v-img
                        src="./images/logos.jpg"
                        height="100%"
                        class="ma-auto"
                    ></v-img>
                    </v-sheet>
                </v-col>
            </v-row>

            <v-row
                class="pb-4 "
                justify="center"
                align="center"
                v-for="(item, index) in gallery"
                :key="index"
            >
                <v-col 
                    order="2" 
                    :order-md="item.id % 2 == 0 ? 2 : 1" 
                    md="6" 
                    sm="10" 
                    cols="12"
                >
                    <p v-if="item.others" :class="(windowWidth >= 800 ? 'text-body-1 ' : 'text-body-2 ') + ' text-justify pb-4'">{{ item.others[0] }}</p>
                        <v-sheet color="white" class="pa-4 rounded-lg elevation-5 mb-4">   
                            <v-row align="center">
                                <v-col
                                    v-for="(logo,ind) in item.logo"
                                    :key="ind"
                                >
                                    <v-img
                                        :src="logo"
                                    ></v-img>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    <p v-if="item.others" :class="(windowWidth >= 800 ? 'text-body-1 ' : 'text-body-2 ') + ' text-justify pb-4'">{{ item.others[1] }}</p>
                    <div>
                        
                        <p 
                            v-if="item.content"
                            v-for="(content,i) in item.content"
                            :key="i"
                            :class="(windowWidth >= 800 ? 'text-body-1 ' : 'text-body-2 ') + ' text-justify pb-4'"> 
                            {{ content }}
                        </p>

                    </div>
                </v-col>
                <v-col order="1" :order-md="item.id % 2 == 0 ? 1 : 2" md="6" sm="10" cols="12">
                <div class="photo-container">
                    <div class="photo-card bg-primary">
                    <v-img class="photo" :src="item.image" height="100%" aspect-ratio="1/1">
                    </v-img>
                    </div>
                </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useDataStore } from "../store.js";
import {ref} from 'vue'
const dataStore = useDataStore();
const { darkMode, windowWidth } = storeToRefs(dataStore);


const market = ref([
    {
        id:1,
        title:'Local Exposure',
        content:'Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.'
    },
    {
        id:2,
        title:'National Exposure',
        content:'We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We  will receive every inquiry about your property directly.'
    },
    {
        id:3,
        title:'International Exposure',
        content:'To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including: Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK'
    },
])
const gallery = ref([
    {
        id:1,
        content:[
            'Leading Real Estate Companies of The World® & Luxury Portfolio International',
            'JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. With more than 500 member firms around the world, Our luxury listings are exposed to a vast global audience and reach potential buyers and investors in over 50 countries.',
            "Who's Who in Luxury Real Estate",
            "Who’s Who in Luxury Real Estate is a global collection of luxury real estate brokers.",
        ],
        logo:[
            './images/market/photo3.jpg',
            './images/market/photo4.jpg',
            './images/market/photo5.jpg',
        ],
        image:'./images/market/photo1.jpg',
    },
    {
        id:2,
        others:[
            `Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:`,
            `We also have several well-positioned affiliate offices in China, providing our clients with access to buyers in Hong Kong, Shanghai, and Beijing.`
        ],
        logo:[
            './images/market/photo3.jpg',
            './images/market/photo4.jpg',
            './images/market/photo5.jpg',
        ],
        image:'./images/market/photo2.jpg',
    },
])
</script>