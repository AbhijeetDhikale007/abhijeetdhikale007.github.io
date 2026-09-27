import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetWind4,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            // ...
        }
    },
    presets: [
        presetWind4({ dark: 'class' }),
        presetAttributify(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
                Roboto: {
                    name: 'Roboto Condensed',
                    weights: ['300', '400', '500', '700' ]
                },
                Arsenal: {
                    name: 'Arsenal SC',
                    weights: ['700']
                }
            },
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})