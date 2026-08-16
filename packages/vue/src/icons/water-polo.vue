<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WaterPoloIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the water polo move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.57px) rotate(-1.85deg)', 'translateY(0.37px) rotate(0.65deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M2 21.1925C2.68524 22.2429 3.57104 22.2429 4.27299 21.1925C6.52985 17.7424 8.67954 23.6741 10.273 21.2314C12.703 17.5711 14.4508 23.9193 16.273 21.1925C18.6492 17.5599 20.1295 23.5753 22 21.5832" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.03px 17.06px' }" />
            <motion.path d="M17.6184 17.0101C18.3131 16.4058 19.9447 14.7124 20.3627 12.0914C20.7506 10.4811 20.5232 6.90407 17.9129 4.44764C16.1746 2.71043 11.565 0.185155 6.5503 3.9817C5.54789 4.78959 3.71926 7.0134 3.51106 9.93536C3.30286 12.8573 4.57349 14.8475 5.22063 15.6302C5.53845 15.974 5.6944 16.1755 6.02643 16.4761C6.31267 16.7353 6.43154 16.8203 6.66416 17.0076C8.07023 17.0604 11.2393 16.4052 13.3709 15.0442C13.8436 14.8221 15.0503 14.0541 16.0332 12.6903M4.17227 12.8032C5.35359 13.2754 8.38935 13.831 11.3207 11.1072M11.5404 10.8749C12.976 10.5732 16.5886 10.8749 18.8331 14.8069M7.6968 3.48864C6.58965 5.43316 6.33215 10.6018 7.92835 12.5251M11.6466 10.8894C10.8934 9.05317 10.3472 4.55941 12.095 2.24885M11.5124 6.34144C13.2591 6.07734 17.575 6.92218 20.4894 10.5015" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.03px 17.06px' }" />
          </svg>
        </div>
</template>
