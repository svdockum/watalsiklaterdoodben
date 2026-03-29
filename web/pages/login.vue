<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
    <div class="w-full max-w-md">
      <!-- Card -->
      <div class="glass-card">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-heading font-bold text-gray-900 mb-2">
            Welkom terug
          </h1>
          <p class="text-gray-600">
            Log in op je account om verder te gaan
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email Input -->
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
              E-mailadres
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              placeholder="jouw@email.nl"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          <!-- Password Input -->
          <div>
            <label for="password" class="block text-sm font-semibold text-gray-900 mb-2">
              Wachtwoord
            </label>
            <input
              id="password"
              v-model="formData.password"
              type="password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          <!-- Remember Me -->
          <div class="flex items-center">
            <input
              id="remember"
              v-model="formData.rememberMe"
              type="checkbox"
              class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500"
            />
            <label for="remember" class="ml-2 text-sm text-gray-700">
              Onthoud mij
            </label>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-sm text-red-800">{{ errorMessage }}</p>
          </div>

          <!-- Loading State -->
          <div v-if="isLoading" class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p class="text-sm text-blue-800">Even geduld... je wordt ingelogd</p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLoading ? 'Even moment...' : 'Inloggen' }}
          </button>
        </form>

        <!-- Forgot Password -->
        <div class="mt-6 text-center">
          <NuxtLink
            to="/forgot-password"
            class="text-sm text-primary-600 hover:text-primary-700 font-semibold"
          >
            Wachtwoord vergeten?
          </NuxtLink>
        </div>

        <!-- Sign Up Link -->
        <div class="mt-6 pt-6 border-t border-gray-200 text-center">
          <p class="text-gray-700">
            Nog geen account?
            <NuxtLink
              to="/signup"
              class="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Meld je aan
            </NuxtLink>
          </p>
        </div>

        <!-- Social Login -->
        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Of log in met</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              class="w-full inline-flex justify-center py-2 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
            >
              Google
            </button>
            <button
              type="button"
              class="w-full inline-flex justify-center py-2 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
            >
              Apple
            </button>
          </div>
        </div>
      </div>

      <!-- Footer Note -->
      <p class="text-center text-xs text-gray-600 mt-6">
        Door in te loggen ga je akkoord met onze
        <a href="#" class="text-primary-600 hover:underline">gebruiksvoorwaarden</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})

const { signIn } = useSupabaseAuth()

const formData = reactive({
  email: '',
  password: '',
  rememberMe: false,
})

const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const { session, error } = await signIn(formData.email, formData.password)

    if (error) {
      errorMessage.value = 'E-mailadres of wachtwoord onjuist. Probeer het opnieuw.'
      return
    }

    if (session) {
      // Redirect to dashboard after successful login
      navigateTo('/dashboard')
    }
  } catch (err) {
    console.error('Login error:', err)
    errorMessage.value = 'Er is iets misgegaan. Probeer het later opnieuw.'
  } finally {
    isLoading.value = false
  }
}
</script>
