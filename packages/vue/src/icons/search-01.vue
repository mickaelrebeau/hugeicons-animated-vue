<script setup lang="ts">
import { useAnimate, useReducedMotion } from 'motion-v'
import { useTemplateRef } from 'vue'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Search01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

const scope = useTemplateRef<HTMLElement>('scope')
const [, animate] = useAnimate()
const shouldReduceMotion = useReducedMotion()
let isPlaying = false

async function startAnimation() {
  if (shouldReduceMotion.value || isPlaying) return
  const target = scope.value?.querySelector<HTMLElement>('[data-search-icon]')
  if (!target) return
  isPlaying = true
  await animate(
    target,
    {
      transform: [
        'translate(0px, 0px) rotate(0deg) scale(1)',
        'translate(1.25px, -0.55px) rotate(14deg) scale(0.78)',
        'translate(0.4px, -0.8px) rotate(6deg) scale(0.76)',
        'translate(-0.65px, 0.25px) rotate(-8deg) scale(0.8)',
        'translate(-0.15px, 0.1px) rotate(-2.5deg) scale(1.08)',
        'translate(0px, 0px) rotate(0deg) scale(1)',
      ],
    },
    {
      duration: 1.24,
      times: [0, 0.32, 0.48, 0.64, 0.84, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  )
  isPlaying = false
}

function stopAnimation() {}

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div
    ref="scope"
    class="hia-icon"
    v-bind="$attrs"
    @mouseenter="startAnimation"
  >
    <span data-search-icon style="display: inline-flex; transform-origin: 11px 11px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="size"
        :height="size"
        viewBox="0 0 24 24"
        fill="none"
        overflow="visible"
      >
        <path
          d="M17 17L21 21"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </svg>
    </span>
  </div>
</template>
