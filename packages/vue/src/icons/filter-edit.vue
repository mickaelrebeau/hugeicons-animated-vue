<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FilterEditIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after filter: the funnel narrows the data from its wide mouth to its result
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.55px)', 'translateX(-0.19px)', 'translateX(0px)'],
    transition: {
      duration: 0.46,
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
            <motion.path d="M13.2426 17.5C13.1955 17.8033 13.1531 18.0485 13.1164 18.2442C12.8876 19.4657 11.1555 20.2006 10.2283 20.8563C9.67638 21.2466 9.00662 20.782 8.9351 20.1778C8.79875 19.0261 8.54193 16.6864 8.26159 13.2614C8.23641 12.9539 8.08718 12.6761 7.85978 12.5061C5.37133 10.6456 3.59796 8.59917 2.62966 7.44869C2.32992 7.09255 2.2317 6.83192 2.17265 6.37282C1.97043 4.80082 1.86933 4.01482 2.33027 3.50742C2.79122 3.00002 3.60636 3.00002 5.23665 3.00002H16.768C18.3983 3.00002 19.2134 3.00002 19.6743 3.50742C19.8979 3.75348 19.9892 4.06506 20.001 4.50002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.94px 12.12px' }" />
            <motion.path d="M20.8628 7.4392L21.5571 8.13157C22.1445 8.71735 22.1445 9.6671 21.5571 10.2529L17.9196 13.9486C17.6335 14.2339 17.2675 14.4263 16.8697 14.5003L14.6153 14.9884C14.2593 15.0655 13.9424 14.7503 14.0186 14.3951L14.4985 12.1598C14.5728 11.7631 14.7657 11.3981 15.0518 11.1128L18.7356 7.4392C19.323 6.85342 20.2754 6.85342 20.8628 7.4392Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.94px 12.12px' }" />
          </svg>
        </div>
</template>
