import { ref, watch } from 'vue'
import { Dark } from 'quasar'

const isDark = ref(false)

const loadTheme = () => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved === 'dark'
  applyTheme()
}

const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  Dark.set(isDark.value)
}

loadTheme()

export const useTheme = () => {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  watch(isDark, () => {
    applyTheme()
  })

  return {
    isDark,
    toggleTheme
  }
}
