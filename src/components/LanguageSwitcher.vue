<template>
  <q-btn
    flat
    class="w-[36px] h-[36px] q-pa-none rounded-3xl bg-gray-100 dark:bg-gray-900"
    @click.stop
  >
  <span class="flex items-center justify-center">
   <q-icon class="text-indigo-600 dark:text-gray-100" name="language" size="20px" />
  </span>

    <q-menu
      anchor="bottom right"
      self="top right"
      class="custom-popup"
    >
      <q-list>
        <q-item
          v-for="lang in languages"
          :key="lang.code"
          clickable
          v-close-popup
          @click="changeLanguage(lang.code)"
          :active="currentLanguage === lang.code"
        >
          <q-item-section>
            {{ lang.name }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)
const currentLanguage = ref(locale.value)

const languages = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
  { code: 'uz', name: "O'zbek" }
]

const changeLanguage = (code: string) => {
  locale.value = code
  currentLanguage.value = code
  localStorage.setItem('locale', code)
  isOpen.value = false
}
</script>
