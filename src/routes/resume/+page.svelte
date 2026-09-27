<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import Heading from '$components/Heading.svelte';
	import { resolve } from '$app/paths';

	let HeadingTitle = $state('Resume');
</script>

<svelte:head>
	<title>Resume - Abhijeet Dhikale</title>
</svelte:head>

<div
	class="Resume flex flex-col items-center gap-6;"
	in:fly={{ easing: cubicIn, y: -100, duration: 1200 }}
>
	<Heading {HeadingTitle} />
	<div class="flex gap-8">
		<a
			class="Button Button-black dark:Button-white"
			href={resolve('/Documents/Abhijeet-Prakash-Dhikale-Resume.pdf')}
			target="_blank"
			type="file/pdf">View</a
		>
		<a
			class="Button Button-black dark:Button-white"
			href={resolve('/Documents/Abhijeet-Prakash-Dhikale-Resume.pdf')}
			target="_blank"
			type="file/pdf"
			download>Download</a
		>
	</div>
	<div
		class="mt-4 mb-8 grow-1 shrink-1 w-[80vw] h-[56vh] md:w-[76vw] md:h-48 lg:w-[76vw] lg:h-[48vh] xl:w-[76vw] xl:h-[48vh] 2xl:w-[76vw] xl:h-[48vh]"
	>
		<!-- <iframe
			class="w-full h-full border-none"
			src={resolve("/Documents/Abhijeet-Prakash-Dhikale-Resume.pdf#view=FitH")}
			title="Resume PDF"
			loading="lazy"
		></iframe> -->
	</div>
</div>

<style lang="scss">
	.Resume {
		.Button {
			padding: 8px 14px;
			transition: 0.5s;
			@apply border-[0.2px] rounded-2 text-4.1 cursor-pointer font-500 no-underline select-none;
		}

		.Button-white {
			@apply bg-white border-white/45 text-black;
		}

		.Button-white:hover {
			background: #000;
			color: #fff;
		}

		.Button-white:focus {
			color: rgb(0, 250, 250);
			border-bottom: 0.5px solid rgb(0, 250, 250);
		}

		.Button-black {
			@apply bg-black border-black/45 text-white;
		}

		.Button-black:hover {
			background: #fff;
			color: #000;
		}

		.Button-black:focus {
			color: rgb(0, 250, 250);
			border-bottom: 0.5px solid rgb(0, 250, 250);
		}
	}
</style>
