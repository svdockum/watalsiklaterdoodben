<template>
  <div class="min-h-screen flex bg-[#FAF8F5]">

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed top-0 left-0 h-full z-40 flex flex-col bg-[#0f1c24] transition-all duration-300',
        sidebarOpen ? 'w-64' : 'w-16'
      ]"
    >
      <!-- Sidebar header / Logo -->
      <div class="flex items-center gap-3 px-4 py-5 border-b border-white/[0.06] min-h-[72px]">
        <div class="w-[18px] h-[46px] bg-white rounded-[3px] flex-shrink-0"></div>
        <Transition name="fade">
          <span v-if="sidebarOpen" class="logo-text text-white text-[14px] uppercase leading-[1.2] tracking-[0.5px]">
            Wat als ik<br>later dood ben...
          </span>
        </Transition>
      </div>

      <!-- Nav items -->
      <nav class="flex-grow py-4 overflow-y-auto overflow-x-hidden">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :title="!sidebarOpen ? item.label : undefined"
          class="sidebar-link group"
          active-class="sidebar-link-active"
        >
          <span class="sidebar-icon flex-shrink-0" v-html="item.icon"></span>
          <Transition name="fade">
            <span v-if="sidebarOpen" class="text-[14px] font-semibold whitespace-nowrap">{{ item.label }}</span>
          </Transition>
        </NuxtLink>
      </nav>

      <!-- Sidebar footer -->
      <div class="border-t border-white/[0.06] px-4 py-4">
        <!-- Toggle button -->
        <button
          @click="sidebarOpen = !sidebarOpen"
          class="flex items-center gap-3 w-full text-white/40 hover:text-white transition-colors py-2"
          :title="sidebarOpen ? 'Inklappen' : 'Uitklappen'"
        >
          <span class="flex-shrink-0 w-5 h-5 flex items-center justify-center">
            <svg v-if="sidebarOpen" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7M4 12h16"/></svg>
            <svg v-else width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 12h14"/></svg>
          </span>
          <Transition name="fade">
            <span v-if="sidebarOpen" class="text-[13px] font-semibold whitespace-nowrap">Inklappen</span>
          </Transition>
        </button>

        <!-- User -->
        <div class="flex items-center gap-3 mt-3">
          <div class="w-8 h-8 rounded-full bg-[#2C5F7C] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0">
            AN
          </div>
          <Transition name="fade">
            <div v-if="sidebarOpen" class="overflow-hidden">
              <p class="text-white text-[13px] font-semibold leading-none whitespace-nowrap">Anton Naam</p>
              <p class="text-white/40 text-[11px] mt-0.5 whitespace-nowrap">anton@email.nl</p>
            </div>
          </Transition>
        </div>

        <!-- Logout -->
        <button
          class="flex items-center gap-3 w-full text-white/30 hover:text-white/60 transition-colors py-2 mt-2"
          title="Uitloggen"
          @click="handleLogout"
        >
          <span class="flex-shrink-0 w-5 h-5 flex items-center justify-center">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"/></svg>
          </span>
          <Transition name="fade">
            <span v-if="sidebarOpen" class="text-[13px] whitespace-nowrap">Uitloggen</span>
          </Transition>
        </button>
      </div>

    </aside>

    <!-- Main content area -->
    <div
      :class="[
        'flex-grow flex flex-col min-h-screen transition-all duration-300',
        sidebarOpen ? 'ml-64' : 'ml-16'
      ]"
    >
      <!-- Top bar -->
      <header class="bg-white/80 backdrop-blur-sm border-b border-[#e0ddd8] px-8 py-4 flex items-center justify-between sticky top-0 z-30">
        <div class="flex items-center gap-3">
          <!-- Mobile sidebar toggle -->
          <button
            class="lg:hidden p-2 text-[#636E72] hover:text-[#0f1c24] transition-colors"
            @click="sidebarOpen = !sidebarOpen"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <h1 class="text-[15px] font-bold text-[#0f1c24] uppercase tracking-[1.5px] font-[Anton_SC]">Dashboard</h1>
        </div>
        <div class="flex items-center gap-3">
          <button class="p-2 text-[#636E72] hover:text-[#0f1c24] transition-colors rounded-lg hover:bg-[#FAF8F5]">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
          </button>
          <div class="w-8 h-8 rounded-full bg-[#2C5F7C] flex items-center justify-center text-white text-[12px] font-bold cursor-pointer">
            AN
          </div>
        </div>
      </header>

      <!-- Scrollable content -->
      <main class="flex-grow p-8 overflow-y-auto">
        <slot />
      </main>
    </div>

  </div>
</template>

<script setup lang="ts">
const sidebarOpen = ref(true)

const navItems = [
  {
    to: '/dashboard',
    label: 'Overzicht',
    icon: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
  },
  {
    to: '/dashboard/herinneringen',
    label: 'Herinneringen',
    icon: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',
  },
  {
    to: '/dashboard/kluis',
    label: 'Digitale Kluis',
    icon: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>',
  },
  {
    to: '/dashboard/nabestaanden',
    label: 'Nabestaandenhulp',
    icon: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  },
  {
    to: '/dashboard/uitvaartwensen',
    label: 'Uitvaartwensen',
    icon: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>',
  },
  {
    to: '/dashboard/webshop',
    label: 'Webshop',
    icon: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>',
  },
  {
    to: '/dashboard/kennisbank',
    label: 'Kennisbank',
    icon: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>',
  },
  {
    to: '/dashboard/instellingen',
    label: 'Instellingen',
    icon: '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
  },
]

const handleLogout = () => {
  navigateTo('/login')
}
</script>

<style scoped>
.logo-text {
  font-family: 'Special Gothic Expanded One', sans-serif;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  margin: 2px 8px;
  border-radius: 10px;
  color: rgba(255,255,255,0.45);
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
  overflow: hidden;
}

.sidebar-link:hover {
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.85);
}

.sidebar-link.router-link-exact-active,
.sidebar-link-active {
  background: rgba(44, 95, 124, 0.5);
  color: white;
}

.sidebar-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
