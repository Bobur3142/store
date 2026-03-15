<template>
  <div class="min-h-screen pb-20 md:pb-8">
    <div class="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <SearchBar @search="handleSearch" />

      <BannerSlider :banners="banners" />

      <section>
        <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('home.categories') }}
        </h2>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <CategoryCard
            v-for="category in categories"
            :key="category.id"
            :category="category"
          />
        </div>
      </section>

      <section>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ t('home.deals') }}
          </h2>
          <router-link
            to="/catalog"
            class="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
          >
            {{ t('common.viewAll') }}
          </router-link>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <ProductCard
            v-for="product in dealsProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </section>

      <section>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ t('home.new') }}
          </h2>
          <router-link
            to="/catalog"
            class="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
          >
            {{ t('common.viewAll') }}
          </router-link>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <ProductCard
            v-for="product in newProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </section>

      <section>
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ t('home.popular') }}
          </h2>
          <router-link
            to="/catalog"
            class="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
          >
            {{ t('common.viewAll') }}
          </router-link>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <ProductCard
            v-for="product in popularProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import { useI18n } from 'vue-i18n'
import BannerSlider from '../components/BannerSlider.vue'
import CategoryCard from '../components/CategoryCard.vue'
import ProductCard from '../components/ProductCard.vue'
import SearchBar from '../components/SearchBar.vue'
import ThemeToggle from '../components/ThemeToggle.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import {useRoute, useRouter} from 'vue-router'
import { products } from "src/data/products";
import { categories } from "src/data/categories";
import { banners } from "src/data/banners";

const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const dealsProducts = computed(() =>
  products.value.filter(p => p.discountPercent > 0).slice(0, 5)
)

const newProducts = computed(() =>
  products.value.filter(p => p.isNew).slice(0, 5)
)

const popularProducts = computed(() =>
  products.value.filter(p => p.isPopular).slice(0, 5)
)

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

const handleSearch = (query: string) => {
  router.push({ path: '/catalog', query: { search: query } })
}

onMounted(() => {
  console.log(categories.value)
})
</script>
