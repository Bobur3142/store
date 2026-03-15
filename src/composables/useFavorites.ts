import { ref } from 'vue'

const favoriteIds = ref<number[]>([])

const loadFavorites = () => {
  const saved = localStorage.getItem('favorites')
  if (saved) {
    favoriteIds.value = JSON.parse(saved)
  }
}

const saveFavorites = () => {
  localStorage.setItem('favorites', JSON.stringify(favoriteIds.value))
}

loadFavorites()

export const useFavorites = () => {
  const addToFavorites = (productId: number) => {
    if (!favoriteIds.value.includes(productId)) {
      favoriteIds.value.push(productId)
      saveFavorites()
    }
  }

  const removeFromFavorites = (productId: number) => {
    favoriteIds.value = favoriteIds.value.filter(id => id !== productId)
    saveFavorites()
  }

  const toggleFavorite = (productId: number) => {
    if (isFavorite(productId)) {
      removeFromFavorites(productId)
    } else {
      addToFavorites(productId)
    }
  }

  const isFavorite = (productId: number) => {
    return favoriteIds.value.includes(productId)
  }

  return {
    favoriteIds,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite
  }
}
