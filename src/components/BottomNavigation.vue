<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 z-50">
    <div class="flex justify-around items-center h-16">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="flex flex-col items-center justify-center flex-1 h-full transition-colors"
        :class="isActive(item.path) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'"
      >
        <span class="text-2xl mb-1">{{ item.icon }}</span>
        <span class="text-xs">{{ t(`nav.${item.name}`) }}</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const navItems = [
  { name: 'home', path: '/', icon: '🏠' },
  { name: 'catalog', path: '/catalog', icon: '📦' },
  { name: 'basket', path: '/basket', icon: '🛒' },
  { name: 'profile', path: '/profile', icon: '👤' }
]

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>
