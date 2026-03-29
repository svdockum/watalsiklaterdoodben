<template>
  <div class="min-h-screen flex flex-col bg-[#FAF8F5]">
    <!-- Navigation Bar -->
    <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2">
            <div class="flex items-baseline">
              <span class="font-heading font-bold text-lg text-primary-600">
                wat als ik later
              </span>
              <span class="ml-1 font-heading font-bold text-lg text-secondary-600">
                dood ben
              </span>
            </div>
            <span class="font-sans font-bold text-primary-600">.nl</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-primary-600 font-semibold transition-colors"
            >
              Voorbereiding
            </NuxtLink>
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-primary-600 font-semibold transition-colors"
            >
              Herinneringen
            </NuxtLink>
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-primary-600 font-semibold transition-colors"
            >
              Nabestaanden
            </NuxtLink>
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-primary-600 font-semibold transition-colors"
            >
              Webshop
            </NuxtLink>
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-primary-600 font-semibold transition-colors"
            >
              Kennisbank
            </NuxtLink>
          </div>

          <!-- CTA Button -->
          <div class="flex items-center gap-4">
            <NuxtLink
              to="/signup"
              class="btn-primary text-sm"
            >
              Start gratis
            </NuxtLink>

            <!-- Mobile Menu Button -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg
                class="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="!mobileMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <transition name="slide">
          <div
            v-if="mobileMenuOpen"
            class="md:hidden pb-4 space-y-2 border-t border-gray-100"
          >
            <NuxtLink
              to="/"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Voorbereiding
            </NuxtLink>
            <NuxtLink
              to="/"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Herinneringen
            </NuxtLink>
            <NuxtLink
              to="/"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Nabestaanden
            </NuxtLink>
            <NuxtLink
              to="/"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Webshop
            </NuxtLink>
            <NuxtLink
              to="/"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Kennisbank
            </NuxtLink>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-primary-900 text-white py-12 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Platform Column -->
          <div>
            <h3 class="font-heading font-bold text-lg mb-4">Platform</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  Ondersteuning
                </a>
              </li>
            </ul>
          </div>

          <!-- Informatie Column -->
          <div>
            <h3 class="font-heading font-bold text-lg mb-4">Informatie</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  Hoe het werkt
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  Prijzen
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  Functies
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <!-- Juridisch Column -->
          <div>
            <h3 class="font-heading font-bold text-lg mb-4">Juridisch</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  Privacybeleid
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  Gebruiksvoorwaarden
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-accent-400 transition-colors">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-primary-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-primary-200 text-sm">
            &copy; 2024 Wat als ik later dood ben. Alle rechten voorbehouden.
          </p>
          <div class="flex gap-6 mt-4 md:mt-0">
            <a href="#" class="text-primary-200 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" class="text-primary-200 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" class="text-primary-200 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
