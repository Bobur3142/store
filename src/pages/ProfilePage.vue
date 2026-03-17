<template>
  <div class="min-h-screen pb-20 md:pb-8 bg-gray-50 dark:bg-black">
    <div class="max-w-4xl mx-auto px-4 py-6">
      <div class="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 mb-6">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl">
            👤
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ t('profile.name') }}
            </h1>
            <p class="text-gray-600 dark:text-gray-400">{{ t('profile.email') }}</p>
            <p class="text-gray-600 dark:text-gray-400">{{ t('profile.phone') }}</p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <router-link
          to="/catalog"
          class="bg-gray-100 dark:bg-gray-900 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          <div class="flex items-center gap-3">
            <span class="text-2xl">📦</span>
            <span class="font-medium">{{ t('profile.myOrders') }}</span>
          </div>
          <span class="text-gray-400">→</span>
        </router-link>

        <div class="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6">
          <h2 class="text-xl font-bold mb-4">{{ t('profile.settings') }}</h2>

          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <q-icon class="text-indigo-600 dark:text-gray-100" name="language" size="20px" />
                <span class="font-medium">{{ t('profile.language') }}</span>
              </div>
              <LanguageSwitcher />
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <q-icon class="text-primary-500 dark:text-yellow-500" :name="isDark ? 'wb_sunny' : 'bedtime'" size="20px" />
                <span class="font-medium">{{ t('profile.theme') }}</span>
              </div>
              <button
                @click="toggleTheme"
                class="px-4 py-2 rounded-lg bg-slate-200 dark:bg-gray-800 font-medium"
              >
                {{ isDark ? t('profile.darkMode') : t('profile.lightMode') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '../composables/useTheme'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

const { t } = useI18n()
const { isDark, toggleTheme } = useTheme()
</script>
