<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlignKeyObjectIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the rows slide toward the named alignment edge
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.46, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M20 5.98971V11.9771M18 3.9939H6M10 19.9604H6M4 17.9646V5.98971" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 11.98px' }" />
            <motion.path d="M22 3.99386C22 5.09611 21.1046 5.98967 20 5.98967C18.8954 5.98967 18 5.09611 18 3.99386C18 2.8916 18.8954 1.99805 20 1.99805C21.1046 1.99805 22 2.8916 22 3.99386Z" stroke="currentColor" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 3.99px' }" />
            <motion.path d="M6 3.99386C6 5.09611 5.10457 5.98967 4 5.98967C2.89543 5.98967 2 5.09611 2 3.99386C2 2.8916 2.89543 1.99805 4 1.99805C5.10457 1.99805 6 2.8916 6 3.99386Z" stroke="currentColor" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 3.99px' }" />
            <motion.path d="M6 19.9604C6 21.0627 5.10457 21.9562 4 21.9562C2.89543 21.9562 2 21.0627 2 19.9604C2 18.8581 2.89543 17.9646 4 17.9646C5.10457 17.9646 6 18.8581 6 19.9604Z" stroke="currentColor" stroke-width="1.5" :variants="rowVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 19.96px' }" />
            <motion.path d="M15.5378 19.4119L17.9999 16.7963M17.9999 16.7963L19.4857 15.2075C19.668 15.0626 20.0617 14.8178 20.5935 15.3049C21.0741 15.7452 21.7048 16.4303 21.9883 16.7504M17.9999 16.7963L19.504 18.4327M15.9981 20.4863C15.9981 21.3231 15.3243 22.0014 14.4932 22.0014C13.6621 22.0014 12.9883 21.3231 12.9883 20.4863C12.9883 19.6495 13.6621 18.9712 14.4932 18.9712C15.3243 18.9712 15.9981 19.6495 15.9981 20.4863Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '21.99px 18.41px' }" />
          </svg>
        </div>
</template>
