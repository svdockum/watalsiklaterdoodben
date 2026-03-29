<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 260 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Wat als ik later dood ben"
    role="img"
  >
    <!-- Vertical bar -->
    <rect x="0" y="0" width="20" height="52" rx="7" :fill="barColor" />

    <!-- Logo text: line 1 -->
    <text
      x="30"
      y="22"
      font-family="'Special Gothic Expanded One', sans-serif"
      font-size="19"
      font-weight="400"
      letter-spacing="0.5"
      :fill="textColor"
    >WAT ALS IK</text>

    <!-- Logo text: line 2 -->
    <text
      x="30"
      y="47"
      font-family="'Special Gothic Expanded One', sans-serif"
      font-size="19"
      font-weight="400"
      letter-spacing="0.5"
      :fill="textColor"
    >LATER DOOD BEN...</text>
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'light' | 'dark'
  width?: number | string
  height?: number | string
}>(), {
  variant: 'light',
  width: 260,
  height: 52,
})

const barColor = computed(() => props.variant === 'dark' ? '#0f1c24' : '#ffffff')
const textColor = computed(() => props.variant === 'dark' ? '#0f1c24' : '#ffffff')
</script>
