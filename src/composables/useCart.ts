import { ref, computed } from 'vue'

export interface CartItem {
  id: number
  slug: string
  title: string
  price: number
  image: string
  quantity: number
}

const cartItems = ref<CartItem[]>([])

const loadCart = () => {
  const saved = localStorage.getItem('cart')
  if (saved) {
    cartItems.value = JSON.parse(saved)
  }
}

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cartItems.value))
}

loadCart()

export const useCart = () => {
  const addToCart = (product: any) => {
    const existing = cartItems.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cartItems.value.push({
        id: product.id,
        slug: product.slug,
        title: product.title_en || product.title_ru,
        price: product.price,
        image: product.images[0],
        quantity: 1
      })
    }
    saveCart()
  }

  const removeFromCart = (productId: number) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId)
    saveCart()
  }

  const updateQuantity = (productId: number, quantity: number) => {
    const item = cartItems.value.find(item => item.id === productId)
    if (item) {
      item.quantity = quantity
      if (item.quantity <= 0) {
        removeFromCart(productId)
      } else {
        saveCart()
      }
    }
  }

  const clearCart = () => {
    cartItems.value = []
    saveCart()
  }

  const cartCount = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  })

  const isInCart = (productId: number) => {
    return cartItems.value.some(item => item.id === productId)
  }

  const getProductQuantity = (productId: number) => {
    const item = cartItems.value.find(item => item.id === productId)
    return item ? item.quantity : 0
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    isInCart,
    getProductQuantity
  }
}
