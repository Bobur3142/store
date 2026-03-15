<template>
  <div class="min-h-screen pb-24 md:pb-8">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <div v-if="cartItems.length === 0">
        <EmptyState
          icon="📦"
          :title="t('checkout.emptyTitle')"
          :message="t('checkout.emptyMessage')"
        >
          <template #action>
            <router-link
              to="/catalog"
              class="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              {{ t('basket.continueShopping') }}
            </router-link>
          </template>
        </EmptyState>
      </div>

      <div v-else class="grid lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-6">
          <section class="!bg-white dark:!bg-gray-900 rounded-2xl p-5 md:p-6 border border-gray-100 dark:border-gray-800">
            <div class="flex items-start justify-between gap-4 mb-5">
              <div>
                <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ t('checkout.contactInfo') }}
                </h2>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {{ t('checkout.contactInfoHint') }}
                </p>
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <label class="space-y-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('checkout.fullName') }}</span>
                <input v-model="form.fullName" type="text" class="input-field" :placeholder="t('checkout.fullNamePlaceholder')" />
              </label>

              <label class="space-y-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('checkout.phone') }}</span>
                <input v-model="form.phone" type="tel" class="input-field" placeholder="+998 90 123 45 67" />
              </label>

              <label class="space-y-2 sm:col-span-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('checkout.email') }}</span>
                <input v-model="form.email" type="email" class="input-field" placeholder="example@mail.com" />
              </label>
            </div>
          </section>

          <section class="!bg-white dark:!bg-gray-900 rounded-2xl p-5 md:p-6 border border-gray-100 dark:border-gray-800">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-5">
              {{ t('checkout.delivery') }}
            </h2>

            <div class="grid sm:grid-cols-2 gap-4 mb-4">
              <label class="space-y-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('checkout.city') }}</span>
                <input v-model="form.city" type="text" class="input-field" :placeholder="t('checkout.cityPlaceholder')" />
              </label>

              <label class="space-y-2">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('checkout.address') }}</span>
                <input v-model="form.address" type="text" class="input-field" :placeholder="t('checkout.addressPlaceholder')" />
              </label>
            </div>

            <label class="space-y-2 block">
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ t('checkout.comment') }}</span>
              <textarea
                v-model="form.comment"
                rows="4"
                class="input-field resize-none"
                :placeholder="t('checkout.commentPlaceholder')"
              />
            </label>
          </section>

          <section class="!bg-white dark:!bg-gray-900 rounded-2xl p-5 md:p-6 border border-gray-100 dark:border-gray-800">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-5">
              {{ t('checkout.payment') }}
            </h2>

            <div class="grid sm:grid-cols-2 gap-4">
              <label
                class="rounded-2xl border p-4 cursor-pointer transition-all"
                :class="form.paymentMethod === 'card'
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500'
                  : 'border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700'"
              >
                <div class="flex items-start gap-3">
                  <input v-model="form.paymentMethod" type="radio" value="card" class="mt-1" />
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">{{ t('checkout.cardPayment') }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ t('checkout.cardPaymentHint') }}</p>
                  </div>
                </div>
              </label>

              <label
                class="rounded-2xl border p-4 cursor-pointer transition-all"
                :class="form.paymentMethod === 'cash'
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:border-blue-500'
                  : 'border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700'"
              >
                <div class="flex items-start gap-3">
                  <input v-model="form.paymentMethod" type="radio" value="cash" class="mt-1" />
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">{{ t('checkout.cashPayment') }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ t('checkout.cashPaymentHint') }}</p>
                  </div>
                </div>
              </label>
            </div>
          </section>
        </div>

        <div class="lg:col-span-1">
          <div class="!bg-white dark:!bg-gray-900 rounded-2xl p-5 md:p-6 border border-gray-100 dark:border-gray-800 sticky top-6">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-5">
              {{ t('checkout.orderSummary') }}
            </h2>

            <div class="space-y-4 max-h-[320px] overflow-auto pr-1 mb-5">
              <div
                v-for="item in cartItems"
                :key="item.id"
                class="flex items-center gap-3"
              >
                <img :src="item.image" :alt="item.title" class="w-16 h-16 rounded-xl object-cover" />
                <div class="flex-1 min-w-0">
                  <p class="font-medium text-gray-900 dark:text-white line-clamp-2">{{ item.title }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {{ item.quantity }} × ${{ item.price }}
                  </p>
                </div>
                <p class="font-semibold text-gray-900 dark:text-white">
                  ${{ item.price * item.quantity }}
                </p>
              </div>
            </div>

            <div class="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-4">
              <div class="flex items-center justify-between text-gray-600 dark:text-gray-400">
                <span>{{ t('checkout.itemsCount') }}</span>
                <span>{{ cartCount }}</span>
              </div>
              <div class="flex items-center justify-between text-gray-600 dark:text-gray-400">
                <span>{{ t('checkout.deliveryFee') }}</span>
                <span>{{ deliveryPriceLabel }}</span>
              </div>
              <div class="flex items-center justify-between text-lg font-bold text-gray-900 dark:text-white pt-2">
                <span>{{ t('basket.total') }}</span>
                <span>${{ grandTotal }}</span>
              </div>
            </div>

            <button
              type="button"
              class="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition-colors"
            >
              {{ t('checkout.confirmOrder') }}
            </button>

            <router-link
              to="/basket"
              class="inline-flex justify-center w-full mt-3 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {{ t('checkout.backToBasket') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import EmptyState from '../components/EmptyState.vue'
import { useCart } from '../composables/useCart'

const { t } = useI18n()
const { cartItems, cartCount, cartTotal } = useCart()

const form = reactive({
  fullName: '',
  phone: '',
  email: '',
  city: '',
  address: '',
  comment: '',
  paymentMethod: 'card'
})

const deliveryPrice = computed(() => (cartTotal.value >= 100 ? 0 : 5))
const grandTotal = computed(() => cartTotal.value + deliveryPrice.value)
const deliveryPriceLabel = computed(() => deliveryPrice.value === 0 ? t('checkout.free') : `$${deliveryPrice.value}`)
</script>

<style scoped>
.input-field {
  @apply w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-4 py-3 text-gray-900 dark:text-white outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10;
}
</style>
