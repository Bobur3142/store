<template>
  <div class="dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg group">
    <router-link :to="`/product/${product.id}`" class="block">
      <div class="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          :src="product.images[0]"
          :alt="getLocalizedField('title')"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div v-if="product.discountPercent > 0" class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
          -{{ product.discountPercent }}%
        </div>
        <div v-if="product.isNew" class="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
          NEW
        </div>
      </div>

      <div class="p-2 md:p-4">
        <span class="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 ellipsis">
          {{ getLocalizedField('title') }}
        </span>

        <div class="flex items-center gap-2 mb-2">
          <div class="flex items-center text-yellow-500">
            <span class="text-sm">⭐</span>
            <span class="text-sm ml-1 text-gray-700 dark:text-gray-300">{{ product.rating }}</span>
          </div>
          <span class="text-xs text-gray-500">({{ product.reviewsCount }})</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-lg font-bold text-gray-900 dark:text-white">
            ${{ product.price }}
          </span>
          <span v-if="product.oldPrice" class="text-sm text-gray-500 line-through">
            ${{ product.oldPrice }}
          </span>
        </div>
      </div>
    </router-link>
    {{saved}}

    <div class="px-2 pb-2 md:px-4 md:pb-4">
      <q-btn
        v-if="productQuantity === 0"
        @click="handleAddToCart"
        no-caps
        unelevated
        class="w-full !bg-blue-600 hover:!bg-blue-700 !text-white !py-2 !px-4 rounded-lg transition-colors duration-200"
      >
        <div class="flex items-center justify-center gap-2 w-full">
          <q-icon name="shopping_cart" size="18px" />
          <span class="text-sm font-medium">{{ t('product.addToCart') }}</span>
        </div>
      </q-btn>

      <div
        v-else
        class="w-full h-[36px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-between px-2"
      >
        <q-btn
          flat
          dense
          no-caps
          @click="decreaseQuantity"
          class="w-[28px] h-[22px] q-pa-none rounded-md !text-gray-700 dark:!text-white"
        >
          <q-icon name="remove" size="18px" />
        </q-btn>

        <span class="text-sm font-semibold text-gray-900 dark:text-white">
          {{ productQuantity }}
        </span>

        <q-btn
          flat
          dense
          no-caps
          @click="increaseQuantity"
          class="w-[28px] h-[22px] q-pa-none rounded-md !text-gray-700 dark:!text-white"
        >
          <q-icon name="add" size="18px" />
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCart } from '../composables/useCart'
import {computed, ref} from "vue";

const { t, locale } = useI18n()
const { addToCart, updateQuantity, getProductQuantity } = useCart()

const props = defineProps<{
  product: any
}>()

const getLocalizedField = (field: string) => {
  const key = `${field}_${locale.value}`
  return props.product[key] || props.product[`${field}_en`]
}

const productQuantity = computed(() => {
  return getProductQuantity(props.product.id)
})

const handleAddToCart = () => {
  addToCart(props.product)
}

const increaseQuantity = () => {
  addToCart(props.product)
}

const decreaseQuantity = () => {
  updateQuantity(props.product.id, productQuantity.value - 1)
}
</script>
