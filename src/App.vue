<template>
	<v-app>
		<div class="zise"></div>
		<navdrawer style="z-index:2001;"></navdrawer>
		<navbar></navbar>
		<v-main class="position-relative">
			<v-overlay v-model="drawer" contained></v-overlay>
			<router-view v-slot="{ Component }">
					<!-- <transition name="slide-fade" mode="out-in"> -->
						<Component :is="Component">
						</Component>
					<!-- </transition> -->
			</router-view>
		</v-main>
	</v-app>
</template>
<script setup>

	import navbar from './components/navigationBar.vue'
	import navdrawer from './components/navigationDrawer.vue'

	import { storeToRefs } from 'pinia';
	import { useDataStore } from './store.js';
	import { useRouter } from 'vue-router';

    const dataStore = useDataStore();
    const { drawer } = storeToRefs(dataStore);
</script>