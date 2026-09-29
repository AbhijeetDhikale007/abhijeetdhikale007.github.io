# Personal Portfolio In Svelte 5

![Portfolio Screenshot - Dark](/static/Screenshots/Screenshot-dark.png)

![Portfolio Screenshot - Light](/static/Screenshots/Screenshot-light.png)

An advanced personal portfolio website created using Sveltekit 5, UnoCSS, lenis, and a collection of other technologies. This website showcases my skills, projects and education with interactive 3d effects and light, dark mode.

## Page Speed Insights

Achieved 100% score in performance, accessibilty, best practices, SEO and agentic browsing.

Link - [PageSpeed](https://pagespeed.web.dev/analysis/https-abhijeetdhikale007-github-io/64ca1lnek7?form_factor=desktop)

![Page Insights Screenshot](/static/Screenshots/Page-Insights-Report.png)

## Published from Google's Antigravity

- This repository is developed in Google's Antigravity IDE and later on published on GitHub.
- [Antigravity](https://antigravity.google)

## Deployments
GitHub Pages - [abhijeetdhikale007.github.io](https://abhijeetdhikale007.github.io)

## Features

-   **Home**: A home page.
-   **Skills**: Listed my skills and expertise.
-   **Projects**: My projects.
-   **Experience**: My experiences.
-   **Education**: My education.
-   **Resume**: Provided my resume.

## Technologies Used

-   [Sveltekit 5.55.2](https://svelte.dev) - The main framework
-   [Sveltekit 2.57.0](https://svelte.dev/docs/kit) - Framework
-   [Vite 7.3.1](https://vite.dev) - Web Build Tool
-   [UnoCSS 66.6.8](https://unocss.dev) - Atomic CSS Engine
-   [TypeScript 6.0.2](https://www.typescriptlang.org) - Typed Programming Language
-   [Lenis 1.3.23](https://lenis.darkroom.engineering) - Smooth Scrolling
-   [Iconify 5.2.1](https://icon-sets.iconify.design) - Icons
-   [SCSS 0.2.4](https://sass-lang.com) - Sassy Cascading Style Sheets.Popular CSS preprocessor Sass (Syntactically Awesome Style Sheets).

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.15.1 create --template minimal --types ts --add prettier sveltekit-adapter="adapter:static" --install npm ./
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
