<template>
  <q-btn
    flat
    class="w-[36px] h-[36px] q-pa-none rounded-3xl dark:bg-gray-900 bg-indigo-800"
    @click="toggleTheme"
  >
    <q-icon class=" dark:text-yellow-500" :name="isDark ? 'wb_sunny' : 'bedtime'" size="20px" />
  </q-btn>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>
