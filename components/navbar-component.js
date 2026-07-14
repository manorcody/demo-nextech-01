export default {
  name: 'navbar-component',
  setup() {
    const cartStore = Vue.inject('cartStore');

    return {
      cartStore,
    };
  },
  template: /* html */ `
    <nav class="navbar sticky-top navbar-expand px-3 py-2">
      <div class="navbar-brand-shell d-flex align-items-center gap-2">
        <div class="brand-glow"></div>
        <span class="navbar-brand mb-0 h1 text-light"><i class="bi bi-pc-display me-2"></i>Cody's PC Builds</span>
      </div>

      <div class="navbar-contact mx-auto text-center">
        <span class="navbar-contact-text">Contact me at  -  765-760-1959</span>
      </div>

      <div class="ms-auto d-flex gap-2 nav-links">
        <router-link class="nav-pill btn btn-sm" to="/">
          <i class="bi bi-house me-1"></i>Home
        </router-link>
        <router-link class="nav-pill btn btn-sm d-flex align-items-center" to="/items">
          <i class="bi bi-card-list me-1"></i>Builds
        </router-link>
        <router-link class="nav-pill btn btn-sm" to="/about">
          <i class="bi bi-info-circle me-1"></i>About
        </router-link>
        <router-link class="nav-pill btn btn-sm" to="/instructions">
          <i class="bi bi-journal-text me-1"></i>Instructions
        </router-link>
        <router-link class="nav-pill btn btn-sm d-flex align-items-center" to="/cart">
          <i class="bi bi-cart3 me-1"></i>Cart
          <span v-if="cartStore.items.length > 0" class="badge text-bg-light text-dark ms-2">{{ cartStore.items.length }}</span>
        </router-link>
      </div>
    </nav>
  `,
};
