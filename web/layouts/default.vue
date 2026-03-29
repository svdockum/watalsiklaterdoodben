<template>
  <div class="min-h-screen flex flex-col" style="background: #FAF8F5;">

    <!-- Fixed Navigation -->
    <nav
      ref="navEl"
      :class="[
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-400',
        scrolled
          ? 'bg-[rgba(250,248,245,0.95)] backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.05)] py-[14px] px-10'
          : 'py-5 px-10'
      ]"
    >
      <div class="max-w-[1300px] mx-auto flex items-center justify-between">

        <!-- Logo -->
        <NuxtLink to="/" class="no-underline">
          <AppLogo :variant="scrolled ? 'dark' : 'light'" />
        </NuxtLink>

        <!-- Desktop Nav Links -->
        <ul class="hidden md:flex gap-1 list-none items-center m-0 p-0">
          <li>
            <a
              href="#wat"
              :class="[
                'no-underline font-bold text-[16px] px-4 py-2 rounded-lg transition-all duration-200 tracking-[0.5px]',
                scrolled ? 'text-[#2D3436] hover:text-[#0f1c24]' : 'text-white/70 hover:text-white'
              ]"
            >Wat</a>
          </li>
          <li>
            <a
              href="#features"
              :class="[
                'no-underline font-bold text-[16px] px-4 py-2 rounded-lg transition-all duration-200 tracking-[0.5px]',
                scrolled ? 'text-[#2D3436] hover:text-[#0f1c24]' : 'text-white/70 hover:text-white'
              ]"
            >Mogelijkheden</a>
          </li>
          <li>
            <a
              href="#kosten"
              :class="[
                'no-underline font-bold text-[16px] px-4 py-2 rounded-lg transition-all duration-200 tracking-[0.5px]',
                scrolled ? 'text-[#2D3436] hover:text-[#0f1c24]' : 'text-white/70 hover:text-white'
              ]"
            >Wat kost dit?</a>
          </li>
          <li>
            <a
              href="/app"
              :class="[
                'inline-flex items-center gap-[7px] px-5 py-[10px] border-[1.5px] rounded-[10px] font-bold no-underline transition-all duration-200',
                scrolled
                  ? 'border-[rgba(15,28,36,0.3)] text-[#0f1c24] hover:border-[#0f1c24]'
                  : 'border-white/35 text-white/85 hover:border-white hover:text-white'
              ]"
            >
              Download app
            </a>
          </li>
          <li class="ml-4">
            <NuxtLink
              to="/signup"
              :class="[
                'inline-flex items-center gap-2 no-underline font-extrabold px-6 py-[10px] rounded-[10px] transition-all duration-200',
                scrolled
                  ? 'bg-[#0f1c24] text-white hover:bg-[#1a2f3d]'
                  : 'bg-white text-[#0f1c24] hover:bg-[#D4A857]'
              ]"
            >Laat iets moois achter <span style="font-size: 28px; line-height: 1; position: relative; top: -2px;">›</span></NuxtLink>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg transition-colors"
          :class="scrolled ? 'text-[#0f1c24]' : 'text-white'"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div
          v-if="mobileMenuOpen"
          class="md:hidden bg-[rgba(250,248,245,0.98)] backdrop-blur-md border-t border-gray-100 px-6 py-4 space-y-2"
        >
          <a href="#wat" class="block py-2 font-bold text-[#2D3436]" @click="mobileMenuOpen = false">Over</a>
          <a href="#features" class="block py-2 font-bold text-[#2D3436]" @click="mobileMenuOpen = false">Mogelijkheden</a>
          <a href="#kosten" class="block py-2 font-bold text-[#2D3436]" @click="mobileMenuOpen = false">Wat kost dit?</a>
          <a href="/app" class="block py-2 font-bold text-[#2D3436]">Download app</a>
          <NuxtLink to="/signup" class="block mt-3 text-center py-3 bg-[#0f1c24] text-white font-extrabold rounded-[10px]" @click="mobileMenuOpen = false">Laat iets moois achter <span style="font-size: 28px; line-height: 1; vertical-align: middle;">›</span></NuxtLink>
        </div>
      </Transition>

    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-[#0f1c24] pt-[60px] pb-8 px-10 text-white/35">
      <div class="max-w-[1300px] mx-auto flex justify-between items-start gap-10 pb-10 border-b border-white/[0.06] mb-6 flex-wrap">

        <!-- Brand -->
        <div>
          <AppLogo variant="light" class="mb-2" />
          <p class="text-[14px] max-w-[260px] leading-[1.6]">Een plek om ervoor te zorgen dat het goed komt.</p>
        </div>

        <!-- Footer Links -->
        <div class="flex gap-12 flex-wrap">
          <div>
            <h4 class="font-[Anton_SC] text-[12px] uppercase tracking-[2px] text-white mb-3">Informatie</h4>
            <NuxtLink to="/" class="block text-white/45 no-underline text-[14px] font-semibold mb-2 hover:text-white transition-colors">Over ons</NuxtLink>
            <NuxtLink to="/" class="block text-white/45 no-underline text-[14px] font-semibold mb-2 hover:text-white transition-colors">Contact</NuxtLink>
          </div>
          <div>
            <h4 class="font-[Anton_SC] text-[12px] uppercase tracking-[2px] text-white mb-3">Juridisch</h4>
            <NuxtLink to="/" class="block text-white/45 no-underline text-[14px] font-semibold mb-2 hover:text-white transition-colors">Privacy</NuxtLink>
            <NuxtLink to="/" class="block text-white/45 no-underline text-[14px] font-semibold mb-2 hover:text-white transition-colors">Algemene voorwaarden</NuxtLink>
          </div>
        </div>

      </div>
      <div class="max-w-[1300px] mx-auto flex justify-between text-[12px]">
        <span>&copy; {{ new Date().getFullYear() }} Wat als ik later dood ben - Van Dockum Photography - <a href="https://vandockum.nl" target="_blank" rel="noopener noreferrer" class="text-white/45 no-underline text-[14px] font-semibold mb-2 hover:text-white transition-colors">vandockum.nl</a></span>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 80
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.logo-text {
  font-family: 'Special Gothic Expanded One', sans-serif;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 400px;
}
</style>
