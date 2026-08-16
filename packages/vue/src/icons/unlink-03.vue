<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Unlink03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after link-01: the two chain halves pull apart along the break and reconnect
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.31px)', 'translateX(-0.19px)', 'translateX(0px)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M9.52393 14.4365L14.437 9.52348" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.44px 7.53px' }" />
            <motion.path d="M21.0162 16.0088H19.0124M16.0068 21.0192V19.0151" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.44px 7.53px' }" />
            <motion.path d="M2.98291 7.99188H4.98664M7.99224 2.98149V4.98565" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.44px 7.53px' }" />
            <motion.path d="M15.1076 12.5688C16.2476 13.3084 17.4163 13.1111 18.2706 12.2566L21.2649 9.26163C22.2431 8.28329 22.2431 6.69709 21.2649 5.71875L18.2796 2.73282C17.3015 1.75448 15.7156 1.75448 14.7375 2.73282L11.7431 5.72784C11.0414 6.42973 10.6362 7.76376 11.4661 8.91014" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.44px 7.53px' }" />
            <motion.path d="M12.569 15.1086C13.3084 16.2489 13.1111 17.4178 12.2569 18.2723L9.26249 21.2673C8.28436 22.2456 6.69849 22.2456 5.72036 21.2673L2.73506 18.2813C1.75693 17.303 1.75693 15.7168 2.73506 14.7385L5.72944 11.7435C6.43119 11.0416 7.76493 10.6363 8.91107 11.4664" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.44px 7.53px' }" />
          </svg>
        </div>
</template>
