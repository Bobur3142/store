import {ref} from "vue";

export const en = ref({
  nav: {
    home: "Home",
    catalog: "Catalog",
    basket: "Basket",
    profile: "Profile"
  },
  home: {
    search: "Search products...",
    categories: "Categories",
    popular: "Popular Products",
    new: "New Arrivals",
    deals: "Special Deals",
    recommended: "Recommended for You"
  },
  catalog: {
    title: "Catalog",
    all: "All Products",
    filter: "Filter",
    sort: "Sort",
    sortByPrice: "Price",
    sortByPopularity: "Popularity",
    sortByNew: "Newest",
    priceRange: "Price Range",
    inStock: "In Stock Only",
    apply: "Apply",
    reset: "Reset",
    noProducts: "No products found"
  },
  product: {
    addToCart: "Add to Cart",
    addToFavorites: "Add to Favorites",
    removeFromFavorites: "Remove from Favorites",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    description: "Description",
    specifications: "Specifications",
    reviews: "Reviews",
    similarProducts: "Similar Products",
    brand: "Brand",
    rating: "Rating",
    reviewsCount: "{count} reviews"
  },
  basket: {
    title: "Shopping Cart",
    empty: "Your cart is empty",
    continueShopping: "Continue Shopping",
    total: "Total",
    discount: "Discount",
    checkout: "Checkout",
    remove: "Remove",
    quantity: "Quantity"
  },
  profile: {
    title: "Profile",
    myOrders: "My Orders",
    favorites: "Favorites",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    logout: "Logout",
    name: "John Doe",
    ordersBadge: "Purchase history",
    ordersSubtitle: "All placed orders and their current status are shown here",
    ordersCount: "Orders",
    ordersEmptyTitle: "You have no orders yet",
    ordersEmptyMessage: "After checkout, your order will appear here automatically",
    productsLabel: "items",
    deliveryInfo: "Customer & delivery",
    subtotal: "Items subtotal",
    paymentMethods: {
      card: "Card payment",
      cash: "Cash payment"
    },
    orderStatuses: {
      new: "New",
      processing: "Processing",
      delivering: "On the way",
      completed: "Completed"
    }
  },
  common: {
    price: "Price",
    discount: "Discount",
    save: "Save",
    cancel: "Cancel",
    close: "Close",
    viewAll: "View All",
    loadMore: "Load More"
  },
  checkout: {
    emptyTitle: "No items for checkout yet",
    emptyMessage: "Add products to your basket to continue",
    contactInfo: "Contact information",
    contactInfoHint: "The buyer details for order confirmation",
    fullName: "Full name",
    fullNamePlaceholder: "Enter your full name",
    phone: "Phone number",
    email: "Email",
    delivery: "Delivery details",
    city: "City",
    cityPlaceholder: "Enter city",
    address: "Address",
    addressPlaceholder: "Street, house, apartment",
    comment: "Comment to the order",
    commentPlaceholder: "Entrance, floor, landmark or other details",
    payment: "Payment method",
    cardPayment: "Pay by card",
    cardPaymentHint: "Online payment or by card upon receipt",
    cashPayment: "Cash payment",
    cashPaymentHint: "Pay in cash when you receive the order",
    orderSummary: "Order summary",
    itemsCount: "Items",
    deliveryFee: "Delivery",
    free: "Free",
    confirmOrder: "Place order",
    backToBasket: "Back to basket",
    orderCreated: "Order placed successfully"
  }
})
