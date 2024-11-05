<template>
    <section id="process" :style="` background: url('${sellingProcessBackground}');`">
    <div :class="'section-overlay ' + (darkMode? 'dark-overlay' : 'light-overlay') " ></div>
        <v-container fluid class="position-relative" style="z-index: 3;">
        <h2 class=" text-white text-center">PROCESS</h2>
            <v-row justify="center">
                <v-col cols="12" sm="10"  md="6" lg="6" xl="5" id="stepper" style="min-height: 500px;">
                <h3 class="text-center  text-white text-uppercase pb-4">Selling</h3>
                <transition name="zoom-left" mode="out-in">
                    <v-stepper 
                        v-show="hideStepper"
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
                </transition>

                </v-col>
                <v-col cols="12" sm="10"  md="6" lg="6" xl="5" >
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
                            :id="'buyingStep'+item.id"
                        >
                        <template v-slot:icon>
                            <span class="text-white">{{ item.id }}</span>
                        </template>
                            <transition name="zoom-right" mode="out-in">
                                <v-sheet
                                    v-if="item.show"
                                    class="card-effect pa-2 justify-center rounded-xl d-flex align-center"
                                    color="primary"
                                    height="100%"
                                    :value="true"
                                >
                                    <h5 class="text-center">{{ item.content }}</h5>
                                </v-sheet>
                            </transition>
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


    import {ref,onMounted,computed,onBeforeUnmount} from "vue"
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


    let hideStepper = ref(false)
    function scrolling(){
        const windowHeight = window.innerHeight;
        const windowBottom = window.scrollY + (windowHeight - 200)
        const windowTop = window.scrollY + 200
        
        
        const mainPageRect = document.getElementById('mainContent').getBoundingClientRect()
        
        
        const stepperSection = document.getElementById('stepper')
        const stepperSectionRect = stepperSection.getBoundingClientRect()
        const stepperSectionTop = stepperSectionRect.top - mainPageRect.top
        const stepperSectionBottom = stepperSectionTop + stepperSectionRect.height
        
        if( windowBottom > stepperSectionTop  &&  windowTop < stepperSectionBottom){
            hideStepper.value = true
        }else{
            hideStepper.value = false
        }


        for (let index = 0; index < buyingProcess.value.length; index++) {
            const element = buyingProcess.value[index];
            const buyStepSection = document.getElementById('buyingStep'+element.id)
            
            const buyStepSectionRect = buyStepSection.children[0].getBoundingClientRect()
            const buyStepSectionTop = buyStepSectionRect.top - mainPageRect.top
            const buyStepSectionBottom = buyStepSectionTop + buyStepSectionRect.height
            
            if( windowBottom > buyStepSectionTop  &&  windowTop < buyStepSectionBottom){
                
                element.show = true
            }else{
                element.show = false
            }
        }
        

    }




    onMounted(async() => {
        window.addEventListener("scroll", scrolling);
    })
    

    onBeforeUnmount(() => {
        window.removeEventListener("scroll", scrolling);
    })



</script>
<style>
#process{
    padding: 5svh 0 10svh 0;
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

    .zoom-left-enter-active {
        transition: all 0.3s ease-out !important;
    }

    .zoom-left-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1)!important;
    }

    .zoom-left-enter-from,
    .zoom-left-leave-to {
        transform: translateX(-40px) skew(-30deg);
        scale: 0;
        opacity: 0;
    }
    .zoom-right-enter-active {
        transition: all 0.3s ease-out !important;
    }

    .zoom-right-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1)!important;
    }

    .zoom-right-enter-from,
    .zoom-right-leave-to {
        transform: translateX(50%);
        scale: 0;
        opacity: 0;
    }
</style>