<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CursorMagicSelection03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the magic rays flare out from the pointer tip
// authored from scripts/authored
const raysVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.28px, 0.28px) scale(0.6)',
      'translate(-0.11px, -0.11px) scale(1.16)',
      'translate(0.01px, 0.01px) scale(0.98)',
      'translate(0.00px, 0.00px) scale(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: false,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <path d="M10.4654 19.0065L8.02099 11.9843L8.02098 11.9843C7.10172 9.34346 6.64208 8.02305 7.33296 7.3327C8.02385 6.64236 9.3453 7.10164 11.9882 8.02019L19.0012 10.4576C20.4673 10.9671 21.2003 11.2219 21.3585 11.7154C21.4021 11.8514 21.4172 11.9949 21.4027 12.1371C21.3503 12.6526 20.686 13.0536 19.3574 13.8556C18.5055 14.3698 18.0796 14.6269 17.966 15.0149C17.9339 15.1247 17.9201 15.2391 17.9253 15.3534C17.9436 15.7572 18.2964 16.1078 19.002 16.8091L21.3211 19.114L21.3211 19.114C21.6683 19.4591 21.8419 19.6316 21.9216 19.8246C22.0258 20.0772 22.0262 20.3606 21.9226 20.6134C21.8435 20.8066 21.6704 20.9796 21.3241 21.3256C20.9787 21.6708 20.806 21.8434 20.613 21.9224C20.3605 22.0259 20.0774 22.0259 19.8249 21.9224C19.6319 21.8434 19.4592 21.6708 19.1137 21.3256L19.1137 21.3256L16.786 18.9997C16.092 18.3062 15.7449 17.9595 15.3467 17.9387C15.2261 17.9324 15.1054 17.9471 14.99 17.9822C14.6084 18.0982 14.3552 18.5183 13.8487 19.3584L13.8487 19.3584C13.0566 20.6721 12.6606 21.329 12.1522 21.3868C12.0023 21.4038 11.8505 21.388 11.7073 21.3405C11.2217 21.1793 10.9696 20.455 10.4654 19.0065Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9 4V2M5 5L3.5 3.5M4 9H2M5 13L3.5 14.5M14.5 3.5L13 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="raysVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.3px 8.3px' }" />
          </svg>
        </div>
</template>
