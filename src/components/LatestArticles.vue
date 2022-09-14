<template>
	<section class="p-4 md:p-24 mb-8 bg-very-light-gray">
		<h2 class="bold text-2xl md:text-4xl text-noytral-text mb-4 md:mb-16">
			The Latest Articles
		</h2>
		<div class="flex flex-col md:flex-row gap-16 md:gap-8">
			<div
				class="shadow-md rounded-md overflow-hidden flex flex-col gap-4"
				v-for="{ id, image, author, title, description } in cards"
				:key="id"
			>
				<img
					:src="image"
					alt="card-image"
					class="aspect-video md:aspect-square"
				/>
				<div class="p-4 flex flex-col gap-4">
					<p class="text-gray-text text-sm">{{ author }}</p>
					<h3 class="max-w-60 hover:text-lime-green">{{ title }}</h3>
					<p class="text-gray-text">{{ description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
	import money from "@/assets/images/image-currency.jpg";
	import plane from "@/assets/images/image-plane.jpg";
	import restaurant from "@/assets/images/image-restaurant.jpg";
	import confetti from "@/assets/images/image-confetti.jpg";
	interface Cards {
		id: number;
		image: string;
		author: string;
		title: string;
		description: string;
	}
	const cards: Cards[] = [
		{
			id: 1,
			image: money,
			author: "By Claire Robinson",
			title: "Receive money in any currency with no fees",
			description:
				"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
		},
		{
			id: 2,
			image: restaurant,
			author: "By Wilson Hutton",
			title: "Treat yourself without worrying about money",
			description:
				"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
		},
		{
			id: 3,
			image: plane,
			author: "By Wilson Hutton",
			title: "Take your Easybank card wherever you go",
			description:
				"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
		},
		{
			id: 4,
			image: confetti,
			author: "By Claire Robinson",
			title: "Our invite-only Beta accounts are now live!",
			description:
				"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
		},
	];
</script>
