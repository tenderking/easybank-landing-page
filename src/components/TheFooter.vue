<template>
	<div class="flex flex-col items-center justify-between gap-4">
		<IconLogo :fillColor="darkBg" :idText="idText" />
		<div class="flex gap-4">
			<IconFacebook />

			<IconYoutube />

			<IconTwitter />

			<IconPinterest />

			<IconInstagram />
		</div>
	</div>

	<nav role="navigation" aria-label="Footer">
		<ul
			class="md:grid flex flex-col gap-4 grid-cols-2 grid-flow-row text-center md:text-left items-center place-items-stretch text-white"
		>
			<li>
				<a class="hover:text-lime-green focus:text-lime-green" href="#"
					>About Us</a
				>
			</li>
			<li>
				<a class="hover:text-lime-green focus:text-lime-green" href="#"
					>Contact</a
				>
			</li>
			<li>
				<a class="hover:text-lime-green focus:text-lime-green" href="#">Blog</a>
			</li>
			<li>
				<a class="hover:text-lime-green focus:text-lime-green" href="#"
					>Careers</a
				>
			</li>
			<li>
				<a class="hover:text-lime-green focus:text-lime-green" href="#"
					>Support</a
				>
			</li>
			<li>
				<a class="hover:text-lime-green focus:text-lime-green" href="#"
					>Privacy Policy</a
				>
			</li>
		</ul>
	</nav>

	<div class="flex flex-col gap-4 items-center justify-between">
		<CtaButton />
		<p class="text-gray-text">© Easybank. All Rights Reserved</p>
	</div>
</template>
<script setup lang="ts">
	import IconLogo from "./icons/IconLogo.vue";
	import IconFacebook from "./icons/IconFacebook.vue";
	import IconYoutube from "./icons/IconYoutube.vue";
	import IconTwitter from "./icons/IconTwitter.vue";
	import IconPinterest from "./icons/IconPinterest.vue";
	import IconInstagram from "./icons/IconInstagram.vue";
	import CtaButton from "./CtaButton.vue";
	const idText = "footer-icon-logo";
	const darkBg = "#fff";
</script>
