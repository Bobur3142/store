<template>
  <div class="relative overflow-hidden rounded-2xl">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 50000,
        disableOnInteraction: false
      }"
      :pagination="{
        clickable: true
      }"
      class="rounded-2xl banner-swiper"
    >
      <SwiperSlide
        v-for="banner in banners"
        :key="banner.id"
      >
        <div
          class="min-w-full h-48 md:h-64 flex items-center justify-center px-8"
          :class="banner.color"
        >
          <div class="text-center text-white">
            <h2 class="text-2xl md:text-4xl font-bold mb-2">
              {{ getLocalizedField(banner, 'title') }}
            </h2>
            <p class="text-lg md:text-xl opacity-90">
              {{ getLocalizedField(banner, 'subtitle') }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

defineProps<{
  banners: any[]
}>()

const { locale } = useI18n()

const getLocalizedField = (item: any, field: string) => {
  const key = `${field}_${locale.value}`
  return item[key] || item[`${field}_en`]
}
</script>

<style scoped>
.banner-swiper :deep(.swiper-pagination) {
  bottom: 16px;
}

.banner-swiper :deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 1;
  border-radius: 9999px;
  transition: all 0.3s ease;
}

.banner-swiper :deep(.swiper-pagination-bullet-active) {
  width: 24px;
  background: white;
}
</style>
