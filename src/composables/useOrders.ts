import { computed, ref } from 'vue'
import type { CartItem } from './useCart'

export interface OrderItem extends CartItem {
  total: number
}

export interface OrderRecord {
  id: string
  orderNumber: string
  createdAt: string
  status: 'new' | 'processing' | 'delivering' | 'completed'
  customer: {
    fullName: string
    phone: string
    email: string
  }
  delivery: {
    city: string
    address: string
    comment: string
  }
  paymentMethod: 'card' | 'cash'
  items: OrderItem[]
  itemsCount: number
  subtotal: number
  deliveryPrice: number
  total: number
}

const orders = ref<OrderRecord[]>([])

const loadOrders = () => {
  if (typeof localStorage === 'undefined') return

  const saved = localStorage.getItem('orders')
  if (saved) {
    orders.value = JSON.parse(saved)
  }
}

const saveOrders = () => {
  if (typeof localStorage === 'undefined') return
  localStorage.setItem('orders', JSON.stringify(orders.value))
}

loadOrders()

export const useOrders = () => {
  const createOrder = ({
    form,
    items,
    subtotal,
    deliveryPrice,
    total
  }: {
    form: {
      fullName: string
      phone: string
      email: string
      city: string
      address: string
      comment: string
      paymentMethod: 'card' | 'cash'
    }
    items: CartItem[]
    subtotal: number
    deliveryPrice: number
    total: number
  }) => {
    const now = new Date()
    const order: OrderRecord = {
      id: String(now.getTime()),
      orderNumber: `ORD-${now.getTime().toString().slice(-6)}`,
      createdAt: now.toISOString(),
      status: 'new',
      customer: {
        fullName: form.fullName,
        phone: form.phone,
        email: form.email
      },
      delivery: {
        city: form.city,
        address: form.address,
        comment: form.comment
      },
      paymentMethod: form.paymentMethod,
      items: items.map((item) => ({
        ...item,
        total: item.price * item.quantity
      })),
      itemsCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      deliveryPrice,
      total
    }

    orders.value = [order, ...orders.value]
    saveOrders()

    return order
  }

  const ordersCount = computed(() => orders.value.length)

  return {
    orders,
    ordersCount,
    createOrder
  }
}
