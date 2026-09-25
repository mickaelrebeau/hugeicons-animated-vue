<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CallDisabledIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the handset sags and fades while the slash rewrites
// authored from scripts/authored
const handsetVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) rotate(0deg)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px) rotate(0deg)',
      'translate(0px, 1.8px) rotate(10deg)',
      'translate(0px, 1.8px) rotate(10deg)',
      'translate(0px, 0px) rotate(0deg)',
    ],
    opacity: [1, 0.35, 0.35, 1],
    transition: {
      duration: 0.74,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const slashVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M21 3L3 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handsetVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4.91186 10.5413L7.55229 7.90088C8.09091 7.36227 8.27728 6.56642 8.05944 5.83652C7.8891 5.26577 7.69718 4.57964 7.56961 3.99292C7.45162 3.45027 6.97545 3 6.42012 3H4.91186C3.8012 3 2.88911 3.90384 3.01094 5.0078C3.36459 8.21219 4.55477 11.1646 6.35829 13.6417M13.4587 19.0881L16.0403 16.5065C16.6091 15.9377 17.4611 15.7659 18.2276 16.0103C18.7611 16.1804 19.3988 16.36 20.0015 16.4696C20.5479 16.569 21 17.0246 21 17.5799V19.0881C21 20.1988 20.0962 21.1109 18.9922 20.9891C14.7963 20.526 11.0325 18.6286 8.20196 15.798" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 12.1px' }" />
          </svg>
        </div>
</template>
