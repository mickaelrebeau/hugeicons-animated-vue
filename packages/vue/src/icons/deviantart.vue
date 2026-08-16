<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DeviantartIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the deviantart loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.54px) scaleY(0.82)', 'translateY(-3.73px) scaleY(1.08)', 'translateY(0.55px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.72,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M18 2C18.8273 2 19 2.17267 19 3V6.13854C19 6.44216 18.9987 6.44633 18.8289 6.698L15.5528 11.5517C15.0898 12.2375 14.8584 12.5804 14.9994 12.8458C15.1404 13.1111 15.5541 13.1111 16.3816 13.1111H18C18.8273 13.1111 19 13.2838 19 14.1111V16.5556C19 17.3829 18.8273 17.5556 18 17.5556H12.5626C11.5215 17.5556 11.4872 17.5738 10.9048 18.4367L8.79735 21.5594C8.50616 21.9909 8.48899 22 7.96846 22H6C5.17267 22 5 21.8273 5 21V17.8615C5 17.5578 5.00128 17.5537 5.17114 17.302L8.44724 12.4483C8.91018 11.7625 9.14164 11.4196 9.00062 11.1542C8.85959 10.8889 8.44585 10.8889 7.61838 10.8889H6C5.17267 10.8889 5 10.7162 5 9.88889V7.44445C5 6.61711 5.17267 6.44444 6 6.44444H11.4374C12.4785 6.44444 12.5128 6.4262 13.0952 5.56326L15.2027 2.44059C15.4938 2.00912 15.511 2 16.0315 2H18Z" stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
