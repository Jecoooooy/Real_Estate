<template>
	<v-app>
		<div class="zise"></div>
		<navdrawer style="z-index:2001;"></navdrawer>
		<navbar></navbar>
		<v-main class="position-relative pt-0" id="mainContent">
		<v-fab-transition>
		</v-fab-transition>
			<v-overlay v-model="drawer" contained></v-overlay>
			<router-view v-slot="{ Component }">
					<!-- <transition name="slide-fade" mode="out-in"> -->
						<Component :is="Component">
						</Component>
					<!-- </transition> -->
			</router-view>
		</v-main >
		<footer-section></footer-section>
	</v-app>
</template>
<script setup>

	import navbar from './components/navigationBar.vue'
	import navdrawer from './components/navigationDrawer.vue'
	import footerSection from './components/footer.vue'

	import { storeToRefs } from 'pinia';
	import { useDataStore } from './store.js';
	import { useRouter } from 'vue-router';

	import {ref,onMounted,computed} from 'vue'
    const dataStore = useDataStore();
    const { drawer } = storeToRefs(dataStore);


</script>
<style>
    .alert-setting{
        position: fixed!important;
		z-index: 2000;
		top: 15svh;
		right: 5svh;
    }
</style>