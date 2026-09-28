import { createContext } from 'svelte';
import { browser } from '$app/environment';

export type ThemeMode = 'light' | 'dark';

export const [getTheme, setTheme] = createContext<{
    mode: ThemeMode;
    toggle: () => void;
}>();

export function createThemeState() {
    let mode = $state<ThemeMode>('dark');

    if (browser) {
        const stored = localStorage.getItem('theme') as ThemeMode;
        if (stored === 'light' || stored === 'dark') {
            mode = stored;
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            mode = 'dark';
        }
    }

    $effect.root(() => {
        $effect(() => {
            if (!browser) return;
            
            localStorage.setItem('theme', mode);
            
            if (mode === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });
    });

    return {
        get mode() { return mode; },
        toggle: () => { mode = mode === 'light' ? 'dark' : 'light'; }
    };
}
