<template>
  <div class="ticker-wrapper">
    <div class="ticker-content" ref="tickerContent">
      <div v-for="item in items" :key="item.text" class="ticker-item">
        <a :href="item.link">{{ item.text }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const items = ref([
  { text: 'New feature released: custom layouts!', link: '/guide/custom-theme' },
  { text: 'Check out our latest update in the blog.', link: '/blog/latest-update' },
  { text: 'Join our community on Discord!', link: 'https://discord.com/' }
]);

const tickerContent = ref(null);

onMounted(() => {
  const content = tickerContent.value;
  if (!content) return;

  // Clone content for infinite loop effect
  const clone = content.cloneNode(true);
  content.parentNode.appendChild(clone);

  // Apply CSS animation
  const duration = content.scrollWidth / 50; // Adjust speed
  content.parentNode.style.animation = `ticker-scroll ${duration}s linear infinite`;
});
</script>

<style scoped>
.ticker-wrapper {
  background-color: var(--vp-c-brand-1);
  color: white;
  padding: 0.5rem 0;
  overflow: hidden;
  position: relative;
}
.ticker-content {
  display: flex;
  white-space: nowrap;
}
.ticker-item {
  padding: 0 1.5rem;
}
.ticker-item a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.ticker-wrapper::after,
.ticker-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.ticker-wrapper::before {
  left: 0;
  background-image: linear-gradient(to right, var(--vp-c-brand-1), rgba(255, 255, 255, 0));
}
.ticker-wrapper::after {
  right: 0;
  background-image: linear-gradient(to left, var(--vp-c-brand-1), rgba(255, 255, 255, 0));
}
@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>

