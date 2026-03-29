<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-16 bg-[#FAF8F5]">

    <!-- Card -->
    <div class="w-full max-w-[420px]">

      <!-- Logo -->
      <div class="flex items-end gap-3 justify-center mb-10">
        <div class="w-4 h-11 bg-[#0f1c24] rounded-[3px] flex-shrink-0"></div>
        <span class="logo-text text-[18px] text-[#0f1c24] uppercase leading-[1.15] tracking-[0.5px]">
          Wat als ik<br>later dood ben...
        </span>
      </div>

      <!-- Login box -->
      <div class="bg-white rounded-[20px] p-10 shadow-[0_4px_40px_rgba(15,28,36,0.08)]">

        <div class="mb-8">
          <h1 class="font-[Anton_SC] text-[32px] text-[#0f1c24] uppercase leading-none mb-2">Welkom terug</h1>
          <p class="text-[#636E72] text-[15px]">Log in op je account om verder te gaan.</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">

          <!-- Email -->
          <div>
            <label for="email" class="block text-[13px] font-bold text-[#0f1c24] uppercase tracking-[1px] mb-2">
              E-mailadres
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              placeholder="jouw@email.nl"
              class="w-full px-4 py-3 bg-[#FAF8F5] border border-[#e0ddd8] rounded-[10px] text-[15px] text-[#2D3436] placeholder-[#b2aba0] focus:outline-none focus:border-[#2C5F7C] focus:ring-2 focus:ring-[#2C5F7C]/20 transition-all"
            />
          </div>

          <!-- Password -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <label for="password" class="block text-[13px] font-bold text-[#0f1c24] uppercase tracking-[1px]">
                Wachtwoord
              </label>
              <NuxtLink to="/forgot-password" class="text-[13px] text-[#2C5F7C] font-semibold hover:underline">
                Vergeten?
              </NuxtLink>
            </div>
            <input
              id="password"
              v-model="formData.password"
              type="password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3 bg-[#FAF8F5] border border-[#e0ddd8] rounded-[10px] text-[15px] text-[#2D3436] placeholder-[#b2aba0] focus:outline-none focus:border-[#2C5F7C] focus:ring-2 focus:ring-[#2C5F7C]/20 transition-all"
            />
          </div>

          <!-- Error message -->
          <div v-if="errorMessage" class="p-4 bg-red-50 border border-red-200 rounded-[10px]">
            <p class="text-sm text-red-700">{{ errorMessage }}</p>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-4 bg-[#0f1c24] text-white font-extrabold text-[15px] rounded-[12px] transition-all duration-300 hover:bg-[#1a2f3d] hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLoading ? 'Even geduld...' : 'Inloggen' }}
          </button>

        </form>

        <!-- Wachtwoord vergeten (standalone link below form) -->
        <div class="mt-6 text-center">
          <NuxtLink to="/forgot-password" class="text-[14px] text-[#636E72] hover:text-[#2C5F7C] transition-colors">
            Wachtwoord vergeten?
          </NuxtLink>
        </div>

        <!-- Divider -->
        <div class="my-7 flex items-center gap-4">
          <div class="flex-grow border-t border-[#e0ddd8]"></div>
          <span class="text-[13px] text-[#95A5A6]">of</span>
          <div class="flex-grow border-t border-[#e0ddd8]"></div>
        </div>

        <!-- Sign up link -->
        <p class="text-center text-[15px] text-[#636E72]">
          Nog geen account?
          <NuxtLink to="/signup" class="text-[#2C5F7C] font-bold hover:underline ml-1">
            Laat iets moois achter
          </NuxtLink>
        </p>

      </div>

      <!-- Footer note -->
      <p class="text-center text-[12px] text-[#95A5A6] mt-6 leading-[1.6]">
        Door in te loggen ga je akkoord met onze
        <a href="#" class="text-[#636E72] hover:underline">gebruiksvoorwaarden</a>
        en ons
        <a href="#" class="text-[#636E72] hover:underline">privacybeleid</a>.
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const formData = reactive({
  email: '',
  password: '',
})

const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    // Placeholder login logic — navigate directly to dashboard
    await new Promise(resolve => setTimeout(resolve, 600))
    navigateTo('/dashboard')
  } catch (err) {
    console.error('Login error:', err)
    errorMessage.value = 'Er is iets misgegaan. Probeer het later opnieuw.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.logo-text {
  font-family: 'Special Gothic Expanded One', sans-serif;
}
</style>
