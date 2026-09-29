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
			class="text-4.1 cursor-pointer font-500 no-underline select-none px-[18px] py-[6px] bg-black border-rounded-2 text-white border-[0.2px] border-black/40 hover:bg-white hover:text-black
			dark:bg-white dark:text-black dark:border-white/60 dark:hover:bg-black dark:hover:text-white"
			href={resolve('/Documents/Abhijeet-Prakash-Dhikale-Resume.pdf')}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="View Resume PDF"
			type="application/pdf">View</a
		>
		<a
			class="text-4.1 cursor-pointer font-500 no-underline select-none px-[18px] py-[6px] bg-black border-rounded-2 text-white border-[0.2px] border-black/40 hover:bg-white hover:text-black
			dark:bg-white dark:text-black dark:border-white/60 dark:hover:bg-black dark:hover:text-white"
			href={resolve('/Documents/Abhijeet-Prakash-Dhikale-Resume.pdf')}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Download Resume PDF"
			type="application/pdf"
			download>Download</a
		>
	</div>
	<div
		class="mt-6 mb-8 grow-1 shrink-1 w-[80vw] h-[56vh] md:w-[76vw] md:h-48 lg:w-[76vw] lg:h-[48vh] xl:w-[76vw] xl:h-[48vh] 2xl:w-[76vw] xl:h-[48vh]"
	>
		<iframe
			class="w-full h-full border-black/60 border-1 dark:border-white/60 rounded-3"
			src={resolve('/Documents/Abhijeet-Prakash-Dhikale-Resume.pdf#view=FitH')}
			title="Abhijeet Dhikale Resume Document PDF"
			loading="lazy"
		></iframe>
	</div>
</div>

<style lang="scss">
	.Resume {
		a {
			transition: 0.5s;
		}

		a:focus {
			color: rgb(0, 250, 250);
			border-bottom: 0.5px solid rgb(0, 250, 250);
		}
	}
</style>
