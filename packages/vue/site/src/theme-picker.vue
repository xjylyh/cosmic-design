<script lang="ts" setup>
import { ref } from 'vue';

const themes = ['theme-red', 'theme-green', 'theme-cyan'];
function changeTheme(theme: string) {
    document.body.classList.remove(...themes);
    if (theme) document.body.classList.add(theme);
}
const modeDes = ref('Light');
const link = ref('https://unpkg.com/cosmic-ui-alpha/css/variables.css');
function changeMode(mode: string) {
    if (mode) {
        document.body.classList.add(mode);
        modeDes.value = 'Dark';
        link.value = 'https://unpkg.com/cosmic-ui-alpha/css/variables-dark.css';
    } else {
        document.body.classList.remove('cos-mode-dark');
        modeDes.value = 'Light';
        link.value = 'https://unpkg.com/cosmic-ui-alpha/css/variables.css';
    }
}
</script>
<template>
    <section class="wrapper">
        <div class="tools inline-block">
            <a
                class="-v-color-dark-primary no-underline mr-10 text-md"
                :href="link"
                target="_blank"
            >
                {{ modeDes }} Variables
            </a>
            <a
                class="-v-color-dark-primary no-underline mr-10 text-md"
                href="https://unpkg.com/cosmic-ui-alpha/css/variant-classes.css"
                target="_blank"
            >
                Variant Classes
            </a>
            <a
                class="-v-color-dark-primary no-underline mr-14 text-md"
                href="https://unpkg.com/cosmic-ui-alpha/dist/utilities-unminify.css"
                target="_blank"
            >
                Utilities
            </a>
        </div>
        <div class="primary">
            <div class="default" @click="changeTheme('')" />
            <div class="theme-red" @click="changeTheme('theme-red')" />
            <div class="theme-green" @click="changeTheme('theme-green')" />
            <div class="theme-cyan" @click="changeTheme('theme-cyan')" />
        </div>
        <div class="theme">
            <i-cosmic-sun class="light" @click="changeMode('')" />
            <i-cosmic-night class="dark" @click="changeMode('cos-mode-dark')" />
        </div>
    </section>
</template>
<style scoped>
.wrapper {
    position: absolute;
    top: 2rem;
    right: 1rem;
    text-align: right;
}
@media screen and (max-width: 860px) {
    .wrapper {
        width: 320px;
    }
}
@media screen and (max-width: 680px) {
    .wrapper {
        position: static;
    }
}
.primary > div{
    display: inline-block;
    cursor: pointer;
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 0.5rem;
    background-color: var(--color-primary-600);
    margin-right: 0.5rem;
    opacity: var(--opacity-70);
        vertical-align: middle;
}
.primary > div:hover {
    opacity: 1;
}
.primary , .theme{
    display: inline-block;
    margin-right: 1rem;
}
.theme > * {
    cursor: pointer;
    font-size: 2.2rem;
    border-radius: 0.5rem;
    opacity: var(--opacity-70);
    margin-right: 0.5rem;
    vertical-align: middle;
}
.theme > *:hover {
    opacity: 1;
}
.dark {
    color: var(--color-white);
    background: var(--color-black);
}
.light {
    color: var(--color-black);
    background: var(--color-white); 
}
.default {
    --color-primary-600: #546BFF;
}

</style>
<style>
@import "cosmic-ui/dist/variables-dark.css";
.theme-red{
    --color-primary-50: #fff1f2;
    --color-primary-100: #ffe4e6;
    --color-primary-200: #fecdd3;
    --color-primary-300: #fda4af;
    --color-primary-400: #fb7185;
    --color-primary-500: #f43f5e;
    --color-primary-600: #e11d48;
    --color-primary-700: #be123c;
    --color-primary-800: #9f1239;
    --color-primary-900: #881337;
}

.theme-green{
    --color-primary-50: #f7fee7;
    --color-primary-100: #ecfccb;
    --color-primary-200: #d9f99d;
    --color-primary-300: #bef264;
    --color-primary-400: #a3e635;
    --color-primary-500: #84cc16;
    --color-primary-600: #65a30d;
    --color-primary-700: #4d7c0f;
    --color-primary-800: #3f6212;
    --color-primary-900: #365314;
}

.theme-cyan{
    --color-primary-50: #f0fdfa;
    --color-primary-100: #ccfbf1;
    --color-primary-200: #99f6e4;
    --color-primary-300: #5eead4;
    --color-primary-400: #2dd4bf;
    --color-primary-500: #14b8a6;
    --color-primary-600: #0d9488;
    --color-primary-700: #0f766e;
    --color-primary-800: #115e59;
    --color-primary-900: #134e4a;
}

.mode-dark {
    --color-primary-text: #F5F5F5;
    --color-neutral-heavy: #FFFFFF;
    --color-background: #000000;
    --color-text: #ffffff;
    --color-control: #ffffff;
    --color-control-text: #000000;

    --rgb-neutral-heavy: 245, 245, 245;
    --rgb-background: 0, 0, 0;
    --rgb-text: 255, 255, 255;
    --rgb-control: 255, 255, 255;
    --rgb-control-text: 0, 0, 0;
    --opacity-10: 0.15;
}
</style>
