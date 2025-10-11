<script setup>
import DefaultTheme from 'vitepress/theme'
import Ticker from './components/Ticker.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #layout-top>
      <Ticker />
    </template>
  </DefaultTheme.Layout>
</template>
