<template>
    <section id="living-room" class="position-relative living-room">
        <v-parallax
            class="position-relative"
            
            src="images/living_room.jpg"
            height="600px"
        >
        </v-parallax>
        <div class=" photo-overlay top-0 left-0 position-absolute h-100 w-100 opacity-50 " style="z-index:10;"> 
            <div class="top-light" :style="`background: linear-gradient(180deg, ${primaryColor},rgba(255, 255, 255, 0));`"></div>
            <div class="bottom-light-group">
                <div class="bottom-light" :style="`background: conic-gradient(from 90deg, ${secondaryColor},rgba(255, 255, 255, 0.062), rgba(255, 255, 255, 10%))`"></div>
                <div class="bottom-light" :style="`background: conic-gradient(from 270deg,  rgba(255, 255, 255, 10%),rgba(255, 255, 255, 0.062),${secondaryColor})`"></div>
            </div>
        </div>
        <div class="position-absolute w-100 h-100 top-0 left-0"  style="z-index:11;">
            <v-container fluid class="pa-0 d-flex w-100 h-100 justify-center align-center">
                <div :class="(windowWidth >= 900 ? 'w-50':'w-75')  + ' position-relative'" style="top:-60px"> 
                    <h1 class="text-center  text-secondary" >SERVICES</h1>
                    <div class="position-relative w-100">
                        <v-text-field
                            color="black"
                            bg-color="transparent"
                            class="text-black border-b-xl border-primary border-opacity-100 search font-weight-bold"
                            prepend-inner-icon="mdi-magnify"
                            variant="underlined"
                            density="comfortable"
                            hide-details
                            label="Search by Address or Area"
                        ></v-text-field>
                    </div>
                        
                </div>
            </v-container>
        </div>
    </section>
</template>
<script setup>
    import {ref,computed} from 'vue';
    import { useTheme  } from 'vuetify';

    const theme  = useTheme ();
    const primaryColor = computed(() => theme.current.value.colors.primary);
    const secondaryColor = computed(() => theme.current.value.colors.secondary);
    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';
    
    const dataStore = useDataStore();
    const { windowWidth } = storeToRefs(dataStore);
</script>
<style>
.search {
    backdrop-filter: blur(4px);
}
.photo-overlay{
    /* pointer-events: none; */
}
.top-light{
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: 50%;
}
.bottom-light-group{
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
}
.bottom-light{
    transition: all 0.6s ease-in-out;
    height: 100%;
    width: 50%;
}
.living-room input{
    filter: drop-shadow( 0px 2px 4px #424242 );
}
</style>