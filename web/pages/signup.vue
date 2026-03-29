<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary-50 to-secondary-50">
    <div class="w-full max-w-md">
      <!-- Card -->
      <div class="glass-card">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-heading font-bold text-gray-900 mb-2">
            Gratis beginnen
          </h1>
          <p class="text-gray-600">
            Maak je account in minder dan 2 minuten
          </p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSignUp" class="space-y-5">
          <!-- Full Name Input -->
          <div>
            <label for="fullName" class="block text-sm font-semibold text-gray-900 mb-2">
              Volledige naam
            </label>
            <input
              id="fullName"
              v-model="formData.fullName"
              type="text"
              required
              placeholder="Je naam"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

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
              placeholder="Minstens 8 karakters"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
            <p class="text-xs text-gray-600 mt-2">
              Minstens 8 karakters, met letters en nummers
            </p>
          </div>

          <!-- Confirm Password Input -->
          <div>
            <label for="confirmPassword" class="block text-sm font-semibold text-gray-900 mb-2">
              Bevestig wachtwoord
            </label>
            <input
              id="confirmPassword"
              v-model="formData.confirmPassword"
              type="password"
              required
              placeholder="Herhaal je wachtwoord"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          <!-- Terms Checkbox -->
          <div class="flex items-start">
            <input
              id="terms"
              v-model="formData.agreedToTerms"
              type="checkbox"
              required
              class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 mt-1"
            />
            <label for="terms" class="ml-3 text-sm text-gray-700">
              Ik ga akkoord met de
              <a href="#" class="text-primary-600 hover:underline font-semibold">gebruiksvoorwaarden</a>
              en
              <a href="#" class="text-primary-600 hover:underline font-semibold">privacybeleid</a>
            </label>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-sm text-red-800">{{ errorMessage }}</p>
          </div>

          <!-- Success Message -->
          <div v-if="successMessage" class="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p class="text-sm text-green-800">{{ successMessage }}</p>
          </div>

          <!-- Loading State -->
          <div v-if="isLoading" class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p class="text-sm text-blue-800">Je account wordt aangemaakt...</p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="isLoading || !formData.agreedToTerms"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLoading ? 'Even moment...' : 'Account aanmaken' }}
          </button>
        </form>

        <!-- Login Link -->
        <div class="mt-6 pt-6 border-t border-gray-200 text-center">
          <p class="text-gray-700">
            Heb je al een account?
            <NuxtLink
              to="/login"
              class="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Log in
            </NuxtLink>
          </p>
        </div>
      </div>

      <!-- Footer Note -->
      <p class="text-center text-xs text-gray-600 mt-6">
        Je gegevens worden beveiligd met 256-bit versleuteling
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})

const { signUp } = useSupabaseAuth()

const formData = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreedToTerms: false,
})

const isLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const handleSignUp = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  // Validation
  if (formData.password !== formData.confirmPassword) {
    errorMessage.value = 'Wachtwoorden komen niet overeen'
    return
  }

  if (formData.password.length < 8) {
    errorMessage.value = 'Wachtwoord moet minstens 8 karakters lang zijn'
    return
  }

  isLoading.value = true

  try {
    const { user, error } = await signUp(
      formData.email,
      formData.password,
      formData.fullName,
    )

    if (error) {
      errorMessage.value = 'Dit e-mailadres is al in gebruik. Probeer in te loggen.'
      return
    }

    if (user) {
      successMessage.value = 'Account aangemaakt! Controleer je e-mail om je account te bevestigen.'
      // Redirect after success
      setTimeout(() => {
        navigateTo('/login')
      }, 2000)
    }
  } catch (err) {
    console.error('Sign up error:', err)
    errorMessage.value = 'Er is iets misgegaan. Probeer het later opnieuw.'
  } finally {
    isLoading.value = false
  }
}
</script>
