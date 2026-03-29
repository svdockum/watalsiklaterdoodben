<template>
  <div class="glass-card hover:scale-105 transition-transform duration-300">
    <div v-if="memory.image_url" class="mb-4 h-48 rounded-lg overflow-hidden bg-gray-100">
      <img
        :src="memory.image_url"
        :alt="memory.title"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="flex items-start justify-between mb-3">
      <h3 class="font-heading font-bold text-lg text-gray-900">
        {{ memory.title }}
      </h3>
      <span class="px-3 py-1 text-xs font-semibold text-white rounded-full" :class="categoryColor">
        {{ categoryLabel }}
      </span>
    </div>

    <p class="text-gray-700 text-sm line-clamp-3 mb-4">
      {{ memory.description }}
    </p>

    <p class="text-xs text-gray-500">
      {{ formatDateDutch(memory.created_at) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Memory } from '~/types'
import { formatDateDutch } from '~/utils/helpers'

interface Props {
  memory: Memory
}

const props = defineProps<Props>()

const categoryLabel = computed(() => {
  const labels: Record<string, string> = {
    voorbereiding: 'Voorbereiding',
    herinnering: 'Herinnering',
    nabestaanden: 'Nabestaanden',
  }
  return labels[props.memory.category] || props.memory.category
})

const categoryColor = computed(() => {
  const colors: Record<string, string> = {
    voorbereiding: 'bg-primary-500',
    herinnering: 'bg-secondary-500',
    nabestaanden: 'bg-accent-500',
  }
  return colors[props.memory.category] || 'bg-gray-500'
})
</script>
