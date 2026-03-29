<template>
  <div>

    <!-- ===== HERO ===== -->
    <section class="hero-section">
      <!-- Noise texture overlay -->
      <div class="hero-noise" aria-hidden="true"></div>
      <!-- Radial glow -->
      <div class="hero-glow" aria-hidden="true"></div>
      <!-- Vertical scroll line -->
      <div class="scroll-line" aria-hidden="true"></div>

      <div class="hero-content">
        <h1 class="hero-heading">
          Ja,<span class="text-[#D4A857]">wat</span> dan?
        </h1>
        <div class="hero-bottom">
          <p class="hero-sub">
            Dan is hier een plek om alles te bewaren wat belangrijk voor je is. Voor jou, voor later, voor diegene die je achterlaat.
          </p>
          <NuxtLink to="/signup" class="hero-btn group">
            Laat iets moois achter
            <span class="arrow transition-transform duration-300 group-hover:translate-x-1" style="font-size: 32px; line-height: 1; position: relative; top: -2px;">›</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== INTRO ===== -->
    <section id="wat" class="max-w-[1300px] mx-auto px-10 py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      <div class="intro-big">
        Niemand denkt er graag over na.
        <span class="text-[#2C5F7C]">En toch is het een van de mooiste dingen die je kunt doen.</span>
      </div>
      <div class="intro-text">
        <p>Op deze plek zorg je dat de mensen die je liefhebt niet alleen staan als jij er niet meer bent. Met persoonlijke herinneringen, met praktische hulp, en met alles wat jij belangrijk vindt.</p>
        <p class="mt-4">Geen ingewikkelde formulieren. Geen juridisch jargon. Gewoon een fijne plek om het te regelen, op jouw tempo.</p>
        <p class="mt-4">Makkelijk alles bij de hand met de app <a href="/app" class="text-[#2C5F7C] font-bold hover:underline">voor iOS en Android</a>.</p>
      </div>
    </section>

    <!-- ===== FEATURES ===== -->
    <section id="features" class="px-10 pb-[120px] max-w-[1300px] mx-auto">

      <!-- Features header -->
      <div class="flex justify-between items-end mb-12 border-t-[3px] border-[#0f1c24] pt-5">
        <h2 class="font-[Anton_SC] text-[14px] uppercase tracking-[4px] text-[#95A5A6]">Wat kun je allemaal</h2>
      </div>

      <!-- Feature rows -->
      <div
        v-for="(feature, i) in features"
        :key="i"
        class="feature-row group"
      >
        <div class="font-[Anton_SC] text-[56px] text-[#e0ddd8] leading-none transition-colors duration-300 group-hover:text-[#D4A857]">
          {{ feature.num }}
        </div>
        <div class="font-[Anton_SC] text-[32px] text-[#0f1c24] uppercase leading-[1.1] pt-[6px]">
          {{ feature.title }}
        </div>
        <div class="text-[15px] text-[#636E72] leading-[1.8] pt-[10px]">
          <span v-if="feature.linkText">
            {{ feature.desc }}
            <a :href="feature.link" class="text-[#2C5F7C] font-bold no-underline hover:underline">{{ feature.linkText }}</a>
          </span>
          <span v-else>{{ feature.desc }}</span>
        </div>
      </div>

    </section>

    <!-- ===== STATEMENT ===== -->
    <section class="statement-section">
      <div class="statement-glow" aria-hidden="true"></div>
      <blockquote class="statement-quote">
        Later bestaat niet,<br>als je er <span class="text-[#D4A857]">niet meer bent.</span>
      </blockquote>
      <!-- <div class="h-7"></div> -->
    </section>

    <!-- ===== PRICING ===== -->
    <section id="kosten" class="max-w-[1300px] mx-auto px-10 py-[120px]">

      <!-- Header -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[60px] mb-14">
        <h2 class="font-[Anton_SC] text-[52px] text-[#0f1c24] uppercase leading-none">Wat kost dit?</h2>
        <p class="text-[17px] text-[#636E72] leading-[1.8] pt-2">
          Beginnen is gratis. Je betaalt pas als je meer opslagruimte of extra functies wilt. Twee opties: losse producten of een abonnement.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-5">

        <!-- Free card -->
        <div class="rounded-[20px] p-10 bg-[#0f1c24] text-white">
          <span class="inline-block bg-[#D4A857] text-[#0f1c24] px-3 py-1 rounded-md font-extrabold text-[11px] uppercase tracking-[1.5px] mb-5">Altijd gratis</span>
          <h3 class="font-[Anton_SC] text-[28px] uppercase leading-[1.1] mb-3">Begin zonder te betalen</h3>
          <p class="text-[15px] opacity-55 leading-[1.7] mb-8">Herinneringen achterlaten, wensen vastleggen, documenten opslaan en nabestaandenhulp. Gratis, voor altijd.</p>
          <NuxtLink to="/signup" class="inline-flex items-center gap-2 bg-[#D4A857] text-[#0f1c24] font-bold text-[15px] px-6 py-3 rounded-[12px] hover:brightness-110 transition-all">Laat iets moois achter <span style="font-size: 30px; line-height: 1;">›</span></NuxtLink>
        </div>

        <!-- Losse producten -->
        <div class="rounded-[20px] p-10 bg-white border-2 border-[#2C5F7C] flex flex-col">
          <h4 class="font-[Anton_SC] text-[22px] text-[#0f1c24] uppercase mb-2">Losse producten</h4>
          <p class="text-[14px] text-[#636E72] leading-[1.7] mb-4">Betaal alleen voor wat je gebruikt. Bijvoorbeeld extra opslagruimte of een bepaalde functionaliteit.</p>
          <div class="mt-auto bg-[#FAF8F5] rounded-[10px] p-[14px] text-[13px] text-[#2D3436] leading-[1.7] h-[110px]">
            <strong class="text-[#2C5F7C]">Bijvoorbeeld:</strong><br>
            5GB opslag<br>
            Persoonlijke landingspagina<br>
            Afdrukken van kaarten of brieven
          </div>
        </div>

        <!-- Abonnement -->
        <div class="rounded-[20px] p-10 bg-white border-2 border-[#2C5F7C] flex flex-col">
          <h4 class="font-[Anton_SC] text-[22px] text-[#0f1c24] uppercase mb-2">Abonnement</h4>
          <p class="text-[14px] text-[#636E72] leading-[1.7] mb-4">Alles in één. Meer functies, meer ruimte, altijd voordeliger.</p>
          <div class="mt-auto bg-[#FAF8F5] rounded-[10px] p-[14px] text-[13px] text-[#2D3436] leading-[1.7] h-[110px]">
            <strong class="text-[#2C5F7C]">Vanaf €0,99 / maand.</strong><br>
            Meer opslag, functionaliteit.<br>
            Persoonlijke support.<br>
            Eigen url (mits beschikbaar)
          </div>
        </div>

      </div>

      <!-- Export bar -->
      <div class="mt-5 px-8 py-5 bg-[#FAF8F5] rounded-[14px] flex items-center justify-between border-2 border-dashed border-[#d5d0c8] flex-wrap gap-2">
        <p class="text-[15px] text-[#636E72] font-semibold"><strong class="text-[#0f1c24]">Je data is van jou.</strong> Altijd exporteerbaar, ongeacht je plan.</p>
        <p class="text-[15px] text-[#636E72] font-semibold">Geen verrassingen.</p>
      </div>

    </section>

    <!-- ===== CTA ===== -->
    <section class="cta-section">
      <div class="cta-glow" aria-hidden="true"></div>
      <div class="relative z-10 text-center">
        <h2 class="cta-heading">Op jouw tempo, op jouw manier.</h2>
        <p class="text-[17px] text-white/50 mb-9">Begin vandaag en deel met je naasten, wanneer je wilt.</p>
        <NuxtLink
          to="/signup"
          class="cta-btn"
        >
          Laat iets moois achter <span class="cta-caret">›</span>
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const features = [
  {
    num: '01',
    title: 'Laat herinneringen achter',
    desc: 'Schrijf brieven, neem video\'s op, spreek audioboodschappen in. Maak fotoalbums met je verhaal bij elke foto. Kies wanneer en aan wie ze worden bezorgd.',
    linkText: null,
    link: null,
  },
  {
    num: '02',
    title: 'Help je nabestaanden',
    desc: 'Na een overlijden moeten er tientallen dingen geregeld worden. Wij helpen stap voor stap: instanties, brieven, documenten, tijdlijnen.',
    linkText: null,
    link: null,
  },
  {
    num: '03',
    title: 'Leg je wensen vast',
    desc: 'Begrafenis of crematie, welke muziek, welke bloemen, wie er spreekt. Leg het vast zodat jouw wensen gerespecteerd worden.',
    linkText: null,
    link: null,
  },
  {
    num: '04',
    title: 'Download de app',
    desc: 'Alles makkelijk delen zoals leuke foto\'s van memorabele momenten. ',
    linkText: 'Download de app ↓',
    link: '/app',
  },
]
</script>

<style scoped>
/* Hero */
.hero-section {
  min-height: 100vh;
  background: #0f1c24;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0 40px 80px;
  overflow: hidden;
}

.hero-noise {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

.hero-glow {
  position: absolute;
  bottom: -200px;
  right: -100px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(212, 168, 87, 0.12), transparent 70%);
  z-index: 1;
}

.scroll-line {
  position: absolute;
  left: 40px;
  bottom: 0;
  width: 1px;
  height: 80px;
  background: linear-gradient(180deg, rgba(255,255,255,0.3), transparent);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
}

.hero-heading {
  font-family: 'Anton SC', sans-serif;
  font-size: clamp(60px, 10vw, 120px);
  color: white;
  line-height: 0.95;
  text-transform: uppercase;
  margin-bottom: 40px;
  max-width: 1000px;
  letter-spacing: -1px;
  font-weight: normal;
}

.hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
}

.hero-sub {
  font-size: 21px;
  color: rgba(255, 255, 255, 0.75);
  max-width: 50%;
  line-height: 1.7;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 20px 40px;
  background: white;
  color: #0f1c24;
  font-weight: 800;
  font-size: 16px;
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.3s;
  flex-shrink: 0;
}

.hero-btn:hover {
  background: #D4A857;
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(212, 168, 87, 0.3);
}

.arrow {
  font-size: 20px;
}

/* Intro */
.intro-big {
  font-family: 'Anton SC', sans-serif;
  font-size: 42px;
  color: #0f1c24;
  line-height: 1.1;
  text-transform: uppercase;
  font-weight: normal;
}

.intro-text {
  font-size: 17px;
  color: #636E72;
  line-height: 1.9;
  padding-top: 8px;
}

/* Features */
.feature-row {
  display: grid;
  grid-template-columns: 80px 1fr 1fr;
  gap: 40px;
  padding: 44px 0;
  border-bottom: 1px solid #e0ddd8;
  align-items: start;
  transition: all 0.3s;
  cursor: default;
}

.feature-row:hover {
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 -20px;
  background: rgba(44, 95, 124, 0.02);
  border-radius: 16px;
}

/* Statement */
.statement-section {
  background: #0f1c24;
  padding: 140px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.statement-glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(91, 154, 111, 0.06), transparent 60%);
}

.statement-quote {
  font-family: 'Anton SC', sans-serif;
  font-size: clamp(32px, 5vw, 64px);
  color: white;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.1;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  font-weight: normal;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 20px 48px;
  background: white;
  color: #2C5F7C;
  font-weight: 800;
  font-size: 17px;
  border-radius: 14px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s, transform 0.3s, box-shadow 0.3s;
}

.cta-btn:hover {
  background: #D4A857;
  color: #0f1c24;
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(212, 168, 87, 0.25);
}

.cta-caret {
  font-size: 34px;
  line-height: 1;
  position: relative;
  top: -2px;
}

/* CTA */
.cta-section {
  background: #0f1c24;
  padding: 120px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  right: -100px;
  top: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(212, 168, 87, 0.12), transparent 60%);
}

.cta-heading {
  font-family: 'Anton SC', sans-serif;
  font-size: clamp(36px, 6vw, 64px);
  color: white;
  margin-bottom: 24px;
  line-height: 1;
  text-transform: uppercase;
  font-weight: normal;
}

/* Responsive */
@media (max-width: 1024px) {
  .feature-row {
    grid-template-columns: 60px 1fr;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 0 24px 60px;
  }

  .hero-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-sub {
    max-width: 100%;
  }

  .feature-row {
    grid-template-columns: 1fr;
    gap: 4px;
  }

  .scroll-line {
    display: none;
  }
}
</style>
