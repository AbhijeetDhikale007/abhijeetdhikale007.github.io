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
        } else {
            const isDark = document.documentElement.classList.contains('dark') ||
                           window.matchMedia('(prefers-color-scheme: dark)').matches;
            mode = isDark ? 'dark' : 'light';
        }
    }

    $effect(() => {
        if (!browser) return;

        localStorage.setItem('theme', mode);

        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    });

    if (browser) {
        $effect(() => {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = (e: MediaQueryListEvent) => {
                if (!localStorage.getItem('theme')) {
                    mode = e.matches ? 'dark' : 'light';
                }
            };
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        });
    }

    return {
        get mode() { return mode; },
        toggle: () => { mode = mode === 'light' ? 'dark' : 'light'; }
    };
}

