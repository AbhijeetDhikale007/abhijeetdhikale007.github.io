<script lang="ts">
	import { Project } from '$data/Projects';
	import Ico from '$components/Ico.svelte';
	import VanillaTilt from 'vanilla-tilt';
	import { resolve } from '$app/paths';

	function tilt(node: HTMLElement) {
		VanillaTilt.init(node, {
			max: 8,
			speed: 80,
			glare: true,
			'max-glare': 0.1,
			gyroscope: true,
			gyroscopeMinAngleX: -18,
			gyroscopeMaxAngleX: 18,
			gyroscopeMinAngleY: -18,
			gyroscopeMaxAngleY: 18
		});

		return {
			destroy() {
				if ((node as any).vanillaTilt) {
					(node as any).vanillaTilt.destroy();
				}
			}
		};
	}
</script>

{#each Project as project}
	<div
		class="border-1 border-black/40 hover:border-black dark:border-white/40 dark:hover:border-white w-full max-w-[400px] lg:w-[30vw] xl:w-[26vw] bg-transparent flex flex-wrap flex-col gap-y-3 rounded-xl p-6 transition-colors"
		use:tilt
	>
		<!-- Preview Image Container with Logo positioned at bottom left -->
		<div
			class="relative w-full rounded-lg overflow-hidden border border-black/20 dark:border-white/20 group select-none"
		>
			{#if project.imgUrl}
				<img
					src={resolve('/' + project.imgUrl)}
					alt={`${project.Title} preview`}
					class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-95 select-none"
				/>
			{:else}
				<div class="w-full h-full bg-black/5 dark:bg-white/10 flex items-center justify-center">
					<span
						class="text-xs uppercase tracking-widest font-semibold text-black/50 dark:text-white/50"
						>{project.Title}</span
					>
				</div>
			{/if}

			<!-- Project Logo on Preview Image (Bottom Left Position) -->
			<Ico
				class="w-9 h-9 absolute bottom-1 left-1 p-.5 rounded-md flex items-center justify-center z-2"
				name={project.Logo}
			/>
		</div>
		<div class="flex justify-between items-center w-full">
			<h2 class="text-2xl font-semibold">{project.Title}</h2>
			<div class="flex items-center gap-x-2">
				<a
					class="Tooltip w-8 h-8 p-1.2 flex content-center border-1 border-black/40 hover:border-black dark:border-white/40 dark:hover:border-black rounded-2 transition-all bg-black hover:bg-black hover:invert dark:bg-black dark:invert dark:hover:invert-0"
					data-title="GitHub"
					aria-label="GitHub Repository for {project.Title}"
					href={project.urlGit}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Ico name="GitHubW" />
				</a>
				<a
					class="Tooltip w-8 h-8 p-1.2 flex content-center border-1 border-white/40 hover:border-black dark:hover:border-black rounded-2 transition-all bg-black hover:bg-black hover:invert dark:bg-black dark:invert dark:hover:invert-0"
					data-title="Deployment"
					aria-label="Live Deployment for {project.Title}"
					href={project.urlDeploy}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Ico name="Link" />
				</a>
			</div>
		</div>
		<hr />
		<div class="flex gap-3 items-center w-full font-medium text-sm">
			<Ico name="Project" class="invert dark:invert-0 h-6 w-6" />
			<p>{project.Type}</p>
		</div>
		<hr />
		<div class="flex gap-3 items-center w-full font-medium text-sm">
			<Ico name="Time" class="invert dark:invert-0 h-6 w-6" />
			<p>{project.Duration}</p>
		</div>
		<hr />
		<div class="flex flex-grow flex-shrink py-2 min-h-[14vh]">
			<p
				class="text-sm leading-relaxed text-justify m-0 text-black/90 dark:text-white/90 font-light"
			>
				{project.Details}
			</p>
		</div>
		<div class="flex justify-between items-center w-full text-xs font-semibold">
			<div class="px-3 py-2 border-1 border-black/25 dark:border-white/20 rounded-full">
				<p>{project.From}</p>
			</div>
			<div class="px-3 py-2 border-1 border-black/25 dark:border-white/20 rounded-full">
				<p>{project.To}</p>
			</div>
		</div>
		<hr />
		<div class="flex gap-x-2 items-center justify-start h-[6vh] w-full mt-auto">
			{#each [project.SVG1, project.SVG2, project.SVG3, project.SVG4, project.SVG5, project.SVG6, project.SVG7, project.SVG8, project.SVG9, project.SVG10].filter( (svg): svg is string => Boolean(svg) ) as svg}
				<div class="Tooltip" data-title={svg}>
					<Ico
						class="border-1 border-black:40 dark:border-white/40 w-8 h-8 p-1.6 rounded-2"
						name={svg}
					/>
				</div>
			{/each}
		</div>
	</div>
{/each}

<style lang="scss">
	hr {
		border: none;
		border-bottom: 0.4px solid rgba(100, 100, 100, 0.5);
		margin: 0;
	}
</style>
