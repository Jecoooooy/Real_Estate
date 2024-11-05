<template>
    <section id="decorGuidance">
        <v-container >
            <h2 class="text-secondary text-center mb-10 text-uppercase"> Decor Guidance</h2>
            <v-row align="start" justify="space-around">
                <v-col cols="12" sm="12"  md="6" lg="7" xl="5">
                <div class="lamp container">
                    <h3 class=" text-secondary  text-center ">My Staging Expertise</h3>
                </div>
                    <div :class="(windowWidth >= 900 ? 'py-6':'py-4') +  ' shelf-container position-relative w-100 d-flex'"  v-for="(item,index) in data">
                        <div class="underlight">
                            <div class="underlight-group">
                                <div :class="'w-75 underlight-left'" :style="`background: conic-gradient(from 90deg, ${secondaryColor},rgba(255, 255, 255, 0.062), rgba(255, 255, 255, 0%), rgba(255, 255, 255, 0%))`"></div>
                                <div :class="'w-75 underlight-right'" :style="`background: conic-gradient(from 270deg,  rgba(255, 255, 255, 0%), rgba(255, 255, 255, 0%),rgba(255, 255, 255, 0.062),${secondaryColor})`"></div>
                            </div>
                        </div>
                        <div class="position-absolute  left-0 w-100 h-100" :style="`z-index:2; background: linear-gradient(0deg,${backgroundColor},#ffffff00,#ffffff00,#ffffff00);`"></div>
                        <!-- <v-icon color="secondary" size="x-large">mdi-menu-right</v-icon> -->
                        <div class="w-100 position-relative pt-4" style="z-index:3;">
                            <h5 class="font-weight-bold  text-black text-center" style="text-shadow:0px 0px 3px #424242">{{item.content}}</h5>
                            <div :class="(windowWidth >= 900 ? 'w-50':'w-75') + ' shelf rounded ma-auto bg-third'" :style="`height: 12px;`"></div>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="10" md="6" lg="5" xl="5" > 
                    <div class="carousel-container position-relative pa-6 bg-grey-darken-4 rounded-xl d-flex justify-center align-center" :style="'height:' + (windowWidth >= 800 ?  '500px;' : '300px;')">
                    <v-expand-transition>
                        <v-carousel
                            v-if="televisionScreen"
                            :height="windowWidth>=800 ?  450 : 250"
                            color="secondary"
                            class="carousel-custom rounded-lg"
                            style="transition: all 0.5s ease-in-out;"
                            show-arrows="hover"
                            cycle
                            hide-delimiter-background
                        >
                            <h3 
                                class="rounded-s-lg decor-guidance-text text-primary pl-4 pa-2  border-s-xl border-primary border-opacity-100" 
                                :style="`background: linear-gradient(90deg,${secondaryColor},#21212100);`"
                            >
                                Intentional ​​​​​​​Layout
                            </h3>
                            <v-carousel-item
                            v-for="(slide, i) in slider"
                            :key="i"
                            >
                            <v-sheet
                                color="primary"
                                height="100%"
                            >
                                <v-img
                                    :src="slide.image"
                                    height="100%"
                                    cover
                                ></v-img>
                            </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </v-expand-transition>
                    </div>

                    <!-- <v-img class="rounded-xl position-relative overflow-hidden decor-guidance-img"  src="./images/cmp/photo6.jpg">
                        <h2 class="decor-guidance-text text-primary pl-4 pa-2 text-h3 border-s-xl border-primary border-opacity-100" :style="`background: linear-gradient(90deg,${secondaryColor},#21212100);`">Decor Guidance</h2>
                    </v-img> -->
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script setup>
    import {ref,onMounted,computed} from "vue"
    import { useTheme  } from 'vuetify';
    const theme  = useTheme ();
    const primaryColor = computed(() => theme.current.value.colors.primary);
    const backgroundColor = computed(() => theme.current.value.colors.background);
    const secondaryColor = computed(() => theme.current.value.colors.secondary);

    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';
    
    const dataStore = useDataStore();
    const { windowWidth } = storeToRefs(dataStore);
    const data = ref([
        {
            icon:'mdi-menu-right',
            content:'Unclutter and organize your home'
        },
        {
            icon:'mdi-menu-right',
            content:'Neatly arrange drawers and cabinets'
        },
        {
            icon:'mdi-menu-right',
            content:'Keep pets outdoors or off the premises'
        },
        {
            icon:'mdi-menu-right',
            content:'Play soft music'
        },
    ])
    const slider = ref([
        {
            image:'./images/cmp/photo5.jpg',
        },
        {
            image:'./images/cmp/photo6.jpg',
        },
        {
            image:'./images/cmp/photo7.jpg',
        },
        {
            image:'./images/cmp/photo8.jpg',
        },
    ])
    const televisionScreen = ref(false)
    onMounted(async() => {
        setTimeout(() => {
            televisionScreen.value = true
        }, 400);
    })
    
</script>
<style>
    .decor-guidance-text{
        position: absolute;
        bottom: 45px;
        left: 20px;
        width: 90%;
        z-index: 15;
    }
    #decorGuidance{
        padding: 5svh 0 5svh 0;
    }
    .decor-guidance-img{
        box-shadow:  0 20px 20px #cfcfcf inset, 0 8px 8px #424242   ;
    }
    .carousel-custom{
        position: relative;
        /* border-radius: 20px; */
    }
    .carousel-container::after{
        content: "";
        height: 50px;
        width: 200px;
        position: absolute;
        background-color: #212121;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,100%) ;
        clip-path: polygon(40% 0, 60% 0, 60% 80%, 100% 80%, 100% 100%, 0 100%, 0 80%, 40% 80%);
        border-radius: 0 0 4px 4px;
    }
    .shelf-container{
        /* background-position: bottom; */
        
    }
    .underlight{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .underlight-group{
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
    }
    .underlight-left{
        /* position: absolute; */
        /* opacity: 50%; */
        width: 50%;
        height: 100%;
        z-index: 1;
    }
    .underlight-right{
        /* position: absolute; */
        /* opacity: 50%; */
        /* width: 50%; */
        height: 100%;
        z-index: 1;
    }
    .shelf{
        border-top:1px solid #69696911;
        box-shadow: 0 4px 6px rgba(255, 255, 255, 0.671) inset;
    }
    .carousel-container{
        filter:drop-shadow(0 0 16px white);
        transition: height 0.5s ease-in-out;
        z-index: 15;
    }
</style>