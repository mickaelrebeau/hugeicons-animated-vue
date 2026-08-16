<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UngroupIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the ungroup separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.87px) rotate(-1.09deg)', 'translateY(0.49px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.52px, -1.31px)', 'translate(0.22px, -0.22px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M10.5 10H7.5C6.56936 10 6.10404 10 5.72746 9.87764C4.96636 9.63035 4.36965 9.03364 4.12236 8.27254C4 7.89596 4 7.43064 4 6.5C4 5.56936 4 5.10404 4.12236 4.72746C4.36965 3.96636 4.96636 3.36965 5.72746 3.12236C6.10404 3 6.56936 3 7.5 3H10.5C11.4306 3 11.896 3 12.2725 3.12236C13.0336 3.36965 13.6303 3.96636 13.8776 4.72746C14 5.10404 14 5.56936 14 6.5C14 7.43064 14 7.89596 13.8776 8.27254C13.6303 9.03364 13.0336 9.63035 12.2725 9.87764C11.896 10 11.4306 10 10.5 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 6.5px' }" />
            <motion.path d="M16.5 21H13.5C12.5694 21 12.104 21 11.7275 20.8776C10.9664 20.6303 10.3697 20.0336 10.1224 19.2725C10 18.896 10 18.4306 10 17.5C10 16.5694 10 16.104 10.1224 15.7275C10.3697 14.9664 10.9664 14.3697 11.7275 14.1224C12.104 14 12.5694 14 13.5 14H16.5C17.4306 14 17.896 14 18.2725 14.1224C19.0336 14.3697 19.6303 14.9664 19.8776 15.7275C20 16.104 20 16.5694 20 17.5C20 18.4306 20 18.896 19.8776 19.2725C19.6303 20.0336 19.0336 20.6303 18.2725 20.8776C17.896 21 17.4306 21 16.5 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 17.5px' }" />
          </svg>
        </div>
</template>
