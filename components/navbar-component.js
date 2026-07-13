export default {
  name: 'navbar-component',
  template: /* html */ `
    <nav class="navbar sticky-top navbar-expand bg-dark border-bottom px-3">
      <span class="navbar-brand mb-0 h1 text-light"><i class="bi bi-pc-display me-2"></i>Cody's PC Builds</span>

      <div class="ms-auto d-flex gap-2">
        <router-link class="btn btn-outline-light btn-sm" to="/">
          <i class="bi bi-house me-1"></i>Home
        </router-link>
        <router-link class="btn btn-outline-light btn-sm d-flex align-items-center" to="/items">
          <i class="bi bi-card-list me-1"></i>Builds
        </router-link>
        <router-link class="btn btn-outline-light btn-sm" to="/about">
          <i class="bi bi-info-circle me-1"></i>About
        </router-link>
      </div>
    </nav>
  `,
};
