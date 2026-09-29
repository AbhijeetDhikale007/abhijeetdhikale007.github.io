<script lang="ts">
    import VanillaTilt from "vanilla-tilt";
    import { Experience } from '$data/Experience'
    import Ico from '$components/Ico.svelte'
    import { resolve } from "$app/paths";

    function tilt(node: HTMLElement, options: any) {
        VanillaTilt.init(node, options);
        return {
            destroy() {
                if ((node as any).vanillaTilt) {
                    (node as any).vanillaTilt.destroy();
                }
            }
        };
    }
</script>

{#each Experience as card, index}
<div class="CardEdu self-center rounded-5 grow-1 shrink-1 h-auto w-[80vw] md:w-[38vw] lg:w-[38vw] px-4 py-4 lg:px-6 lg:py-6 bg-white dark:bg-black border-1 border-black/10 dark:border-white/10 transition-[transform,shadow,background] duration-300 ease {index % 2 === 0 ? 'md:self-start lg:self-start' : 'md:self-end lg:self-end'}" use:tilt={{ max: 15, speed: 400, glare: true, "max-glare": 0.2 }}>
    <img class='w-20 h-20 object-contain mb-4 bg-dark/85 dark:bg-white/15 shadow-sm shadow-black dark:shadow-white rounded-lg p-2' src={resolve("/" + card.imgUrl)} alt={card.imgAlt || card.Company} />
    <h2 class='text-xl font-bold text-black dark:text-white mb-1'>{card.Title}</h2>
    <h3 class="pb-2 text-lg text-black/90 dark:text-white/90 font-medium">{card.Company}</h3>
    <hr class='dark:invert' />
    <div class="CardDiv">
        <div class="IconDiv invert dark:invert-0"><Ico name='Location' /></div>
        <p class='text-black/90 dark:text-white/90 text-sm font-medium m-0'>{card.Location}</p>
    </div>
    <hr class='dark:invert' />
    <div class="CardDiv">
        <div class="IconDiv invert dark:invert-0"><Ico name="Date" /></div>
        <p class='text-black/90 dark:text-white/90 text-sm font-medium m-0'>{card.Date}</p>
    </div>
    <hr class='dark:invert' />
    <div class="CardDiv">
        <div class="IconDiv invert dark:invert-0"><Ico name='Time' /></div>
        <p class='text-black/90 dark:text-white/90 text-sm font-medium m-0'>{card.Duration}</p>
    </div>
    <hr class='dark:invert' />
    <div class="CardDiv flex shrink-1 grow-1 px-3 text-justify">
        <p class='font-4 text-sm text-black/90 dark:text-white/90 leading-relaxed'>{card.Details}</p>
    </div>
    <hr class='dark:invert' />
    <div class="flex pt-4 justify-end">
        <a class="Tooltip rounded-3 no-underline cursor-pointer w-13 h-10 py-2 flex items-center justify-center transition-all duration-300 ease bg-black/80 dark:bg-white/5 dark:hover:shadow-[0_0_10px_white/30] hover:-translate-y-0.5" href={resolve("/" + card.CertificateUrl)} data-title='Certificate' aria-label="View Certificate for {card.Company}" target='_blank' rel="noopener noreferrer"><Ico name='Certificate' /></a>
    </div>
</div>
{/each}

<style lang="scss">
    .CardEdu {
        box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.1), 0 2px 4px 0px rgba(0, 0, 0, 0.06);
        @apply dark:shadow-[0_2px_6px_0px_rgba(255,255,255,0.2),0_2px_6px_0px_rgba(255,255,255,0.06)];

        .CardDiv {
            @apply flex shrink-0 py-2 lg:py-3 items-center;
        }

        .IconDiv {
            @apply w-5 h-5 mr-3 text-white/70 flex items-center justify-center;
        }

        h4 {
            @apply text-sm font-medium m-0;
        }

        hr {
            @apply border-none border-b-[.2px] border-black/20 border-b-solid;
        }
    }
</style>