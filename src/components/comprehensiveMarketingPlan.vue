<template>
    <section 
        id="CMP" 
        class="position-relative" 
        :style="`background:linear-gradient(0deg,rgba(255, 255, 255, 0),${primaryColor}), url('./images/cmpBackground.png');`"   
    >
        <div 
            class=" pa-6  rounded-xl CMP-title" 
            :style="`background:linear-gradient(0deg ,rgba(255, 255, 255, 0),${primaryColor}   ,${primaryColor} ,${secondaryColor});`" 
        >        
            <h2 class="text-center text-uppercase mt-8  text-secondary position-relative"> Comprehensive Marketing Plan</h2>
        </div>
        <v-container style="padding-top: 100px;">
            <v-row 
                justify="center" 
            >
                <v-col xxl="2" xl="3" lg="3" md="6" sm="5"  cols="6"
                    v-for="(item,index) in ComprehensiveMarketingPlanData"
                >
                    <v-card :height="cardHeight" color="transparent" class="CMP-card text-white rounded-xl ">
                        <v-card-item>
                            <v-img 
                                :src="item.image"
                                :height="cardImgHeight"
                                aspect-ratio="1/1"
                            ></v-img>
                        </v-card-item>
                        <div>
                            <v-card-title class="text-center" tag="h5">
                                {{ item.title }}
                            </v-card-title>
                            <v-card-text tag="p" class="text-center " >{{ item.subTitle }}</v-card-text>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script setup>
    import {ref,onMounted,computed} from "vue"
    import { useTheme  } from 'vuetify';

    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';
    
    const dataStore = useDataStore();
    const { ComprehensiveMarketingPlanData,windowWidth } = storeToRefs(dataStore);
    
    const theme  = useTheme ();
    const primaryColor = computed(() => theme.current.value.colors.primary);
    const secondaryColor = computed(() => theme.current.value.colors.secondary);

    let cardHeight = ref(350)
    let cardImgHeight = ref(200)
    function resize(){
        if (windowWidth.value >= 1280 && windowWidth.value <= 1600) {
            cardHeight.value = 350
            cardImgHeight.value=200
        }
        else if(windowWidth.value >= 769 && windowWidth.value <= 1279 ){
            cardHeight.value = 325
            cardImgHeight.value=175
        }
        else if(windowWidth.value >= 600 && windowWidth.value <= 768 ){
            cardHeight.value = 300
            cardImgHeight.value = 150
        }
        else if(windowWidth.value >= 320 && windowWidth.value <= 599 ){
            cardHeight.value = 250
            cardImgHeight.value = 100
        }
        
    }
    const handleResize = () => {
        windowWidth.value = window.innerWidth;
        resize()
    };

	onMounted(async () => {
        resize()
	    window.addEventListener('resize', handleResize);
    })
</script>
<style>
    .CMP-title{
        position: absolute;
        top: 0;
        width: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 11;
        
    }
    #CMP::after{
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        /* box-shadow: 0 24px 20px #424242 inset; */
        background: linear-gradient(0deg,#21212100,#21212100,rgba(126, 126, 126, 0.473));
        width: 100%;
        height: 100px;
    }
    #CMP{
        align-content: center;
        background-repeat: no-repeat !important;
        background-position: center  !important;
        background-size: cover  !important;
        box-shadow: 0 8px 8px #424242;
        border-radius: 0px 0px 20px 20px; 
        min-height: 70svh;
        padding: 5svh 0;
    }
    .CMP-card{
        backdrop-filter: blur(8px);
        background: linear-gradient(135deg,rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.329))!important;
        cursor: pointer;    
        box-shadow: 0px 2px 8px #cfcfcf inset,0px 8px 12px #eeeeee69 inset, 0 8px 8px #212121de  !important;
        filter: drop-shadow(0 8px 8px #42424234 )!important;
    }
    .CMP-card:hover img{
        transform: scale(120%);
        transition: all 0.5s ease-in-out;
    }
    .city-divider{
        
    }
</style>