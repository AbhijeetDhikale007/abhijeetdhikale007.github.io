<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let {
		phrases = [
			'Full Stack Developer',
			'Svelte Enthusiast',
			'Electrical Engineer',
			'Problem Solver',
			'Tech Enthusiast',
			'Coder...'
		],
		typingSpeed = 80,
		deletingSpeed = 40,
		pauseDuration = 2000
	} = $props<{
		phrases?: string[];
		typingSpeed?: number;
		deletingSpeed?: number;
		pauseDuration?: number;
	}>();

	let displayText = $state('');
	let phraseIndex = 0;
	let isDeleting = $state(false);
	let timeoutId: ReturnType<typeof setTimeout>;

	function type() {
		if (phrases.length === 0) return;

		const currentPhrase = phrases[phraseIndex];

		if (isDeleting) {
			displayText = currentPhrase.substring(0, displayText.length - 1);
		} else {
			displayText = currentPhrase.substring(0, displayText.length + 1);
		}

		let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

		if (!isDeleting && displayText === currentPhrase) {
			nextSpeed = pauseDuration;
			isDeleting = true;
		} else if (isDeleting && displayText === '') {
			isDeleting = false;
			phraseIndex = (phraseIndex + 1) % phrases.length;
			nextSpeed = typingSpeed;
		}

		timeoutId = setTimeout(type, nextSpeed);
	}

	onMount(() => {
		timeoutId = setTimeout(type, typingSpeed);
	});

	onDestroy(() => {
		clearTimeout(timeoutId);
	});
</script>

<div
	class="inline-flex items-center text-3xl md:text-5xl lg:text-7xl font-bold font-Roboto-Condensed h-12 md:h-20 lg:h-24 overflow-hidden"
>
	<span
		class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 whitespace-nowrap truncate select-none"
	>
		{displayText}
	</span>
	<span
		class="w-[3px] md:w-[4px] lg:w-[6px] h-8 md:h-12 lg:h-[60px] bg-black dark:bg-white ml-2 animate-blink inline-block relative -top-1 md:-top-2"
	></span>
</div>

<style>
	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}
	.animate-blink {
		animation: blink 1s step-end infinite;
	}
</style>
