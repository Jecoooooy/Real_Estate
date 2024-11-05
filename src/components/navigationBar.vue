<template>
    <v-app-bar 
        scroll-behavior="fully-hide"
        :height="$vuetify.display.mobile ? 'default' : '100'"
        :color="appBarColor"
        :density="appBarDensity"
        :elevation="appBarElevation"
        style="transition: all 0.5s ease;"
    >
        <v-app-bar-nav-icon
            class="ml-4"
            style="z-index:10;"
            rounded
            @click="drawer = !drawer"
            v-if="$vuetify.display.mobile ? true : false"
        ></v-app-bar-nav-icon>
        <v-img
            class="nav-logo"
            max-width="300px"
            :style="'filter: invert(' + (darkMode? 1:0) + ')'"
            src="https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/slkmzpwmsmmefdpky31q/jhsereno-dark"
        ></v-img>
        <template v-slot:append>
            <v-list v-if="$vuetify.display.mobile ? false : true" class="d-flex" bg-color="transparent">
                <v-list-item
                    v-for="(item,index) in routes"
                    class="text-uppercase rounded-xl"
                    :to="item.path"
                    :title="item.name"
                ></v-list-item>
            </v-list>
            <div>
                <v-tooltip v-model="showTooltip" bottom >
                    <template #activator="{ props }">
                        <v-btn
                            size="large"
                            v-bind="props"
                        >
                            <v-icon>mdi-cog</v-icon>
                            <v-menu
                                activator="parent"
                                :close-on-content-click="false"
                            >
                                <v-list width="250">
                                    <v-list-item>
                                        <v-switch
                                            color="secondary"
                                            density="default"
                                            v-model="darkMode"
                                            hide-details
                                            false-icon="mdi-white-balance-sunny"
                                            true-icon="mdi-weather-night"
                                            base-color="secondary"
                                            @change="toggleTheme()"
                                            :label="` ${darkMode ? 'Lights off' : 'Lights on'}`"
                                        ></v-switch>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-btn>
                    </template>
                    <span class='custom-tooltip'>Hi! <br>Want to give me a new look? <br>Change my theme here!</span>
                </v-tooltip>
                
            </div>
                
            
        </template>
        
    </v-app-bar>
</template>
<script setup>
    import { useTheme } from "vuetify";
    import {ref,onMounted, onBeforeUnmount} from "vue"
    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';
    import { useRouter } from 'vue-router';

    const dataStore = useDataStore();
    const { drawer,darkMode } = storeToRefs(dataStore);

    const showTooltip = ref(true);
    const router = useRouter()
    const routes = router.options.routes
    const theme = useTheme();
    const toggleTheme = () => {
        theme.global.name.value = darkMode.value ? "customDarkTheme" : "customLightTheme";
    };


    


    const appBarColor = ref('transparent')
    const appBarDensity = ref('default')
    const appBarElevation = ref(0)
    
    function scrolling(){
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            appBarColor.value = "primary"; 
            appBarDensity.value = "compact"; 
            appBarElevation.value = 20; 
        } else {
            appBarColor.value = "transparent"; 
            appBarDensity.value = "default"; 
            appBarElevation.value = 0; 
        }
    }

    onMounted(() => {
        theme.global.name.value = darkMode.value ? "customDarkTheme" : "customLightTheme";
        window.addEventListener("scroll", scrolling);
    })

    onBeforeUnmount(() => {
        window.removeEventListener("scroll", scrolling);
    })


</script>
<style >
.custom-tooltip {
    position: relative;
  color: #000 !important; /* Optional: Change text color */
  padding: 8px; /* Optional: Add padding */
  margin: 0 -8px;
  border-radius: 4px; /* Optional: Add border radius */
}
.custom-tooltip::before{
    content: "";
    position: absolute;
    top: -10px;
    right: 0px;
    height: 10px;
    width: 10px;
    background-color: #a3a3a3;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);

}
</style>