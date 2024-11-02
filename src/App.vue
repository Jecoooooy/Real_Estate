<template>
	<v-app>
		<div class="zise"></div>
		<navdrawer></navdrawer>
		<navbar></navbar>
		<v-main>
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
</script>