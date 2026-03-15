<template>
  <div class="relative">
    <input
      v-model="searchQuery"
      type="text"
      :placeholder="t('home.search')"
      class="w-full px-4 py-3 pl-12 rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      @input="handleSearch"
    />
    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const searchQuery = ref('')

const emit = defineEmits<{
  search: [query: string]
}>()

const handleSearch = () => {
  emit('search', searchQuery.value)
}
</script>
