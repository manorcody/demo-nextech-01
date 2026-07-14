import LandingPageComponent from './components/landing-page-component.js';
import AboutPageComponent from './components/about-page-component.js';
import NavbarComponent from './components/navbar-component.js';
import CollectionPageComponent from './components/collection-page-component.js';
import ItemDetailPageComponent from './components/item-detail-page-component.js';
import CartPageComponent from './components/cart-page-component.js';
import InstructionsPageComponent from './components/instructions-page-component.js';

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
  {
    path: '/cart',
    component: CartPageComponent,
  },
  {
    path: '/instructions',
    component: InstructionsPageComponent,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const setBackgroundMode = (path) => {
  const shouldShowBg = path !== '/cart';
  document.body.classList.toggle('has-moving-bg', shouldShowBg);
  document.body.classList.toggle('no-moving-bg', !shouldShowBg);
};

router.afterEach((to) => {
  setBackgroundMode(to.path);
});

const app = Vue.createApp({
  setup() {
    const itemsStore = Vue.reactive({
      items: [],
      isLoading: true,
      error: '',
    });

    const cartStore = Vue.reactive({
      items: [],
      addItem(item) {
        const existingItem = this.items.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          this.items.push({ ...item, quantity: 1 });
        }
      },
      removeItem(itemId) {
        this.items = this.items.filter((item) => item.id !== itemId);
      },
      clearCart() {
        this.items = [];
      },
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
vr-ready,VR Ready Rig,"A compact VR system with RTX 3070, fast storage, Wi-Fi 6 card, vivid RGB lighting, and enough power for immersive experiences",Gaming,./images/pc-placeholder.svg,Best for VR gaming,$935`;

    function parsePriceValue(price) {
      const cleaned = String(price || '').trim().replace(/[^0-9.-]/g, '');
      const numericValue = Number(cleaned);
      return Number.isFinite(numericValue) ? numericValue : 0;
    }

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
              price: parsePriceValue(row.price),
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
              price: parsePriceValue(row.price),
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

    Vue.onMounted(() => {
      setBackgroundMode(router.currentRoute.value.path);
    });

    Vue.provide('itemsStore', itemsStore);
    Vue.provide('cartStore', cartStore);

    return {};
  },
});

app.component('navbar-component', NavbarComponent);

app.use(router);
app.mount('#app');
