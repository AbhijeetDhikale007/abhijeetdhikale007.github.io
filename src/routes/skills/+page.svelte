<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import Heading from '$components/Heading.svelte';
	import Cards from '$components/SkillsCards.svelte';
	import { SkillCategories } from '$data/Skills';
</script>

<svelte:head>
	<title>Skills - Abhijeet Dhikale</title>
</svelte:head>

<div
	class="w-full flex flex-col items-center"
	in:fly={{ easing: cubicIn, x: -100, duration: 1200 }}
>
	<Heading HeadingTitle="Skills" />

	{#each SkillCategories as category}
		<div class="w-[85%] flex flex-col justify-center">
			<div>
				<div class="HR px-5 flex items-center">
					<div class="flex items-center overflow-hidden">
						<div>
							<hr class="w-5" />
						</div>
						<div>
							<h2
								class="text-nowrap font-Roboto py-2.5 px-3 mt-[-0.5vh] text-black dark:text-white text-base md:text-lg font-mono font-medium"
							>
								{category.title}
							</h2>
						</div>
						<div>
							<hr class="w-screen" />
						</div>
					</div>
				</div>
			</div>
			<div
				class="container w-full flex flex-wrap flex-shrink gap-6 mt-5 mb-13 items-center justify-center"
			>
				{#each category.skills as skill}
					<Cards {skill} />
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	:global(.Card) {
		border-radius: 18px;
		box-shadow:
			inset 3px 3px 10px rgba(255, 255, 255, 0.1),
			inset -3px -3px 10px rgba(255, 255, 255, 0.1);
		@apply flex grow-1 shrink-1 items-center justify-between overflow-hidden cursor-pointer;
		@apply h-19 min-h-14 max-h-22 min-w-[72vw] w-[76vw] max-w-[84vw];
		@apply md:max-h-22 md:h-19 md:min-h-16 md:max-w-[42vw] md:min-w-[33vw] md:w-[36vw];
		@apply lg:min-w-68 lg:max-w-80 lg:w-76 lg:min-h-18 lg:max-h-19;
		@apply xl:w-[24vw] xl:min-w-[22vw] xl:max-w-[24vw];
		@apply 2xl:w-88 2xl:min-w-86 2xl:max-w-90 2xl:h-24 2xl:min-h-22;

		:global(.SVG) {
			@apply w-fit;
		}

		:global(.PHP) {
			filter: drop-shadow(-52px 0 36px #9ba3c8);
		}
		:global(.C) {
			filter: drop-shadow(-52px 0 36px #394aab);
		}
		:global(.CPlus) {
			filter: drop-shadow(-52px 0 36px #00599c);
		}
		:global(.TypeScript) {
			filter: drop-shadow(-52px 0 36px #00599c);
		}
		:global(.Javascript) {
			filter: drop-shadow(-52px 0 36px #f0db4f);
		}
		:global(.HTML) {
			filter: drop-shadow(-52px 0 36px #e14e1d);
		}
		:global(.CSS) {
			filter: drop-shadow(-52px 0 36px #0277bd);
		}
		:global(.SCSS) {
			filter: drop-shadow(-52px 0 36px #ff007b);
		}
		:global(.Tailwind) {
			filter: drop-shadow(-52px 0 36px #38bdf8);
		}
		:global(.UnoCSS) {
			filter: drop-shadow(-52px 0 36px #858585);
		}
		:global(.Bootstrap) {
			filter: drop-shadow(-52px 0 36px #7811f7);
		}
		:global(.Wordpress) {
			filter: drop-shadow(-52px 0 36px #0073aa);
		}
		:global(.Webflow) {
			filter: drop-shadow(-52px 0 36px #4353ff);
		}
		:global(.Svelte) {
			filter: drop-shadow(-52px 0 36px #791f01);
		}
		:global(.React) {
			filter: drop-shadow(-52px 0 36px #61dafb);
		}
		:global(.Angular) {
			filter: drop-shadow(-52px 0 36px #8b11f0);
		}
		:global(.Threejs) {
			filter: drop-shadow(-52px 0 36px #ffffff);
		}
		:global(.MySQL) {
			filter: drop-shadow(-52px 0 36px #00738d);
		}
		:global(.Postman) {
			filter: drop-shadow(-52px 0 36px #ff6c37);
		}
		:global(.Antigravity) {
			filter: drop-shadow(-52px 0 36px #59abd5);
		}
		:global(.VSCode) {
			filter: drop-shadow(-52px 0 36px #48aef2);
		}
		:global(.GitHub) {
			filter: drop-shadow(-52px 0 36px #242938);
		}
		:global(.Firebase) {
			filter: drop-shadow(-52px 0 36px #f3695c);
		}
		:global(.Eclipse) {
			filter: drop-shadow(-52px 0 36px #2c2255);
		}
		:global(.InteliJ) {
			filter: drop-shadow(-52px 0 36px #087cfa);
		}
	}

	.HR {
		hr {
			border: 0;
			border-bottom: 0.2px solid rgb(140, 140, 140, 0.6);
		}
	}
</style>
