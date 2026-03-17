<template>
  <div class="min-h-screen pb-20 md:pb-8 bg-gray-50 dark:bg-black">
    <div class="max-w-5xl mx-auto px-4 py-6">
      <div class="flex items-center justify-between gap-4 mb-6">
        <div>
          <p class="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
            {{ t('profile.ordersBadge') }}
          </p>
          <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {{ t('profile.myOrders') }}
          </h1>
          <p class="text-gray-500 dark:text-gray-400 mt-2">
            {{ t('profile.ordersSubtitle') }}
          </p>
        </div>

        <div class="hidden md:flex items-center gap-3 !bg-white dark:!bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-4 py-3 shadow-sm">
          <div class="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <q-icon name="inventory_2" size="24px" />
          </div>
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('profile.ordersCount') }}</p>
            <p class="text-lg font-bold text-gray-900 dark:text-white">{{ ordersCount }}</p>
          </div>
        </div>
      </div>

      <EmptyState
        v-if="orders.length === 0"
        icon="📦"
        :title="t('profile.ordersEmptyTitle')"
        :message="t('profile.ordersEmptyMessage')"
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

      <div v-else class="space-y-4">
        <div
          v-for="order in orders"
          :key="order.id"
          class="!bg-white dark:!bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-5 md:p-6 shadow-sm"
        >
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
            <div>
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <h2 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                  #{{ order.orderNumber }}
                </h2>
                <span
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold"
                  :class="statusClass(order.status)"
                >
                  <span class="w-2 h-2 rounded-full bg-current opacity-80"></span>
                  {{ t(`profile.orderStatuses.${order.status}`) }}
                </span>
              </div>

              <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                <span>{{ formatDate(order.createdAt) }}</span>
                <span>{{ order.itemsCount }} {{ t('profile.productsLabel') }}</span>
                <span>{{ t(`profile.paymentMethods.${order.paymentMethod}`) }}</span>
              </div>
            </div>

            <div class="text-left md:text-right">
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ t('basket.total') }}</p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">${{ order.total }}</p>
            </div>
          </div>

          <div class="grid lg:grid-cols-[1.2fr,0.8fr] gap-4">
            <div class="scroll-y max-h-[330px] rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-4">
              <div class="space-y-3">
                <div
                  v-for="item in order.items"
                  :key="`${order.id}-${item.id}`"
                  class="flex items-center gap-3"
                >
                  <img :src="item.image" :alt="item.title" class="w-16 h-16 rounded-2xl object-cover" />
                  <div class="min-w-0 flex-1">
                    <p class="font-semibold text-gray-900 dark:text-white line-clamp-2">{{ item.title }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {{ item.quantity }} × ${{ item.price }}
                    </p>
                  </div>
                  <p class="font-semibold text-gray-900 dark:text-white whitespace-nowrap">${{ item.total }}</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-4">
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ t('profile.deliveryInfo') }}</p>
                <p class="font-semibold text-gray-900 dark:text-white">{{ order.customer.fullName }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">{{ order.customer.phone }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400">{{ order.customer.email || '—' }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  {{ order.delivery.city }}, {{ order.delivery.address }}
                </p>
                <p v-if="order.delivery.comment" class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {{ order.delivery.comment }}
                </p>
              </div>

              <div class="rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-4 space-y-2">
                <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{{ t('profile.subtotal') }}</span>
                  <span>${{ order.subtotal }}</span>
                </div>
                <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{{ t('checkout.deliveryFee') }}</span>
                  <span>{{ order.deliveryPrice === 0 ? t('checkout.free') : `$${order.deliveryPrice}` }}</span>
                </div>
                <div class="flex items-center justify-between text-base font-bold text-gray-900 dark:text-white pt-2 border-t border-gray-200 dark:border-gray-800">
                  <span>{{ t('basket.total') }}</span>
                  <span>${{ order.total }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import EmptyState from '../components/EmptyState.vue'
import { useOrders } from '../composables/useOrders'
import type { OrderRecord } from '../composables/useOrders'

const { t, locale } = useI18n()
const { orders, ordersCount } = useOrders()

const statusClass = (status: OrderRecord['status']) => {
  const classes = {
    new: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
    processing: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
    delivering: 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
    completed: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
  }

  return classes[status]
}

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat(locale.value, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date))
}
</script>
