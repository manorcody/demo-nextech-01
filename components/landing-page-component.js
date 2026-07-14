export default {
  name: 'landing-page-component',
  template: /* html */ `
    <div class="container py-4">
      <section class="hero-section rounded-4 p-4 p-md-5 mb-4 shadow-sm" style="min-height: 560px; display: flex; flex-direction: column; justify-content: center; align-items: flex-start;">
        <h1 class="display-1 fw-black mb-3 text-uppercase" style="font-size: clamp(3.1rem, 8vw, 6rem); letter-spacing: 0.09em; line-height: 0.95; max-width: 100%; text-shadow: 0 0 18px rgba(255,255,255,0.2);">Cody's PC Builds</h1>
        <p class="lead mb-4" style="font-size: 1.2rem; max-width: 720px;">A simple guide for beginners who want easy-to-understand PC build ideas for gaming, school work, and streaming.</p>
        <router-link to="/items" class="btn btn-primary btn-lg px-4 py-2"><i class="bi bi-pc-display me-1"></i>Browse build ideas</router-link>
      </section>

      <div class="home-content-reveal">
        <h2 class="h4 mt-3 home-reveal-item">What this app does</h2>
        <p class="home-reveal-item">
          This prototype helps people explore simple PC build options without getting lost in too much technical detail. Each build is shown as a clear card with a short description and a quick way to learn more.
        </p>
        <p class="home-reveal-item">
          The goal is to make choosing a first PC build feel easier, especially for students or beginners who want something practical and affordable.
        </p>

        <div class="row g-3 mt-2 home-reveal-item">
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <h3 class="h6 fw-bold">Budget gaming</h3>
              <p class="mb-0 text-white fw-bold">Good for people who want a fun setup without spending too much.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <h3 class="h6 fw-bold">School and work</h3>
              <p class="mb-0 text-white fw-bold">Helpful for homework, video calls, and everyday computer tasks.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm">
              <h3 class="h6 fw-bold">Creative projects</h3>
              <p class="mb-0 text-white fw-bold">A nice fit for editing, streaming, and other hands-on projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
