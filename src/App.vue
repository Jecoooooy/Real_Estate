<template>
	<v-app>
		<navbar></navbar>
		<v-main>
			<services></services>
		</v-main>
	</v-app>
</template>
<script setup>
import services from './components/servicePage.vue'
import navbar from './components/navigationBar.vue'
</script>