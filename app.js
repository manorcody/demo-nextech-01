import LandingPageComponent from './components/landing-page-component.js';
import AboutPageComponent from './components/about-page-component.js';
import NavbarComponent from './components/navbar-component.js';
import CollectionPageComponent from './components/collection-page-component.js';
import ItemDetailPageComponent from './components/item-detail-page-component.js';

const routes = [
  {
    path: '/',
    component: LandingPageComponent,
  },
  {
    path: '/about',
    component: AboutPageComponent,
  },
  {
    path: '/items',
    component: CollectionPageComponent,
  },
  {
    path: '/items/:id',
    component: ItemDetailPageComponent,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  setup() {
    const itemsStore = Vue.reactive({
      items: [],
      isLoading: true,
      error: '',
    });

    const fallbackCsvText = `id,name,description,category,image_url,location,price
  budget-gaming,Neon Entry Gaming PC,"A lower-end neon RGB gaming PC with budget CPU, GTX GPU, RGB fans, and fast NVMe storage for casual 1080p play",Gaming,./images/pc-led-1.svg,Best for beginner gamers,$420
student-stream,Student Stream Setup,"A polished LED desktop with Core i5, 16GB RAM, M.2 SSD, USB-C hub, and a clean interior for school work and livestreaming",Creator,./images/pc-led-2.svg,Perfect for homework and livestreams,$532
cyberpunk-rig,Cyberpunk LED Rig,"A colorful case with RTX 3060, liquid cooler, ATX motherboard, 2TB SSD, and glowing RGB strips",Streaming,./images/pc-led-3.svg,Great for content creators,$748
office-glow,Office Glow PC,"A quiet setup with efficient PSU, SSD storage, subtle LED accents, low-noise fans, and a compact cable layout",Office,./images/pc-led-4.svg,Best for home office use,$426
upgrade-path,Upgrade Path Build,"A midrange LED rig with expandable motherboard, 32GB RAM, PCIe slots, dual storage bays, and room for better cooling",Upgrade,./images/pc-led-5.svg,Ideal for future upgrades,$653
pro-gaming,Pro Gaming PC,"A high-performance LED gaming PC with RTX graphics, 1440p-ready GPU, Corsair cooler, and high-speed DDR5 memory",Gaming,./images/pc-led-6.svg,Best for high frame rate gaming,$1287
mini-gaming,Mini LED Gaming Rig,"A small form factor PC with compact GPU, SFX PSU, 16GB RAM, M.2 SSD, and bright accent lighting for tiny desks",Gaming,./images/pc-placeholder.svg,Best for compact rooms,$984
rtx-starter,RTX Starter Build,"An entry-level tower with RTX 3050, 1TB NVMe drive, dual-zone RGB fans, and a reliable air cooler for beginner gaming",Gaming,./images/pc-placeholder.svg,Best for starter gamers,$599
creator-studio,Creator Studio PC,"A creator-friendly build with Ryzen 7, 32GB DDR4, 2TB SSD, USB-C front panel, and a quiet RGB case for editing",Creator,./images/pc-placeholder.svg,Great for video editing,$783
vr-ready,VR Ready Rig,"A compact VR system with RTX 3070, fast storage, Wi-Fi 6 card, vivid RGB lighting, and enough power for immersive experiences",Gaming,./images/pc-placeholder.svg,Best for VR gaming,$935
overclock-fury,Overclocked Fury PC,"A powerful tank with custom liquid cooling, high-end motherboard, 64GB RAM, dual SSDs, and premium case fans",Gaming,./images/pc-placeholder.svg,Best for performance tuning,$1299
silent-ryzen,Silent Ryzen Workstation,"A near-silent PC with Ryzen 9, passive-style fan setup, 1TB NVMe SSD, RGB accent, and elegant LED lighting",Office,./images/pc-placeholder.svg,Best for quiet workspaces,$1120
rgb-stream,RGB Streaming Tower,"A streaming rig with Intel i7, capture card, programmable addressable RGB, 32GB RAM, and a fast SSD for live content",Streaming,./images/pc-placeholder.svg,Great for live streamers,$860
liquid-frost,Liquid Frost Build,"A frosty LED build with custom loop cooling, dual SSDs, premium PSU, tempered glass, and cool winter lighting",Gaming,./images/pc-placeholder.svg,Best for showcase desks,$1099
ultimate-content,Ultimate Content PC,"A powerhouse workstation with dual monitor support, 64GB RAM, 4TB storage, RTX 4080, and a bright LED chassis",Creator,./images/pc-placeholder.svg,Best for serious content creators,$1425
compact-creator,Compact Creator Desk PC,"A mini desk PC with mini ITX board, 32GB RAM, NVMe storage, ambient LED lighting, and strong productivity performance",Creator,./images/pc-placeholder.svg,Best for tight desks,$1575
dual-gpu,Dual GPU Performance PC,"A performance monster with dual GPUs, liquid cooling, 128GB RAM, reinforced frame, and RGB lighting for heavy workloads",Gaming,./images/pc-placeholder.svg,Best for heavy gaming and rendering,$1899`;

    function parseCsvText(csvText) {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: ({ data, errors }) => {
          if (errors.length > 0) {
            // Log parse errors but attempt to salvage usable rows so the app
            // still shows builds (keeps user's local image paths intact).
            console.warn('CSV parse errors:', errors);
            const salvaged = (data || []).filter(Boolean).map((row) => ({
              id: String(row.id || '').trim(),
              name: String(row.name || '').trim(),
              description: String(row.description || '').trim(),
              category: String(row.category || '').trim(),
              imageUrl: String(row.image_url || '').trim(),
              location: String(row.location || '').trim(),
              price: String(row.price || '').trim(),
            })).filter(item => item.id || item.name);

            if (salvaged.length > 0) {
              itemsStore.items = salvaged;
              itemsStore.error = '';
            } else {
              // If nothing could be salvaged, fall back to the built-in dataset.
              parseCsvText(fallbackCsvText);
              return;
            }
          } else {
            itemsStore.items = data.map((row) => ({
              id: String(row.id || '').trim(),
              name: String(row.name || '').trim(),
              description: String(row.description || '').trim(),
              category: String(row.category || '').trim(),
              imageUrl: String(row.image_url || '').trim(),
              location: String(row.location || '').trim(),
              price: String(row.price || '').trim(),
            }));
            itemsStore.error = '';
          }
          itemsStore.isLoading = false;
        },
        error: () => {
          itemsStore.error = 'There was a problem parsing CSV data.';
          itemsStore.items = [];
          itemsStore.isLoading = false;
        },
      });
    }

    fetch('items-template.csv')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load CSV data file.');
        }
        return response.text();
      })
      .then(parseCsvText)
      .catch(() => {
        parseCsvText(fallbackCsvText);
      });

    Vue.provide('itemsStore', itemsStore);

    return {};
  },
});

app.component('navbar-component', NavbarComponent);

app.use(router);
app.mount('#app');
