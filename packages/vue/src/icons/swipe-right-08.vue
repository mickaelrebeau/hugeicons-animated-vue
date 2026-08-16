<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SwipeRight08Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the gesture gathers momentum, crosses the surface, and eases out
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.07px) rotate(3.84deg)', 'translateX(-0.38px) rotate(-0.96deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M20.9981 4.49541H15.0078M20.9981 4.49541C20.9981 3.79595 19.007 2.48916 18.5021 1.99817M20.9981 4.49541C20.9981 5.19487 19.007 6.50167 18.5021 6.99265" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.72px 22.25px' }" />
            <motion.path d="M6.53737 14.4455V9.97574M6.53737 9.97574V4.453C6.53737 3.63227 7.22176 2.97083 8.04303 2.97083C8.8643 2.97083 9.51145 3.63227 9.51145 4.453V8.45447M6.53737 9.97574C5.22055 11.1682 3.80353 12.6747 3.6127 13.0606C2.72482 14.4112 2.81788 15.0651 3.80737 16.7178C4.6478 18.1215 5.77805 19.6793 5.84403 19.754C6.51555 20.5145 6.38203 20.5147 7.35536 21.2288C8.22451 21.8316 10.0273 22.2517 14.2538 21.8316C17.6969 21.3001 18.5218 18.2966 18.5039 16.8613V13.3167C18.7183 10.3706 17.4861 10.2376 15.2487 9.94765M9.51145 8.45447V10.9815M9.51145 8.45447C10.0698 7.54453 12.0977 7.91226 12.4929 9.63056M12.5287 10.9775V9.97574C12.5287 9.89676 12.5247 9.81754 12.5135 9.73941M12.4929 9.63056C12.4946 9.63779 12.4962 9.64504 12.4978 9.65232C12.5042 9.68115 12.5094 9.7102 12.5135 9.73941M12.4929 9.63056C12.497 9.66557 12.5039 9.70186 12.5135 9.73941M12.4929 9.63056C12.3525 8.4329 15.3894 8.72486 15.513 10.8311V11.9759" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.72px 22.25px' }" />
          </svg>
        </div>
</template>
