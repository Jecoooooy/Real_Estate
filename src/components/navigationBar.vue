<template>
    <v-app-bar 
        scroll-behavior="fully-hide"
        :height="$vuetify.display.mobile ? 'default' : '100'"
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
            <v-list v-if="$vuetify.display.mobile ? false : true" class="d-flex" bg-color="primary">
                <v-list-item
                    v-for="(item,index) in routes"
                    class="text-uppercase rounded-xl"
                    :to="item.path"
                    :title="item.name"
                ></v-list-item>
            </v-list>
            <v-switch
                color="secondary"
                density="default"
                v-model="darkMode"
                hide-details
                false-icon="mdi-white-balance-sunny"
                true-icon="mdi-weather-night"
                base-color="secondary"
                @change="toggleTheme()"
                :label="` ${darkMode ? 'Dark' : 'Light'}`"
            ></v-switch>
        </template>
        
    </v-app-bar>
</template>
<script setup>
    import { useTheme } from "vuetify";
    import {ref,onMounted} from "vue"
    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';
    import { useRouter } from 'vue-router';

    const dataStore = useDataStore();
    const { drawer,darkMode } = storeToRefs(dataStore);


    const router = useRouter()
    const routes = router.options.routes

    const theme = useTheme();
    
    const toggleTheme = () => {
        theme.global.name.value = darkMode.value ? "customDarkTheme" : "customLightTheme";
    };
    onMounted(() => {
        theme.global.name.value = darkMode.value ? "customDarkTheme" : "customLightTheme";
    })
</script>