<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Key02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the key turns in the lock
// authored from scripts/authored
const keyVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(2.75px, 4.75px) rotate(30deg)',
      'translate(2.40px, 3.70px) rotate(24deg)',
      'translate(2.53px, 4.05px) rotate(26deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const key2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(30deg)',
      'translate(0.00px, 0.00px) rotate(24deg)',
      'translate(0.00px, 0.00px) rotate(26deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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

const key3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(3.11px, 5.39px) rotate(30deg)',
      'translate(2.72px, 4.19px) rotate(24deg)',
      'translate(2.87px, 4.59px) rotate(26deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
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
            <motion.path d="M13.4998 13.5C15.1242 14.1962 15.9365 14.5443 16.7554 14.4351C16.8478 14.4227 16.9396 14.4061 17.0305 14.3852C17.8357 14.2003 18.4742 13.5894 19.7513 12.3676L19.9012 12.2242C20.8695 11.2559 21.3537 10.7717 21.4713 9.78342C21.5889 8.79514 21.3365 8.38218 20.8317 7.55626C20.3833 6.82247 19.7571 5.98593 18.8855 5.11433C18.0139 4.24272 17.1773 3.61654 16.4435 3.16808C15.6176 2.66332 15.2047 2.41094 14.2164 2.52851C13.2281 2.64609 12.7439 3.13027 11.7756 4.09863L11.6322 4.24843C10.4105 5.52557 9.7996 6.16413 9.61466 6.96941C9.59382 7.0602 9.57721 7.1519 9.56489 7.24423C9.45564 8.06322 9.80375 8.87548 10.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 8.5px' }" />
            <motion.path d="M10.5002 10.499L2.50021 18.4997V21.4997H5.50021V19.4997H7.50021V17.4997H9.50021L13.5002 13.4997" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="key2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 16px' }" />
            <motion.path d="M17.0002 7L16.0002 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="key3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 7.5px' }" />
          </svg>
        </div>
</template>
