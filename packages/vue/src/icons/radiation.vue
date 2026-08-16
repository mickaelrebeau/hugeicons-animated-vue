<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RadiationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the separate cells of the radiation assemble from top-left to bottom-right
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.38px) scale(0.74)', 'translateY(-0.39px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.78px) rotate(-2.1deg)', 'translateY(0.42px) rotate(0.73deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
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
            <motion.path d="M15.8766 10.1531C15.6924 9.42955 15.3109 8.78476 14.7928 8.2794C14.3976 7.89385 14.2219 7.28948 14.498 6.8113L16.4983 3.34665C16.7746 2.86813 17.3902 2.7005 17.8385 3.02346C20.105 4.65609 21.6603 7.2143 21.9508 10.1445C22.0053 10.6941 21.5523 11.143 21 11.143H17C16.4477 11.143 16.0128 10.6883 15.8766 10.1531Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '18.11px 6.92px' }" />
            <motion.path d="M9.2017 8.28473C8.6864 8.7893 8.30697 9.43209 8.12342 10.1531C7.98716 10.6883 7.55228 11.143 6.99999 11.143H2.99999C2.44771 11.143 1.99474 10.6941 2.04922 10.1445C2.33932 7.21821 3.89085 4.66292 6.1524 3.03001C6.60071 2.70631 7.2169 2.87376 7.49337 3.35263L9.49445 6.8186C9.77003 7.29592 9.59552 7.89913 9.2017 8.28473Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '5.88px 6.92px' }" />
            <motion.path d="M7.88499 20.2598C9.14003 20.8272 10.5331 21.143 12 21.143C13.4629 21.143 14.8524 20.8289 16.1048 20.2644C16.6082 20.0375 16.7704 19.4209 16.4943 18.9426L14.4932 15.4767C14.2172 14.9987 13.6066 14.8489 13.0749 14.9969C12.7328 15.0921 12.3724 15.143 12 15.143C11.625 15.143 11.262 15.0914 10.9178 14.9949C10.3854 14.8456 9.77316 14.995 9.49672 15.4738L7.49641 18.9384C7.22049 19.4163 7.38216 20.0325 7.88499 20.2598Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 10.9547V11.1422M12.25 11.1422C12.25 11.2802 12.1381 11.3922 12 11.3922C11.8619 11.3922 11.75 11.2802 11.75 11.1422C11.75 11.0041 11.8619 10.8922 12 10.8922C12.1381 10.8922 12.25 11.0041 12.25 11.1422Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
