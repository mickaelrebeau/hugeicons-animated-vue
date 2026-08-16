<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiFolder02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the folder tips open and the chip inside runs its pass
// authored from scripts/authored
const folderVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-1.6deg)', 'rotate(0.4deg)', 'rotate(0deg)'],
    transition: { duration: 0.62, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const chipVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.88)', 'scale(1.07)', 'scale(1)'],
    opacity: [1, 0.62, 1, 1],
    transition: { duration: 0.56, delay: 0.12, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M7 6.00085H16.75C18.8567 6.00085 19.91 6.00085 20.6667 6.50644C20.9943 6.72532 21.2755 7.00657 21.4944 7.33414C22 8.09081 22 9.14416 22 11.2509C22 14.7621 22 16.5176 21.1573 17.7788C20.975 18.0517 20.7666 18.3054 20.5355 18.5364M3.46447 18.5364C2 17.072 2 14.7149 2 10.0009V6.94512C2 5.12865 2 4.22041 2.38032 3.53891C2.65142 3.05312 3.05227 2.65227 3.53806 2.38117C4.21956 2.00085 5.1278 2.00085 6.94427 2.00085C8.10802 2.00085 8.6899 2.00085 9.19926 2.19186C10.3622 2.62797 10.8418 3.68443 11.3666 4.73398L12 6.00085" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 18.5px' }" />
            <motion.path d="M10.4499 12.0009V13.9799M6.96289 15.5012H9.01487M14.986 15.5012H17.0379M14.986 18.4745H17.0379M6.96289 18.4745H9.01487M10.4499 20.0201V21.9991M13.4754 20.0201V21.9991M13.4646 12.0009V13.9799M10.0149 19.9684H13.986C14.5382 19.9684 14.986 19.5207 14.986 18.9684V14.9799C14.986 14.4276 14.5382 13.9799 13.986 13.9799H10.0149C9.46258 13.9799 9.01487 14.4276 9.01487 14.9799V18.9684C9.01487 19.5207 9.46258 19.9684 10.0149 19.9684Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="chipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
          </svg>
        </div>
</template>
