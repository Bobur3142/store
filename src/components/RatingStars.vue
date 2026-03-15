<template>
  <div class="flex items-center gap-1">
    <span v-for="i in 5" :key="i" class="text-lg">
      {{ i <= Math.floor(rating) ? '⭐' : '☆' }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  rating: number
}>()
</script>
