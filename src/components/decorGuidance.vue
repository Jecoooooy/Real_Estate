<template>
    <section id="decorGuidance">
        <v-container  fluid>
            <h2 class="text-secondary text-h3 text-center mb-10 text-uppercase"> Decor Guidance</h2>
            <v-row align="start" justify="center">
                <v-col cols="12" sm="10"  md="5" lg="5" xl="5">
                    <h2 class=" text-secondary text-h4 text-center ">My Staging Expertise</h2>
                    <div class="d-flex align-center w-100 my-4" v-for="(item,index) in data">
                        <v-icon color="secondary" size="x-large">mdi-menu-right</v-icon>
                        <v-card
                        color="primary"
                            class="rounded-xl w-100 d-flex align-center"
                            height="100px"
                        >
                            <v-card-title>
                                <p class="font-weight-bold">{{item.content}}</p>
                            </v-card-title>
                        </v-card>
                    </div>
                </v-col>
                <v-col cols="12" sm="10" md="7" lg="7" xl="7" > 
                    <v-carousel
                        height="100%"
                        color="secondary"
                        style="max-height: 500px;"
                        class="carousel-custom"
                        show-arrows="hover"
                        cycle
                        hide-delimiter-background
                    >
                        <h2 
                            class="rounded-s-lg decor-guidance-text text-primary pl-4 pa-2 text-h3 border-s-xl border-primary border-opacity-100" 
                            :style="`background: linear-gradient(90deg,${secondaryColor},#21212100);`"
                        >
                            Intentional ​​​​​​​Layout
                        </h2>
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
    const secondaryColor = computed(() => theme.current.value.colors.secondary);

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
            image:'images/cmp/photo5.jpg',
        },
        {
            image:'images/cmp/photo6.jpg',
        },
        {
            image:'images/cmp/photo7.jpg',
        },
        {
            image:'images/cmp/photo8.jpg',
        },
    ])
</script>
<style>
    .decor-guidance-text{
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: 90%;
        z-index: 15;
    }
    #decorGuidance{
        padding: 5svh 0 0 0;
    }
    .decor-guidance-img{
        box-shadow:  0 20px 20px #cfcfcf inset, 0 8px 8px #424242   ;
    }
    .carousel-custom{
        position: relative;
        border-radius: 20px;
        box-shadow: 0px 8px 8px #424242;
    }
    /* .card-container{
        position: relative;
        
    }
    .card-front{
        position: relative;
        width: 100%;
        height: 500px;
        max-width: 400px;
        box-shadow: 0 8px 8px #424242;
        z-index: 10;
        transform: rotate(0deg);
        border-radius: 4px;
        border: 1px solid #42424227;
    }
    .card-behind{
        position: absolute;
        width: 100%;
        height: 500px;
        max-width: 400px;
        box-shadow: 0 8px 8px #424242;
        z-index: 9;
        transform: rotate(-5deg);
        border-radius: 4px;
        border: 1px solid #42424227;
    }
    .card-container img{
        position: absolute;
        right: 0px;
        bottom: 40px;
        transform: rotate(10deg);
        filter: drop-shadow(6px 6px 6px #424242);
    } */
</style>