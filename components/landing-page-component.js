export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4">
      <section class="hero-section rounded-4 p-4 p-md-5 mb-4 shadow-sm">
        <h1 class="display-6 fw-bold mb-3">Cody's PC Builds</h1>
        <p class="lead mb-4">A simple guide for beginners who want easy-to-understand PC build ideas for gaming, school work, and streaming.</p>
        <router-link to="/items" class="btn btn-primary"><i class="bi bi-pc-display me-1"></i>Browse build ideas</router-link>
      </section>

      <h2 class="h4 mt-3">What this app does</h2>
      <p>
        This prototype helps people explore simple PC build options without getting lost in too much technical detail. Each build is shown as a clear card with a short description and a quick way to learn more.
      </p>
      <p>
        The goal is to make choosing a first PC build feel easier, especially for students or beginners who want something practical and affordable.
      </p>

      <div class="row g-3 mt-2">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <h3 class="h6">Budget gaming</h3>
            <p class="mb-0 text-muted">Good for people who want a fun setup without spending too much.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <h3 class="h6">School and work</h3>
            <p class="mb-0 text-muted">Helpful for homework, video calls, and everyday computer tasks.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <h3 class="h6">Creative projects</h3>
            <p class="mb-0 text-muted">A nice fit for editing, streaming, and other hands-on projects.</p>
          </div>
        </div>
      </div>
    </div>
  `,
};
