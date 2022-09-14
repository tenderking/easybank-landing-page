<script lang="ts" setup>
	import IconLogo from "./icons/IconLogo.vue";
	import IconHamburger from "./icons/IconHamburger.vue";
	import IconClose from "./icons/IconClose.vue";
	import { useMediaQuery, useToggle } from "@vueuse/core";
	import CtaButton from "./CtaButton.vue";

	const isMobile = useMediaQuery("(max-width: 768px)");
	const idText = "header-icon-logo";
	const [isOpen = true, toggleButton] = useToggle();
	const links = ["Home", "About", "Contact", "Blog", "Careers"];
</script>
<template>
	<nav
		role="navigation"
		aria-label="Main"
		class="w-100 flex justify-between items-center py-3.5 bg-white md:px-16 px-4 relative"
	>
		<IconLogo :idText="idText" />

		<div
			class="absolute md:static -left-10 -right-10 bottom-0 top-12 bg-gradient-to-b from-overlay-gradOne to-overlay-gradTwo h-screen text-center z-10 md:h-auto"
			:class="{ 'h-auto': isOpen === false }"
		>
			<ul
				class="mt-8 mx-12 md:m-0 md:p-0 p-5 flex flex-col md:flex md:flex-row md:justify-even gap-4 lg:gap-8 md:gap-4 rounded-md md:rounded-none shadow-md md:shadow-none bg-white"
				:class="{ hidden: isOpen === false }"
			>
				<li
					v-for="link in links"
					:key="link"
					class="md:relative after:content-[''] md:after:absolute after:left-0 after:right-0 after:-bottom-6 after:h-0 after:bg-lime-green md:hover:after:h-1 md:focus :after:h-1"
				>
					<a
						class="md:text-gray-text hover:text-gray-text md:hover:text-noytral-text text-noytral-text w-2 h-2"
						href="#"
						tabindex="0"
						>{{ link }}</a
					>
				</li>
			</ul>
		</div>
		<i @click="toggleButton()" v-if="isMobile">
			<IconClose v-if="isOpen" />
			<IconHamburger v-else />
		</i>
		<CtaButton :class="{ hidden: isMobile }" />
	</nav>
</template>
