<template>
  <div class="min-h-screen pb-20 md:pb-8">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div v-if="cartItems.length > 0" class="grid lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-4">
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="dark:bg-gray-900 p-4 rounded-xl flex gap-4"
          >
            <router-link :to="`/product/${item.slug}`" class="w-24 h-24 flex-shrink-0">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover rounded-lg"
              />
            </router-link>

            <div class="flex-1">
              <router-link :to="`/product/${item.slug}`">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                  {{ item.title }}
                </h3>
              </router-link>

              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1">
                  <button
                    @click="updateQuantity(item.id, item.quantity - 1)"
                    class="text-lg font-bold text-gray-700 dark:text-gray-300"
                  >
                    -
                  </button>
                  <span class="font-semibold w-6 text-center">{{ item.quantity }}</span>
                  <button
                    @click="updateQuantity(item.id, item.quantity + 1)"
                    class="text-lg font-bold text-gray-700 dark:text-gray-300"
                  >
                    +
                  </button>
                </div>

                <div class="text-right">
                  <p class="text-lg font-bold text-gray-900 dark:text-white">
                    ${{ item.price * item.quantity }}
                  </p>
                  <button
                    @click="removeFromCart(item.id)"
                    class="text-sm text-red-600 dark:text-red-400 hover:underline"
                  >
                    {{ t('basket.remove') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="dark:bg-gray-900 p-6 rounded-xl sticky top-6">
            <h2 class="text-xl font-bold mb-4">{{ t('basket.title') }}</h2>

            <div class="space-y-3 mb-6">
              <div class="flex items-center justify-between">
                <span class="text-gray-600 dark:text-gray-400">{{ t('basket.quantity') }}</span>
                <span class="font-semibold">{{ cartCount }}</span>
              </div>
              <div class="flex items-center justify-between text-lg font-bold">
                <span>{{ t('basket.total') }}</span>
                <span>${{ cartTotal }}</span>
              </div>
            </div>

            <router-link
              to="/checkout"
              class="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              {{ t('basket.checkout') }}
            </router-link>
          </div>
        </div>
      </div>

      <EmptyState
        v-else
        icon="🛒"
        :title="t('basket.empty')"
        :message="t('basket.continueShopping')"
      >
        <template #action>
          <router-link
            to="/catalog"
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {{ t('basket.continueShopping') }}
          </router-link>
        </template>
      </EmptyState>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCart } from '../composables/useCart'
import EmptyState from '../components/EmptyState.vue'

const { t } = useI18n()
const { cartItems, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart()
</script>
