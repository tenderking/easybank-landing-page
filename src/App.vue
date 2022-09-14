<script setup lang="ts">
	import TheNav from "./components/TheNav.vue";
	import TheFooter from "./components/TheFooter.vue";
	import MainSection from "./components/MainSection.vue";
	import LatestArticles from "./components/LatestArticles.vue";
</script>

<template>
	<header class="fixed z-50 left-0 right-0">
		<TheNav />
	</header>

	<main>
		<MainSection />
		<LatestArticles />
	</main>
	<footer
		class="md:p-16 p-4 flex flex-col md:flex-row md:justify-between bg-dark-blue"
	>
		<TheFooter />
	</footer>
</template>
<style></style>
