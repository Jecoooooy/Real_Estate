<template>
    <section id="process" :style="` background: url('${sellingProcessBackground}');`">
    <div :class="'section-overlay ' + (darkMode? 'dark-overlay' : 'light-overlay') " ></div>
        <v-container fluid class="position-relative" style="z-index: 3;">
        <h2 class=" text-white text-center">PROCESS</h2>
            <v-row justify="center">
                <v-col cols="12" sm="10"  md="6" lg="6" xl="5">
                <h3 class="text-center  text-white text-uppercase pb-4">Selling</h3>
                    <v-stepper 
                        mobile 
                        bg-color="primary" 
                        class="rounded-xl" 
                        :items="sellingProcess"
                        v-model="sellingProcessStep"
                        @update:model-value="changeBackground()"
                    >
                        <template v-for="(item, index) in sellingProcess" v-slot:[`item.${item.id}`]>
                            <v-card 
                                :title="`Step ${index + 1}: ${item.content}`" 
                                flat 
                                class="rounded-lg"
                            >
                                <v-img
                                    :src="item.image"
                                    :height="windowWidth>=600 ?  400 : 200"
                                    cover
                                    aspect-ratio="4/3"
                                ></v-img>
                            </v-card>
                        </template>
                    </v-stepper>
                </v-col>
                <v-col cols="12" sm="10"  md="6" lg="6" xl="5">
                    <h3 class="text-center text-white text-uppercase pb-4">buying</h3>
                    <v-timeline 
                        size="large" 
                        truncate-line="both"
                        class="position-relative"
                        density="compact" 
                        hide-opposite side="end"
                    >
                        <v-timeline-item
                            height="100%"
                            width="100%"
                            v-for="item in buyingProcess"
                            :key="item.id"
                        >
                        <template v-slot:icon>
                            <span class="text-white">{{ item.id }}</span>
                        </template>
                        <v-sheet
                            class="card-effect pa-2 justify-center rounded-xl d-flex align-center"
                            color="primary"
                            height="100%"
                            :value="true"
                        >
                            <h5 class="text-center">{{ item.content }}</h5>
                        </v-sheet>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-container>
    </section>

</template>
<script setup>
    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';
    
    const dataStore = useDataStore();
    const { sellingProcess, buyingProcess,darkMode,windowWidth } = storeToRefs(dataStore);


    import {ref,onMounted,computed} from "vue"
    import { useTheme  } from 'vuetify';
    const theme  = useTheme ();
    const primaryColor = computed(() => theme.current.value.colors.primary);
    const secondaryColor = computed(() => theme.current.value.colors.secondary);

    const sellingProcessStep = ref(2)
    const sellingProcessBackground = ref('./images/sellingProcess/photo1.jpg')
    function changeBackground(){
        for (let index = 0; index < sellingProcess.value.length; index++) {
            const element = sellingProcess.value[index];
            if (sellingProcessStep.value == element.id) {
                sellingProcessBackground.value = element.image
            }
        }

        
    }
</script>
<style>
#process{
    padding: 5svh 0 7svh 0;
    position: relative;
    background-repeat: no-repeat !important;
    background-position: center  !important;
    background-size: cover  !important;
    box-shadow: 0 8px 8px #424242;
    overflow: hidden;
    transition: background 0.5s ease-in-out;
}
.section-overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    backdrop-filter: blur(8px);
}
.dark-overlay{
    background: linear-gradient(0deg,rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.753));
}
.light-overlay{
    background: linear-gradient(180deg,rgba(255, 255, 255, 0.219),rgb(0, 0, 0));
}
.card-effect{
    box-shadow: 0 8px 12px #212121bd, 0px 8px 12px #777777c5 inset!important;
}
</style>