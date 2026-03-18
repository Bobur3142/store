<template>
  <div class="min-h-screen pb-20 md:pb-8">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div class="flex gap-6">
        <aside
          class="w-64 space-y-6 hidden md:block"
        >
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-3">
              {{ t('home.categories') }}
            </h3>
            <div class="space-y-2">
              <button
                @click="selectedCategory = null"
                class="w-full text-left px-4 py-2 rounded-lg transition-colors"
                :class="!selectedCategory ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
              >
                {{ t('catalog.all') }}
              </button>
              <button
                v-for="category in categories"
                :key="category.id"
                @click="selectedCategory = category.id"
                class="w-full text-left px-4 py-2 rounded-lg transition-colors"
                :class="selectedCategory === category.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'"
              >
                <span class="mr-2">{{ category.icon }}</span>
                {{ getLocalizedName(category) }}
              </button>
            </div>
          </div>

          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-3">
              {{ t('catalog.priceRange') }}
            </h3>

            <div class="space-y-2">
              <q-input
                v-model.number="minPrice"
                outlined
                type="number"
                placeholder="Min"
                class="custom-input input-sm"
              />

              <q-input
                v-model.number="maxPrice"
                outlined
                type="number"
                placeholder="Max"
                class="custom-input input-sm"
              />
            </div>
          </div>

          <div>
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                v-model="inStockOnly"
                type="checkbox"
                class="w-4 h-4"
              />
              <span class="text-sm">{{ t('catalog.inStock') }}</span>
            </label>
          </div>
        </aside>

        <div class="flex-1">
          <div class="flex items-center justify-between mb-4">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ filteredProducts.length }} {{ t('catalog.all') }}
            </p>

            <div class="flex items-center gap-1">
              <q-select
                v-model="sortBy"
                :options="options"
                outlined
                emit-value
                map-options
                clearable
                option-value="label"
                behavior="menu"
                class="custom-select w-[140px] md:w-[200px]"
                :class="{'custom-select-label': sortBy}"
                popup-content-class="custom-popup w-[120px] md:w-[200px]"
                :display-value="sortBy ? sortBy : t('catalog.sort')"
              />

              <button
                @click="showFilters = !showFilters"
                class="md:hidden px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                {{ t('catalog.filter') }}
              </button>
            </div>
          </div>

          <div v-if="filteredProducts.length > 0" class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <ProductCard
              v-for="product in sortedProducts"
              :key="product.id"
              :product="product"
            />
          </div>

          <EmptyState
            v-else
            icon="📦"
            :title="t('catalog.noProducts')"
            message=""
          />
        </div>
      </div>
    </div>

    <q-drawer
      v-model="showFilters"
      side="right"
      overlay
      behavior="mobile"
      :width="320"
      class="md:hidden !bg-white dark:!bg-black"
    >
      <div class="h-full p-4 flex column no-wrap justify-between gap-4">
        <div class="flex items-center justify-between">
          <h3 class="font-semibold text-lg text-gray-900 dark:text-white">
            {{ t('catalog.filter') }}
          </h3>
          <q-btn
            flat
            round
            dense
            icon="close"
            @click="showFilters = false"
          />
        </div>

        <div class="flex-1 flex column no-wrap gap-2 overflow-y-auto">
          <button
            @click="selectedCategory = null"
            class="w-full text-left px-4 py-2 rounded-lg"
            :class="!selectedCategory ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'"
          >
            {{ t('catalog.all') }}
          </button>

          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            class="w-full text-left px-4 py-2 rounded-lg"
            :class="selectedCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'"
          >
            {{ category.icon }} {{ getLocalizedName(category) }}
          </button>

          <div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-3">
              {{ t('catalog.priceRange') }}
            </h3>

            <div class="space-y-2">
              <q-input
                v-model.number="minPrice"
                outlined
                type="number"
                placeholder="Min"
                class="custom-input input-sm"
              />

              <q-input
                v-model.number="maxPrice"
                outlined
                type="number"
                placeholder="Max"
                class="custom-input input-sm"
              />
            </div>
          </div>

          <div class="mt-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input
                v-model="inStockOnly"
                type="checkbox"
                class="w-4 h-4"
              />
              <span class="text-sm">{{ t('catalog.inStock') }}</span>
            </label>
          </div>
        </div>

        <button
          @click="showFilters = false"
          class="w-full bg-blue-600 text-white py-2.5 rounded-3xl"
        >
          {{ t('catalog.apply') }}
        </button>
      </div>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import EmptyState from '../components/EmptyState.vue'
import { categories } from "src/data/categories";
import { products } from "src/data/products";

const { t, locale } = useI18n()
const route = useRoute()

const selectedCategory = ref<string | null>(null)
const minPrice = ref<number | null>(null)
const maxPrice = ref<number | null>(null)
const inStockOnly = ref(false)
const sortBy = ref(null)
const showFilters = ref(false)

const options = ref([
  { id: 1, label: `${t('catalog.sortByPrice')} ↑` },
  { id: 2, label: `${t('catalog.sortByPrice')} ↓` },
  { id: 3, label: t('catalog.sortByPopularity') },
  { id: 4, label: t('catalog.sortByNew') }
])

watch(() => route.query.category, (category) => {
  if (category) {
    selectedCategory.value = category as string
  }
}, { immediate: true })

const getLocalizedName = (category: any) => {
  const key = `name_${locale.value}`
  return category[key] || category.name_en
}

const filteredProducts = computed(() => {
  let obj = products.value

  if (selectedCategory.value) {
    obj = products.value.filter(p => p.category === selectedCategory.value)
  }

  if (minPrice.value !== null) {
    obj = products.value.filter(p => p.price >= minPrice.value!)
  }

  if (maxPrice.value !== null) {
    obj = products.value.filter(p => p.price <= maxPrice.value!)
  }

  if (inStockOnly.value) {
    obj = products.value.filter(p => p.inStock)
  }

  return obj
})

const sortedProducts = computed(() => {
  const products = [...filteredProducts.value]

  switch (sortBy.value) {
    case 'price-asc':
      return products.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return products.sort((a, b) => b.price - a.price)
    case 'popularity':
      return products.sort((a, b) => b.rating - a.rating)
    case 'new':
      return products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    default:
      return products
  }
})
</script>
