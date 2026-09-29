<script lang="ts">
	import Ico from '$components/Ico.svelte';

	const SocialLinks = [
		{ name: 'GitHubW', href: 'https://github.com/AbhijeetDhikale007' },
		{ name: 'Instagram', href: 'https://instagram.com/abhijeetdhikale007' },
		{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/abhijeet-dhikale' },
		{ name: 'Twitter', href: 'https://x.com/abhijeetdhikale' },
		{ name: 'Telegram', href: 'https://t.me/AbhijeetDhikale007' }
	];
</script>

<div class="flex gap-2 rounded-8 overflow-hidden">
	{#each SocialLinks as link}
		<div class="bg-black dark:bg-white h-10 rounded-2 p-2">
			<a
				href={link.href}
				class="Tooltip dark:invert"
				data-title={link.name === 'GitHubW' ? 'GitHub' : link.name}
				aria-label={link.name === 'GitHubW' ? 'GitHub Profile' : `${link.name} Profile`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Ico name={link.name} />
			</a>
		</div>
	{/each}
</div>
