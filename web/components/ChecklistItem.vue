<template>
  <div class="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
    <input
      type="checkbox"
      :checked="item.completed"
      @change="emit('toggle')"
      class="w-5 h-5 mt-1 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
    />

    <div class="flex-1">
      <h4 :class="['font-semibold text-gray-900', item.completed && 'line-through text-gray-500']">
        {{ item.title }}
      </h4>
      <p v-if="item.description" class="text-sm text-gray-600 mt-1">
        {{ item.description }}
      </p>
      <div class="flex items-center gap-3 mt-2 text-xs text-gray-500">
        <span class="px-2 py-1 bg-gray-100 rounded">{{ categoryLabel }}</span>
        <span v-if="item.due_date">{{ formatDateDutch(item.due_date) }}</span>
      </div>
    </div>

    <button
      @click="emit('delete')"
      class="p-2 text-gray-400 hover:text-red-500 transition-colors"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ChecklistItem } from '~/types'
import { formatDateDutch } from '~/utils/helpers'

interface Props {
  item: ChecklistItem
}

interface Emit {
  (e: 'toggle'): void
  (e: 'delete'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const categoryLabel = computed(() => {
  const labels: Record<string, string> = {
    legal: 'Juridisch',
    financial: 'Financieel',
    property: 'Eigendom',
    digital: 'Digitaal',
    personal: 'Persoonlijk',
  }
  return labels[props.item.category] || props.item.category
})
</script>
