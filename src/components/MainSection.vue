<script setup lang="ts">
	import IconBg from "./icons/IconBg.vue";
	import CtaButton from "./CtaButton.vue";
	import banking from "@/assets/images/icon-online.svg";
	import budgeting from "@/assets/images/icon-budgeting.svg";
	import onboarding from "@/assets/images/icon-onboarding.svg";
	import api from "@/assets/images/icon-api.svg";
	interface Items {
		icon: string;
		title: string;
		description: string;
	}

	const items: Items[] = [
		{
			icon: banking,
			title: "Online Banking",
			description:
				"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
		},
		{
			icon: budgeting,
			title: "Simple Budgeting",
			description:
				"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
		},
		{
			icon: onboarding,
			title: "Fast Onboarding",
			description:
				"We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
		},
		{
			icon: api,
			title: "Open API",
			description:
				"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
		},
	];
</script>
<template>
	<section
		class="flex md:flex-row-reverse text-center md:text-left md:items-center flex-col bg-very-light-gray"
	>
		<IconBg class="md:w-3/5" />

		<div class="py-8 md:w-2/5 md:pl-16 p-4">
			<h1 class="bold text-3xl md:text-6xl md:mb-16 mb-8 text-noytral-text">
				Next generation digital banking
			</h1>
			<p class="text-gray-text mb-8 md:mb-16">
				Take your financial life online. Your Easybank account will be a
				one-stop-shop for spending, saving, budgeting, investing, and much more.
			</p>
			<CtaButton />
		</div>
	</section>
	<section class="bg-light-gray p-4 md:p-16">
		<div>
			<h2 class="bold text-2xl md:text-4xl text-noytral-text mb-4 md:mb-16">
				Why Choose Easybank
			</h2>
			<p class="text-gray-text mb-4 md:w-1/2">
				We leverage Open Banking to turn your bank account into your financial
				hub. Control your finances like never before.
			</p>
		</div>
		<div
			class="flex flex-col md:flex-row md:gap-4 gap-16 md:justify-between flex-wrap p-4 md:p-16"
		>
			<div
				v-for="{ icon, title, description } in items"
				:key="title"
				class="md:w-48 flex flex-col gap-6"
			>
				<img :src="icon" :alt="title" class="w-16 md:w-1/3" />
				<h3 class="text-2xl">{{ title }}</h3>
				<p class="text-gray-text max-w-64">{{ description }}</p>
			</div>
		</div>
	</section>
</template>
