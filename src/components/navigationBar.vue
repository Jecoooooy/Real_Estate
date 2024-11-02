<template>
    <v-app-bar 
        scroll-behavior="fully-hide"
    >
        <v-img
            class="nav-logo"
            max-width="300px"
            :style="'filter: invert(' + (darkMode? 1:0) + ')'"
            src="https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/slkmzpwmsmmefdpky31q/jhsereno-dark"
        ></v-img>
        <v-spacer></v-spacer>
        <v-switch
            color="secondary"
            v-model="darkMode"
            hide-details
            false-icon="mdi-white-balance-sunny"
            true-icon="mdi-weather-night"
            base-color="secondary"
            @change="toggleTheme()"
            :label="` ${darkMode ? 'Dark' : 'Light'}`">
        </v-switch>
        <v-app-bar-nav-icon>
        </v-app-bar-nav-icon>
    </v-app-bar>
</template>
<script setup>
    import { useTheme } from "vuetify";
    import {ref} from "vue"
    const theme = useTheme();
    const darkMode = ref(false);
    const toggleTheme = () => {
        theme.global.name.value = darkMode.value ? "customDarkTheme" : "customLightTheme";
    };
</script>