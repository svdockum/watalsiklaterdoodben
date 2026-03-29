<template>
  <div class="max-w-[1200px]">

    <!-- Welcome heading -->
    <div class="mb-10">
      <p class="text-[13px] font-bold uppercase tracking-[2px] text-[#95A5A6] mb-1">Goedemiddag</p>
      <h1 class="font-[Anton_SC] text-[48px] text-[#0f1c24] uppercase leading-none">Anton</h1>
      <p class="text-[#636E72] text-[16px] mt-2">Fijn dat je er bent. Dit is jouw persoonlijke overzicht.</p>
    </div>

    <!-- Top row: Progress ring + Todo list -->
    <div class="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 mb-8">

      <!-- Completion ring -->
      <div class="bg-white rounded-[20px] p-8 border border-[#e0ddd8] flex flex-col items-center text-center">
        <p class="font-[Anton_SC] text-[12px] uppercase tracking-[2px] text-[#95A5A6] mb-6">Profiel volledigheid</p>

        <!-- SVG Progress Ring -->
        <div class="relative w-[160px] h-[160px] mb-6">
          <svg class="w-full h-full -rotate-90" viewBox="0 0 160 160">
            <!-- Background circle -->
            <circle
              cx="80" cy="80" r="68"
              fill="none"
              stroke="#e0ddd8"
              stroke-width="12"
            />
            <!-- Progress arc -->
            <circle
              cx="80" cy="80" r="68"
              fill="none"
              stroke="#2C5F7C"
              stroke-width="12"
              stroke-linecap="round"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="dashOffset"
              class="transition-all duration-1000"
            />
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="font-[Anton_SC] text-[36px] text-[#0f1c24] leading-none">{{ completionPercent }}%</span>
            <span class="text-[12px] text-[#95A5A6] font-semibold mt-1">compleet</span>
          </div>
        </div>

        <p class="text-[14px] text-[#636E72] leading-[1.6]">Je bent goed op weg. Vul nog <strong class="text-[#0f1c24]">{{ 100 - completionPercent }}%</strong> aan om jouw nalatenschap volledig voor te bereiden.</p>

        <!-- Mini progress bars per category -->
        <div class="w-full mt-6 space-y-3">
          <div v-for="cat in categoryProgress" :key="cat.name">
            <div class="flex justify-between text-[12px] mb-1">
              <span class="text-[#636E72] font-semibold">{{ cat.name }}</span>
              <span class="text-[#0f1c24] font-bold">{{ cat.pct }}%</span>
            </div>
            <div class="h-[6px] bg-[#e0ddd8] rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-700"
                :style="{ width: cat.pct + '%', background: cat.color }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Todo / checklist -->
      <div class="bg-white rounded-[20px] p-8 border border-[#e0ddd8]">
        <div class="flex items-center justify-between mb-6">
          <div>
            <p class="font-[Anton_SC] text-[12px] uppercase tracking-[2px] text-[#95A5A6]">Nog te doen</p>
            <h2 class="font-[Anton_SC] text-[24px] text-[#0f1c24] uppercase leading-none mt-1">Jouw checklist</h2>
          </div>
          <span class="bg-[#2C5F7C]/15 text-[#b5873f] text-[12px] font-bold px-3 py-1 rounded-full">
            {{ pendingCount }} openstaand
          </span>
        </div>

        <div class="space-y-6">
          <div v-for="group in todoGroups" :key="group.category">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-full flex-shrink-0" :style="{ background: group.color }"></span>
              <h3 class="text-[12px] font-bold uppercase tracking-[1.5px] text-[#95A5A6]">{{ group.category }}</h3>
            </div>
            <div class="space-y-2">
              <label
                v-for="item in group.items"
                :key="item.id"
                class="flex items-center gap-3 p-3 rounded-[10px] cursor-pointer transition-colors hover:bg-[#FAF8F5] group"
              >
                <div
                  class="w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all"
                  :class="item.done ? 'bg-[#5B9A6F] border-[#5B9A6F]' : 'border-[#d5d0c8] group-hover:border-[#2C5F7C]'"
                  @click="toggleTodo(item)"
                >
                  <svg v-if="item.done" class="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div class="flex-grow">
                  <span
                    class="text-[14px] font-semibold transition-colors"
                    :class="item.done ? 'text-[#95A5A6] line-through' : 'text-[#2D3436]'"
                  >{{ item.label }}</span>
                  <p v-if="item.hint" class="text-[12px] text-[#95A5A6] mt-0.5">{{ item.hint }}</p>
                </div>
                <span v-if="!item.done" class="text-[#2C5F7C] opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Feature cards grid -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-5">
        <h2 class="font-[Anton_SC] text-[24px] text-[#0f1c24] uppercase leading-none">Functionaliteiten</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLink
          v-for="card in featureCards"
          :key="card.title"
          :to="card.to"
          class="feature-card group"
        >
          <div class="feature-card-icon" :style="{ background: card.iconBg }">
            <span v-html="card.icon"></span>
          </div>
          <div class="flex-grow">
            <h3 class="font-[Anton_SC] text-[20px] text-[#0f1c24] uppercase leading-none mb-1 group-hover:text-[#2C5F7C] transition-colors">{{ card.title }}</h3>
            <p class="text-[13px] text-[#636E72] leading-[1.6]">{{ card.desc }}</p>
          </div>
          <div v-if="card.badge" class="mt-auto pt-4">
            <span class="text-[11px] font-bold uppercase tracking-[1px] px-2 py-1 rounded-md" :class="card.badgeClass">{{ card.badge }}</span>
          </div>
          <div class="mt-auto pt-4 flex items-center gap-1 text-[#2C5F7C] text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Ga naar <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Recent activity -->
    <div class="bg-white rounded-[20px] p-8 border border-[#e0ddd8]">
      <div class="flex items-center justify-between mb-6">
        <h2 class="font-[Anton_SC] text-[20px] text-[#0f1c24] uppercase leading-none">Recente activiteit</h2>
        <button class="text-[13px] text-[#2C5F7C] font-semibold hover:underline">Alles bekijken</button>
      </div>
      <div class="space-y-4">
        <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start gap-4 py-3 border-b border-[#FAF8F5] last:border-b-0">
          <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" :style="{ background: activity.iconBg }">
            <span v-html="activity.icon" class="text-white"></span>
          </div>
          <div class="flex-grow">
            <p class="text-[14px] font-semibold text-[#2D3436]">{{ activity.title }}</p>
            <p class="text-[13px] text-[#95A5A6] mt-0.5">{{ activity.desc }}</p>
          </div>
          <span class="text-[12px] text-[#b2aba0] flex-shrink-0">{{ activity.time }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
})

// Progress ring math
const completionPercent = ref(40)
const radius = 68
const circumference = 2 * Math.PI * radius
const dashOffset = computed(() => circumference - (completionPercent.value / 100) * circumference)

const categoryProgress = [
  { name: 'Voorbereiding', pct: 25, color: '#2C5F7C' },
  { name: 'Herinneringen', pct: 60, color: '#5B9A6F' },
  { name: 'Nabestaanden', pct: 20, color: '#2C5F7C' },
  { name: 'Uitvaartwensen', pct: 55, color: '#9a6d2f' },
]

// Todo groups
const todoGroups = reactive([
  {
    category: 'Voorbereiding',
    color: '#2C5F7C',
    items: [
      { id: 't1', label: 'Testament uploaden of aanmaken', hint: 'Bewaar een kopie in je digitale kluis', done: false },
      { id: 't2', label: 'Verzekeringen vastleggen', hint: 'Levensverzekering, uitvaartverzekering', done: false },
      { id: 't3', label: 'Digitale kluis vullen', hint: 'Wachtwoorden, documenten, contracten', done: true },
    ],
  },
  {
    category: 'Herinneringen',
    color: '#5B9A6F',
    items: [
      { id: 't4', label: 'Eerste brief schrijven', hint: 'Aan wie wil jij wat nalaten?', done: true },
      { id: 't5', label: 'Foto\'s toevoegen aan album', hint: 'Sleep foto\'s of upload via de app', done: false },
      { id: 't6', label: 'Videoboodschap opnemen', hint: 'Gebruik de camera of upload een video', done: false },
    ],
  },
  {
    category: 'Nabestaanden',
    color: '#2C5F7C',
    items: [
      { id: 't7', label: 'Vertrouwde contacten instellen', hint: 'Wie krijgt toegang na jouw overlijden?', done: false },
      { id: 't8', label: 'Toegang configureren per contact', hint: 'Bepaal wat elk contact mag zien', done: false },
    ],
  },
  {
    category: 'Uitvaartwensen',
    color: '#9a6d2f',
    items: [
      { id: 't9', label: 'Begrafenis of crematie kiezen', hint: 'Leg jouw voorkeur vast', done: true },
      { id: 't10', label: 'Muziekkeuze vastleggen', hint: 'Welke nummers wil je horen?', done: false },
      { id: 't11', label: 'Locatie en ceremonie wensen', hint: 'Kerk, aula, buitenruimte?', done: false },
    ],
  },
])

const pendingCount = computed(() =>
  todoGroups.flatMap(g => g.items).filter(i => !i.done).length
)

const toggleTodo = (item: { done: boolean }) => {
  item.done = !item.done
}

// Feature cards
const featureCards = [
  {
    title: 'Herinneringen',
    to: '/dashboard/herinneringen',
    desc: 'Brieven, foto\'s, video\'s en audioboodschappen voor je naasten.',
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
    iconBg: '#5B9A6F',
    badge: '3 nieuw',
    badgeClass: 'bg-[#5B9A6F]/15 text-[#3a6547]',
  },
  {
    title: 'Digitale Kluis',
    to: '/dashboard/kluis',
    desc: 'Bewaar wachtwoorden, documenten en contracten veilig.',
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>',
    iconBg: '#2C5F7C',
    badge: null,
    badgeClass: '',
  },
  {
    title: 'Nabestaandenhulp',
    to: '/dashboard/nabestaanden',
    desc: 'Stap-voor-stap hulp voor instanties, brieven en documenten.',
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    iconBg: '#0f1c24',
    badge: null,
    badgeClass: '',
  },
  {
    title: 'Uitvaartwensen',
    to: '/dashboard/uitvaartwensen',
    desc: 'Muziek, locatie, ceremonie – leg alles vast op jouw manier.',
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',
    iconBg: '#9a6d2f',
    badge: 'Aanbevolen',
    badgeClass: 'bg-[#2C5F7C]/20 text-[#9a6d2f]',
  },
  {
    title: 'Webshop',
    to: '/dashboard/webshop',
    desc: 'Extra opslagruimte, afdrukken en persoonlijke producten.',
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>',
    iconBg: '#636E72',
    badge: null,
    badgeClass: '',
  },
  {
    title: 'Kennisbank',
    to: '/dashboard/kennisbank',
    desc: 'Artikelen, gidsen en antwoorden op veelgestelde vragen.',
    icon: '<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
    iconBg: '#2C5F7C',
    badge: null,
    badgeClass: '',
  },
]

// Recent activity
const recentActivity = [
  {
    id: 1,
    title: 'Brief "Aan mijn kinderen" opgeslagen',
    desc: 'Herinneringen — gisteren om 14:32',
    time: '1 dag',
    icon: '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    iconBg: '#5B9A6F',
  },
  {
    id: 2,
    title: 'Begrafeniswens "Crematie" vastgelegd',
    desc: 'Uitvaartwensen — 2 dagen geleden',
    time: '2 dagen',
    icon: '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>',
    iconBg: '#9a6d2f',
  },
  {
    id: 3,
    title: 'Digitale kluis aangemaakt',
    desc: 'Digitale Kluis — 3 dagen geleden',
    time: '3 dagen',
    icon: '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>',
    iconBg: '#2C5F7C',
  },
  {
    id: 4,
    title: 'Account aangemaakt',
    desc: 'Profiel — 1 week geleden',
    time: '7 dagen',
    icon: '<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
    iconBg: '#0f1c24',
  },
]
</script>

<style scoped>
.feature-card {
  display: flex;
  flex-direction: column;
  background: white;
  border: 1.5px solid #e0ddd8;
  border-radius: 16px;
  padding: 28px;
  text-decoration: none;
  transition: all 0.25s;
  cursor: pointer;
}

.feature-card:hover {
  border-color: #2C5F7C;
  box-shadow: 0 8px 32px rgba(44, 95, 124, 0.1);
  transform: translateY(-2px);
}

.feature-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  flex-shrink: 0;
}
</style>
