<script lang="ts">
	import { fly } from 'svelte/transition';
	import Ico from '$components/Ico.svelte';
	import { getTheme } from '$lib/theme.svelte';
	import { page } from '$app/state';

	const theme = getTheme();

	const MenuItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Skills', href: '/skills' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Experience', href: '/experience' },
		{ name: 'Education', href: '/education' },
		{ name: 'Resume', href: '/resume' }
	];

	let isOpen = $state(false);

	function MenuHandler() {
		isOpen = !isOpen;
	}

	function isItemActive(href: string): boolean {
		const currentPath = page.url?.pathname || '';
		if (href === '/') {
			return currentPath === '/';
		}
		return currentPath === href || currentPath.startsWith(`${href}/`);
	}
</script>

<header
	class="fixed flex justify-center top-0 left-0 w-[100vw] z-4 border-b-[0.1px] border-black/45 dark:border-white/45 bg-white dark:bg-black"
	in:fly={{ y: -100, duration: 1000 }}
>
	<div class="flex items-center justify-between w-[87vw] h-15">
		<a
			href="/"
			class="flex items-center gap-4 no-underline group rounded-xl border-[0.1px] border-black/35 dark:border-white/35 overflow-hidden"
		>
			<div
				class="flex items-center justify-center bg-black hover:bg-white dark:bg-white hover:dark:bg-black text-white hover:text-black dark:text-black dark:hover:text-white w-10 h-10 lg:w-12 lg:h-12 text-2xl lg:text-3xl font-bold transition-transform group-hover:scale-105 active:scale-95 select-none"
			>
				Λ
			</div>
			<span
				class="tracking-[2px] mr-4 text-black dark:text-white font-Roboto-Condensed text-md lg:text-xl xl:text-xl transition-opacity group-hover:opacity-100 select-none"
			>
				Λʙʜιנєєτ Ðʜικαℓє
			</span>
		</a>
		<nav class="flex items-center">
			<div class="lg:hidden flex items-center gap-4">
				<button
					class="flex items-center justify-center w-10 h-10 rounded-xl bg-black text-white transition-all hover:bg-white hover:text-black focus:outline-none"
					onclick={() => theme?.toggle()}
					aria-label="Toggle Theme"
				>
					<Ico class="w-5 h-5 flex-shrink-0" name={theme?.mode === 'light' ? 'Sun' : 'Moon'} />
				</button>
				<button
					class="flex justify-center items-center w-10 h-10 border-none bg-black text-white rounded-md transition-all hover:invert hover:text-black"
					onclick={() => MenuHandler()}><Ico name="Menu" /></button
				>
				<!-- Nav Menu Vertical Screens -->
				{#if isOpen}
					<div
						class="fixed inset-0 top-14 bg-white dark:bg-black backdrop-blur-xl z-10 flex flex-col items-center justify-start pt-10"
						transition:fly={{ y: -20, duration: 400 }}
					>
						<div class="bg-white dark:bg-black z-10 w-[100vw]">
							<div class="flex flex-col gap-4 w-[90vw] mx-auto">
								{#each MenuItems as item}
									{@const active = isItemActive(item.href)}
									<a
										class="flex items-center gap-4 p-4 rounded-2xl transition-all border no-underline {active
											? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white font-semibold shadow-md'
											: 'bg-black/5 dark:bg-white/5 hover:bg-white/10 border-black/5 dark:border-white/5 text-black dark:text-white'}"
										href={item.href}
										onclick={() => (isOpen = false)}
										aria-current={active ? 'page' : undefined}
									>
										<Ico
											class="w-6 h-6 {active
												? 'invert-0 dark:invert'
												: 'invert dark:invert-0'} fill-black opacity-80"
											name={item.name}
										/>
										<span class="text-xl font-medium">{item.name}</span>
									</a>
								{/each}
							</div>

							<button
								class="mt-10 mx-auto w-14 h-14 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 active:scale-90 transition-transform shadow-xl"
								onclick={() => (isOpen = false)}
							>
								<Ico class="w-6 h-6" name="Close" />
							</button>
						</div>
					</div>
				{/if}
			</div>
			<div class="hidden lg:flex items-center gap-2">
				{#each MenuItems as item}
					{@const active = isItemActive(item.href)}
					<a
						class="px-4 py-2 rounded-2 text-3.6 font-medium transition-all ease-in-out duration-300 select-none border {active
							? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm border-black/20 dark:border-white/20'
							: 'border-transparent text-black dark:text-white hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black'}"
						href={item.href}
						aria-current={active ? 'page' : undefined}>{item.name}</a
					>
				{/each}
				<button
					class="flex items-center justify-center w-10 h-10 rounded-xl ml-2 bg-black/90 dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors focus:outline-none"
					onclick={() => theme?.toggle()}
					aria-label="Toggle Theme"
				>
					<Ico
						class="w-5 h-5 opacity-90 group-hover:opacity-100"
						name={theme?.mode === 'light' ? 'Sun' : 'Moon'}
					/>
				</button>
			</div>
		</nav>
	</div>
</header>
