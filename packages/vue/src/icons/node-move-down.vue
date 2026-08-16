<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NodeMoveDownIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the connected nodes receive the signal one after another
// generated from @hugeicons/core-free-icons
const wireVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: 'visible',
    transition: {
      duration: 0.47,
      ease: 'easeOut',
    },
  },
}

const nodeVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: (i: number) => ({
    transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.47, ease: 'easeInOut', delay: i * 0.12 },
  }),
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
            <motion.path d="M5.49902 7.99207V12.4876M5.49902 12.4876V13.9861C5.49902 16.8117 5.49902 18.2245 6.37746 19.1023C7.20252 19.9268 8.49991 19.977 10.9975 19.98M5.49902 12.4876H10.9975" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.25px 13.99px' }" />
            <motion.path d="M3.99944 1.99805H6.9986C8.81329 1.99805 8.99803 3.10688 8.99803 4.99507C8.99803 6.88327 8.81329 7.9921 6.9986 7.9921H3.99944C2.18475 7.9921 2 6.88327 2 4.99507C2 3.10688 2.18475 1.99805 3.99944 1.99805Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 5px' }" />
            <motion.path d="M10.998 12.4883C10.998 11.5464 10.998 11.0755 11.2909 10.7828C11.5837 10.4902 12.0549 10.4902 12.9975 10.4902C13.94 10.4902 14.4113 10.4902 14.7041 10.7828C14.9969 11.0755 14.9969 11.5464 14.9969 12.4883C14.9969 13.4301 14.9969 13.9011 14.7041 14.1937C14.4113 14.4863 13.94 14.4863 12.9975 14.4863C12.0549 14.4863 11.5837 14.4863 11.2909 14.1937C10.998 13.9011 10.998 13.4301 10.998 12.4883Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 12.49px' }" />
            <motion.path d="M10.998 19.9804C10.998 19.0386 10.998 18.5676 11.2909 18.275C11.5837 17.9824 12.0549 17.9824 12.9975 17.9824C13.94 17.9824 14.4113 17.9824 14.7041 18.275C14.9969 18.5676 14.9969 19.0386 14.9969 19.9804C14.9969 20.9223 14.9969 21.3932 14.7041 21.6858C14.4113 21.9785 13.94 21.9785 12.9975 21.9785C12.0549 21.9785 11.5837 21.9785 11.2909 21.6858C10.998 21.3932 10.998 20.9223 10.998 19.9804Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 19.98px' }" />
            <motion.path d="M17.9883 20.0659L19.391 21.6331C19.8255 22.0552 20.0884 22.1308 20.438 21.7768L22.0006 20.0782M20.0075 21.9854V13.864C19.9907 13.324 19.6313 12.0995 18.0103 11.9766" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.99px 17.05px' }" />
          </svg>
        </div>
</template>
