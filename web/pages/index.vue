<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-400/20 to-transparent rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-400/20 to-transparent rounded-full blur-3xl"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <h1 class="section-heading mb-6 leading-tight">
            <span class="gradient-text">
              Plan je erfenis
            </span>
            <br>
            <span class="text-gray-900">
              met vrede van geest
            </span>
          </h1>

          <p class="section-subtitle mb-8 text-gray-700">
            Deel je herinneringen, organiseer je zaken en help je nabestaanden. 
            Wat als ik later dood ben maakt het eenvoudig en veilig.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/signup" class="btn-primary">
              Start je gratis
            </NuxtLink>
            <button class="btn-secondary">
              Bekijk demo
            </button>
          </div>

          <!-- Trust Badges -->
          <div class="mt-12 flex flex-col sm:flex-row gap-8 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>GDPR Compliant</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>256-bit Versleuteling</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Kosteloos voor iedereen</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white/40 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold gradient-text mb-2">45K+</div>
            <p class="text-gray-600">Actieve gebruikers</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold gradient-text mb-2">1M+</div>
            <p class="text-gray-600">Herinneringen gedeeld</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold gradient-text mb-2">98%</div>
            <p class="text-gray-600">Tevreden gebruikers</p>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold gradient-text mb-2">24/7</div>
            <p class="text-gray-600">Ondersteuning beschikbaar</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Bento Grid Section -->
    <section class="py-20 md:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-heading mb-4">Alles wat je nodig hebt</h2>
          <p class="section-subtitle">
            Een compleet platform voor voorbereiding, herinneringen en nabestaanden
          </p>
        </div>

        <!-- Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Large Feature Card 1 -->
          <div class="md:col-span-2 glass-card">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-2xl font-heading font-bold text-gray-900 mb-3">
                  Voorbereiding
                </h3>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Organiseer je financiële zaken, juridische documenten en persoonlijke wensen 
                  op één veilige plek.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-secondary-500 rounded-full"></span>
                    Testament en juridische documenten
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-secondary-500 rounded-full"></span>
                    Financiële informatie
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-secondary-500 rounded-full"></span>
                    Begrafenis wensen
                  </li>
                </ul>
              </div>
              <div class="text-5xl opacity-20">📋</div>
            </div>
          </div>

          <!-- Feature Card 2 -->
          <div class="glass-card">
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
              Herinneringen
            </h3>
            <p class="text-gray-700 text-sm mb-4">
              Bewaar je mooiste momenten, foto's en verhalen.
            </p>
            <div class="text-4xl opacity-30">📸</div>
          </div>

          <!-- Feature Card 3 -->
          <div class="glass-card">
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
              Checklists
            </h3>
            <p class="text-gray-700 text-sm mb-4">
              Volg je voortgang met interactieve checklists.
            </p>
            <div class="text-4xl opacity-30">✓</div>
          </div>

          <!-- Feature Card 4 -->
          <div class="glass-card">
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
              Versleuteling
            </h3>
            <p class="text-gray-700 text-sm mb-4">
              Jouw data is altijd beveiligd en privé.
            </p>
            <div class="text-4xl opacity-30">🔒</div>
          </div>

          <!-- Large Feature Card 2 -->
          <div class="md:col-span-2 glass-card">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-2xl font-heading font-bold text-gray-900 mb-3">
                  Nabestaanden
                </h3>
                <p class="text-gray-700 mb-6 leading-relaxed">
                  Laat belangrijke informatie achter voor je naasten en maak het makkelijker 
                  voor hen in moeilijke tijden.
                </p>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-secondary-500 rounded-full"></span>
                    Vertrouwde contacten beheren
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-secondary-500 rounded-full"></span>
                    Gecontroleerde toegang
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-secondary-500 rounded-full"></span>
                    Erfenis berichten
                  </li>
                </ul>
              </div>
              <div class="text-5xl opacity-20">👥</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-20 md:py-32 bg-white/40 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-heading mb-4">Hoe het werkt</h2>
          <p class="section-subtitle">
            Drie eenvoudige stappen om aan de slag te gaan
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Step 1 -->
          <div class="relative">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold mb-6">
              1
            </div>
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
              Maak een account
            </h3>
            <p class="text-gray-700">
              Registreer gratis in minder dan 2 minuten. Geen creditcard nodig.
            </p>
            <div
              v-if="true"
              class="hidden md:block absolute top-12 right-0 w-full h-1 bg-gradient-to-r from-primary-500 to-transparent opacity-30"
              style="width: 120%; left: 50%"
            ></div>
          </div>

          <!-- Step 2 -->
          <div class="relative">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold mb-6">
              2
            </div>
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
              Vul je informatie in
            </h3>
            <p class="text-gray-700">
              Voeg je herinneringen, wensen en belangrijke informatie toe aan je kluis.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="relative">
            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold mb-6">
              3
            </div>
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-3">
              Deel met nabestaanden
            </h3>
            <p class="text-gray-700">
              Geef vertrouwde contacten toegang en wees gerustgesteld dat alles klaar is.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-20 md:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="section-heading mb-4">Eenvoudige prijzen</h2>
          <p class="section-subtitle">
            Kies het plan dat het beste bij jou past
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Free Plan -->
          <div class="glass-card border-2 border-gray-200 hover:border-primary-300">
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-2">
              Gratis
            </h3>
            <p class="text-sm text-gray-600 mb-6">Voor beginners</p>
            <div class="text-3xl font-bold text-gray-900 mb-6">
              €0<span class="text-sm text-gray-600">/maand</span>
            </div>
            <ul class="space-y-3 mb-8 text-sm text-gray-700">
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Basis voorbereiding
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                1 vertrouwde contact
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                5 GB opslag
              </li>
            </ul>
            <button class="w-full btn-secondary">
              Gratis starten
            </button>
          </div>

          <!-- Pro Plan -->
          <div class="glass-card border-2 border-primary-300 relative">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Populair
            </div>
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-2">
              Pro
            </h3>
            <p class="text-sm text-gray-600 mb-6">Voor families</p>
            <div class="text-3xl font-bold text-gray-900 mb-6">
              €4.99<span class="text-sm text-gray-600">/maand</span>
            </div>
            <ul class="space-y-3 mb-8 text-sm text-gray-700">
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Alles uit Gratis
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Onbeperkte contacten
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                50 GB opslag
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Prioriteit support
              </li>
            </ul>
            <button class="w-full btn-primary">
              Nu upgraden
            </button>
          </div>

          <!-- Premium Plan -->
          <div class="glass-card border-2 border-gray-200 hover:border-primary-300">
            <h3 class="text-xl font-heading font-bold text-gray-900 mb-2">
              Premium
            </h3>
            <p class="text-sm text-gray-600 mb-6">Voor professionals</p>
            <div class="text-3xl font-bold text-gray-900 mb-6">
              €9.99<span class="text-sm text-gray-600">/maand</span>
            </div>
            <ul class="space-y-3 mb-8 text-sm text-gray-700">
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Alles uit Pro
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                500 GB opslag
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Video tutorials
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                1-op-1 coaching
              </li>
            </ul>
            <button class="w-full btn-secondary">
              Probeer Premium
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="section-heading mb-6 text-white">
          Klaar om te beginnen?
        </h2>
        <p class="text-xl text-white/90 mb-8 leading-relaxed">
          Begin vandaag nog met het plannen van je erfenis. Het kost minder dan 5 minuten.
        </p>
        <button class="btn-primary text-lg">
          Maak gratis account aan
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Page metadata
definePageMeta({
  layout: 'default',
})
</script>
