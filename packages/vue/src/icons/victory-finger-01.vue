<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'VictoryFinger01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the victory sign pokes up twice
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, 0px)',
      'translate(0px, -1.1px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.66, times: [0, 0.22, 0.44, 0.66, 1], ease: 'easeInOut' },
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
            <motion.path d="M8.51708 13.0007L7.96439 10.0432M7.96439 10.0432L6.84918 4.07572C6.67303 3.13311 7.28511 2.22346 8.22351 2.03325C9.17309 1.84078 10.0983 2.45694 10.2885 3.40846L11.5024 9.48123L12.7225 3.40846C12.9127 2.45694 13.8379 1.84078 14.7875 2.03325C15.7259 2.22346 16.2701 3.13795 16.0939 4.08057L15.0677 9.82971M7.96439 10.0432C6.072 11.8178 4.91115 12.8595 4.67339 13.7962C4.40846 14.84 4.18905 15.9851 6.0778 18.2819C6.69951 19.0379 7.22362 19.5625 7.34491 19.7626C7.55609 20.111 8.00331 20.3723 8.00331 22.0023M15.0836 9.84861C17.3452 10.4912 18.8165 11.7103 19.2379 12.5798C19.7074 13.5487 19.5747 15.0057 18.5899 17.4059C18.2014 18.3528 17.7253 18.8915 17.6468 19.112C17.4638 19.6257 17.1848 20.1789 17.3131 21.9783" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 11.9px' }" />
          </svg>
        </div>
</template>
