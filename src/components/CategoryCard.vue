<template>
  <router-link
    :to="`/catalog?category=${category.id}`"
    class="flex flex-col items-center justify-center p-2 md:p-6 dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
  >
    <div class="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
      {{ category.icon }}
    </div>
    <h3 class="text-sm font-medium text-center text-gray-900 dark:text-white">
      {{ getLocalizedName() }}
    </h3>
  </router-link>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const props = defineProps<{
  category: any
}>()

const getLocalizedName = () => {
  const key = `name_${locale.value}`
  return props.category[key] || props.category.name_en
}
</script>
