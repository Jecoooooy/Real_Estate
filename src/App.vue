<template>
	<v-app>
		<v-app-bar 
			scroll-behavior="fully-hide"
		>
			<v-img
				src="https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/slkmzpwmsmmefdpky31q/jhsereno-dark"
			></v-img>
			
			<v-spacer></v-spacer>
			<v-switch
				color="primary"
				v-model="darkMode"
				hide-details
				base-color="secondary"
				@change="toggleTheme()"
				:label="` ${darkMode ? 'Dark Mode' : 'Light Mode'}!`">
			</v-switch>
			<v-app-bar-nav-icon>
			</v-app-bar-nav-icon>
		</v-app-bar>
	</v-app>
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