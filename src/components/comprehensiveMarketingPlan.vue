<template>
    <section id="CMP" class="position-relative" :style="`background:linear-gradient(0deg,rgba(255, 255, 255, 0),${primaryColor}), url('../../public/images/cmpBackground.png');`"   >
        <div class=" pa-6 w-50 rounded-xl CMP-title" :style="`background:linear-gradient(0deg ,rgba(255, 255, 255, 0),${primaryColor}   ,${primaryColor} ,${secondaryColor});`" >        
            <h2 class="text-center mt-8 text-h3 text-secondary position-relative"> Comprehensive Marketing Plan</h2>
        </div>
        <v-container style="padding-top: 100px;">
            <v-row 
                justify="center" 
            >
                <v-col xxl="2" xl="3" lg="3" md="5" sm="6" xs="12" cols="10"
                    v-for="(item,index) in ComprehensiveMarketingPlanData"
                >
                    <v-card color="transparent" class="CMP-card text-white rounded-xl">
                        <v-card-item>
                            <v-img 
                                :src="item.image"
                                height="200px"
                                aspect-ratio="16/9"
                            ></v-img>
                        </v-card-item>
                        <v-card-title class="text-center text-h4">{{ item.title }}</v-card-title>
                        <v-card-text class="text-center text-body-2" style="min-height: 100px!important;">{{ item.subTitle }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            v-
        </v-container>
    </section>
</template>
<script setup>
    import {ref,onMounted,computed} from "vue"
    import { useTheme  } from 'vuetify';

    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';
    
    const dataStore = useDataStore();
    const { ComprehensiveMarketingPlanData } = storeToRefs(dataStore);
    
    const theme  = useTheme ();
    const primaryColor = computed(() => theme.current.value.colors.primary);
    const secondaryColor = computed(() => theme.current.value.colors.secondary);

</script>
<style>
    .CMP-title{
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(50%,-50%);
        z-index: 11;
        
    }
    #CMP::after{
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 24px 20px #424242 inset;
        width: 110%;
        height: 100px;
    }
    #CMP{
        align-content: center;
        background-repeat: no-repeat !important;
        background-position: center  !important;
        background-size: cover  !important;
        min-height: 70svh;
        padding: 5svh 0;
    }
    .CMP-card{
        backdrop-filter: blur(16px);
        background: linear-gradient(135deg,rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.329))!important;
        cursor: pointer;    
        box-shadow: 0px 8px 8px #cfcfcf inset, 0 8px 8px #424242  !important;
        filter: drop-shadow(0 8px 8px #424242 )!important;
    }
    .CMP-card:hover img{
        transform: scale(110%);
        transition: all 0.3s ease-in-out;
    }
    .city-divider{
        
    }
</style>