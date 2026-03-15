<template>
  <div class="min-h-screen pb-20 md:pb-8">
    <div v-if="product" class="max-w-7xl mx-auto px-4 py-6">
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <div class="aspect-square bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden mb-4">
            <img
              :src="selectedImage"
              :alt="getLocalizedField('title')"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="grid grid-cols-4 gap-2">
            <button
              v-for="(image, index) in product.images"
              :key="index"
              @click="selectedImage = image"
              class="aspect-square rounded-lg overflow-hidden border-2 transition-colors"
              :class="selectedImage === image ? 'border-blue-600' : 'border-transparent'"
            >
              <img :src="image" :alt="`${getLocalizedField('title')} ${index + 1}`" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <div class="flex items-start justify-between mb-2">
              <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                {{ getLocalizedField('title') }}
              </h1>
            </div>

            <div class="flex items-center gap-4 mb-4">
              <RatingStars :rating="product.rating" />
              <span class="text-sm text-gray-600 dark:text-gray-400">
                {{ t('product.reviewsCount', { count: product.reviewsCount }) }}
              </span>
            </div>

            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl font-bold text-gray-900 dark:text-white">
                ${{ product.price }}
              </span>
              <span v-if="product.oldPrice" class="text-xl text-gray-500 line-through">
                ${{ product.oldPrice }}
              </span>
              <span v-if="product.discountPercent > 0" class="px-3 py-1 bg-red-500 text-white rounded-lg font-semibold">
                -{{ product.discountPercent }}%
              </span>
            </div>

            <div class="flex items-center gap-2 mb-6">
              <span
                class="px-3 py-1 rounded-lg text-sm font-medium"
                :class="product.inStock ? 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400' : 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400'"
              >
                {{ product.inStock ? t('product.inStock') : t('product.outOfStock') }}
              </span>
              <span v-if="product.isNew" class="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium">
                NEW
              </span>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="flex items-center gap-3 bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3">
              <button
                @click="quantity = Math.max(1, quantity - 1)"
                class="text-xl font-bold text-gray-700 dark:text-gray-300"
              >
                -
              </button>
              <span class="text-lg font-semibold w-8 text-center">{{ quantity }}</span>
              <button
                @click="quantity++"
                class="text-xl font-bold text-gray-700 dark:text-gray-300"
              >
                +
              </button>
            </div>

            <button
              @click="handleAddToCart"
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>🛒</span>
              <span>{{ t('product.addToCart') }}</span>
            </button>
          </div>

          <div class="border-t border-gray-200 dark:border-gray-800 pt-6">
            <h2 class="text-xl font-bold mb-4">{{ t('product.description') }}</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ getLocalizedField('description') }}
            </p>
          </div>

          <div class="border-t border-gray-200 dark:border-gray-800 pt-6">
            <h2 class="text-xl font-bold mb-4">{{ t('product.specifications') }}</h2>
            <div class="space-y-3">
              <div
                v-for="(value, key) in product.specifications"
                :key="key"
                class="flex items-center justify-between py-2"
              >
                <span class="text-gray-600 dark:text-gray-400 capitalize">{{ key.replace('_', ' ') }}</span>
                <span class="font-medium">{{ value }}</span>
              </div>
              <div class="flex items-center justify-between py-2">
                <span class="text-gray-600 dark:text-gray-400">{{ t('product.brand') }}</span>
                <span class="font-medium">{{ product.brand }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6">{{ t('product.reviews') }}</h2>
        <div class="space-y-4">
          <div
            v-for="review in productReviews"
            :key="review.id"
            class="dark:bg-gray-900 p-6 rounded-xl"
          >
            <div class="flex items-center justify-between mb-2">
              <span class="font-semibold">{{ review.userName }}</span>
              <RatingStars :rating="review.rating" />
            </div>
            <p class="text-gray-600 dark:text-gray-400">
              {{ getReviewComment(review) }}
            </p>
            <p class="text-sm text-gray-500 mt-2">{{ review.date }}</p>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-6">{{ t('product.similarProducts') }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <ProductCard
            v-for="similarProduct in similarProducts"
            :key="similarProduct.id"
            :product="similarProduct"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCart } from '../composables/useCart'
import { useFavorites } from '../composables/useFavorites'
import ProductCard from '../components/ProductCard.vue'
import RatingStars from '../components/RatingStars.vue'
import { products } from "src/data/products";
import { reviews } from "src/data/reviews";
import {useI18n} from "vue-i18n";

const route = useRoute()
const { t, locale } = useI18n()
const { addToCart } = useCart()
const { toggleFavorite, isFavorite } = useFavorites()

const quantity = ref(1)
console.log(route.params.id)
const product = computed(() => {
  return products.value.find(p => p.id === Number(route.params.id))
})

const selectedImage = ref('')

const getLocalizedField = (field: string): string => {
  if (!product.value) return ''
  const key = `${field}_${locale.value}` as keyof typeof product.value
  const enKey = `${field}_en` as keyof typeof product.value
  const value = product.value[key] || product.value[enKey]
  return typeof value === 'string' ? value : ''
}

if (product.value?.images[0]) {
  selectedImage.value = product.value.images[0]
}

const getReviewComment = (review: any) => {
  const key = `comment_${locale.value}`
  return review[key] || review.comment_en
}

const productReviews = computed(() => {
  return reviews.value.filter(r => r.productId === product.value?.id)
})

const similarProducts = computed(() => {
  if (!product.value) return []
  return products.value
    .filter(p => p.category === product.value?.category && p.id !== product.value?.id)
    .slice(0, 5)
})

const handleAddToCart = () => {
  if (product.value) {
    for (let i = 0; i < quantity.value; i++) {
      addToCart(product.value)
    }
  }
}
</script>
