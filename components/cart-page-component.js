export default {
  name: 'cart-page-component',
  setup() {
    const cartStore = Vue.inject('cartStore');

    const formatPrice = (price) => {
      const cleaned = String(price || '').trim().replace(/[^0-9.-]/g, '');
      const numericPrice = Number(cleaned);
      return `$${Number.isFinite(numericPrice) ? numericPrice.toFixed(0) : '0'}`;
    };

    const getItemTotal = (item) => {
      const numericPrice = Number(item.price || 0);
      return numericPrice * item.quantity;
    };

    const shippingFee = 50;

    const grandTotal = Vue.computed(() => {
      return cartStore.items.reduce((sum, item) => sum + getItemTotal(item), 0) + shippingFee;
    });

    return {
      cartStore,
      formatPrice,
      getItemTotal,
      grandTotal,
      shippingFee,
    };
  },
  template: /* html */ `
    <section class="container py-4">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 class="h3 mb-1">Your cart</h1>
          <p class="text-muted mb-0">Your selected PC builds are waiting here.</p>
        </div>
        <button v-if="cartStore.items.length > 0" type="button" class="btn btn-outline-light btn-sm" @click="cartStore.clearCart()">
          <i class="bi bi-trash me-1"></i>Clear cart
        </button>
      </div>

      <div v-if="cartStore.items.length === 0" class="cart-empty card border-0 shadow-sm p-4 text-center">
        <h2 class="h5 mb-2">Your cart is empty</h2>
        <p class="text-muted mb-3">Pick a few build ideas from the builds page to get started.</p>
        <router-link to="/items" class="btn btn-primary">
          <i class="bi bi-card-list me-1"></i>Browse builds
        </router-link>
      </div>

      <div v-else class="row g-4">
        <div class="col-lg-8">
          <div v-for="item in cartStore.items" :key="item.id" class="cart-item card border-0 shadow-sm mb-3">
            <div class="card-body d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
              <div class="d-flex align-items-center gap-3">
                <div class="cart-thumb d-flex align-items-center justify-content-center">
                  <i class="bi bi-pc-display fs-4"></i>
                </div>
                <div>
                  <h2 class="h6 mb-1">{{ item.name }}</h2>
                  <p class="small text-muted mb-1">{{ item.category || 'General' }}</p>
                  <p class="small mb-0"><strong>Qty:</strong> {{ item.quantity }}</p>
                </div>
              </div>

              <div class="d-flex align-items-center gap-3">
                <div class="text-end">
                  <div class="fw-semibold">{{ formatPrice(getItemTotal(item)) }}</div>
                  <div class="small text-muted">{{ formatPrice(item.price) }} each</div>
                </div>
                <button type="button" class="btn btn-outline-light btn-sm" @click="cartStore.removeItem(item.id)">
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card border-0 shadow-sm p-3">
            <h2 class="h5 mb-3">Cart summary</h2>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-white fw-bold">Items</span>
              <span class="text-white fw-bold">{{ cartStore.items.length }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-white fw-bold">Total builds</span>
              <span class="text-white fw-bold">{{ cartStore.items.reduce((sum, item) => sum + item.quantity, 0) }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-white fw-bold">Build totals</span>
              <span class="text-white fw-bold">{{ formatPrice(cartStore.items.reduce((sum, item) => sum + getItemTotal(item), 0)) }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span class="text-white fw-bold">Shipping</span>
              <span class="text-white fw-bold">{{ formatPrice(shippingFee) }}</span>
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center fw-bold fs-4 text-warning mt-2 p-2 rounded-3" style="background: rgba(255, 193, 7, 0.12);">
              <span class="text-white">Total + Shipping</span>
              <span class="text-white">{{ formatPrice(grandTotal) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};
