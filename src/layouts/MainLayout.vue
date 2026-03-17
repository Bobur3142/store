<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="z-40 !bg-white dark:!bg-black border-b border-gray-200 dark:border-white/10">
      <div class="flex items-center justify-between max-w-7xl mx-auto p-4">
        <div class="flex items-center gap-2">
          <q-btn
            v-if="showBackButton"
            flat
            dense
            no-caps
            class="rounded-lg pr-2 text-gray-400 hidden md:block"
            @click="$router.back()"
          >
            <q-icon name="keyboard_arrow_left" size="20px" />
            <span>Вернуться</span>
          </q-btn>

          <span class="text-xl font-bold text-gray-900 dark:text-white">
            {{ currentTitle }}
          </span>
        </div>

        <nav class="hidden md:flex items-center gap-6">
          <router-link
            v-for="item in navItems"
            :key="item.name"
            :to="item.path"
            class="flex flex-col items-center justify-center flex-1 h-full transition-colors"
            :class="activeTabs(item.name) ? 'text-blue-700 dark:text-gray-50' : 'text-gray-600 dark:text-gray-400'"
          >
            <span class="text-md font-medium">{{ t(`nav.${item.name}`) }}</span>
          </router-link>
        </nav>

        <div class="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="z-40 md:hidden flex bg-transparent pb-6 justify-center">
      <q-tabs
        dense
        active-color="primary"
        indicator-color="transparent"
        class="main_tabs bg-custom-white dark:bg-custom-dark py-1 px-1"
      >
        <q-btn
          v-if="showBackButton"
          flat
          dense
          round
          class="w-[46px] h-[46px] rounded-[23px] bg-red"
          @click="$router.back()"
        >
          <q-icon name="keyboard_arrow_left" class="text-white" size="24px" />
        </q-btn>

        <q-route-tab
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          :class="activeTabs(item.name) ? 'active dark:active' : 'dis-active hover:bg-gray-100 dark:hover:bg-white/10'"
          class="w-[46px] h-[46px] rounded-[23px]">
          <span class="svg-sm" :class="activeTabs(item.name) ? 'svg-light dark:svg-dark' : 'svg-dark dark:svg-light'" v-html="item.icon" />
        </q-route-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import home from 'src/assets/house.svg?raw'
import search from 'src/assets/search.svg?raw'
import basket from 'src/assets/basket.svg?raw'
import user from 'src/assets/user.svg?raw'
import ThemeToggle from "components/ThemeToggle.vue";
import LanguageSwitcher from "components/LanguageSwitcher.vue";

const { t } = useI18n()
const route = useRoute()

const navItems = [
  { name: 'home', path: '/', icon: home },
  { name: 'catalog', path: '/catalog', icon: search },
  { name: 'basket', path: '/basket', icon: basket },
  { name: 'profile', path: '/profile', icon: user }
]

const showBackButton = computed(() => {
  return !navItems.some(item => item.path === route.path)
})

const currentTab = computed(() => {
  const item = navItems.find(i => activeTabs(i.name))
  return item ? item.name : 'home'
})

const currentTitle = computed(() => {
  if (route.meta?.titleKey) {
    return t(String(route.meta.titleKey))
  }

  return t(`nav.${currentTab.value}`)
})

function activeTabs(name: string){
  return route.name === name
}
</script>


<style lang="scss">
.q-page-container{
  padding-bottom: 0 !important;
}
.main_tabs{
  border-radius: 28px;
  width: max-content;
  transition: none;

  &.bg-custom-white {
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(0,0,0,0.05);
  }

  /* dark mode контейнер */
  &.dark\:bg-custom-dark:is(.dark *) {
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255,255,255,0.05);
  }

  .q-tab {
    transition: none !important;
  }

  .q-tabs__content{
    gap: 6px;
  }

  .active{
    background: #000;
  }

  .dark\:active:is(.dark *){
    background: #d9d4d4 !important;
  }
}

.svg-sm {
  height: 22px;

  svg {
    width: 22px;
    height: 22px;
  }
}

.svg-dark svg path {
  stroke: #000;
}

.svg-light svg path {
  stroke: #F7F6F4;
}

.dark\:svg-dark:is(.dark *) svg path {
  stroke: #000 !important;
}

.dark\:svg-light:is(.dark *) svg path {
  stroke: #F7F6F4 !important;
}
</style>
