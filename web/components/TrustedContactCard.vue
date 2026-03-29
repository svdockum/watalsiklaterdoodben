<template>
  <div class="glass-card">
    <div class="flex items-start justify-between mb-4">
      <div>
        <h3 class="font-heading font-bold text-lg text-gray-900">
          {{ contact.name }}
        </h3>
        <p class="text-sm text-gray-600">{{ contact.relationship }}</p>
      </div>
      <button
        @click="emit('remove')"
        class="p-2 text-gray-400 hover:text-red-500 transition-colors"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div class="space-y-2 mb-4">
      <div class="flex items-center gap-2 text-sm text-gray-700">
        <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path
            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
          />
        </svg>
        {{ contact.email }}
      </div>
      <div v-if="contact.phone" class="flex items-center gap-2 text-sm text-gray-700">
        <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.807 2.368 3.96 1.153 1.153 2.695 1.95 3.96 2.368l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        {{ contact.phone }}
      </div>
    </div>

    <div class="flex items-center justify-between pt-4 border-t border-gray-200">
      <span class="text-xs font-semibold text-gray-600">Toegangsniveau:</span>
      <span class="px-3 py-1 text-xs font-semibold rounded-full" :class="accessLevelColor">
        {{ accessLevelLabel }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TrustedContact } from '~/types'

interface Props {
  contact: TrustedContact
}

interface Emit {
  (e: 'remove'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const accessLevelLabel = computed(() => {
  const labels: Record<string, string> = {
    view: 'Alleen weergave',
    edit: 'Bewerking',
    full: 'Volledige toegang',
  }
  return labels[props.contact.access_level] || props.contact.access_level
})

const accessLevelColor = computed(() => {
  const colors: Record<string, string> = {
    view: 'bg-blue-100 text-blue-800',
    edit: 'bg-yellow-100 text-yellow-800',
    full: 'bg-green-100 text-green-800',
  }
  return colors[props.contact.access_level] || 'bg-gray-100 text-gray-800'
})
</script>
