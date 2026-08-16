<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FolderPenIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the tab leads a compact lift and the folder lands on its base
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.77px) rotate(-2.08deg)', 'translateY(0.42px) rotate(0.73deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M8 7H16.75C18.8567 7 19.91 7 20.6667 7.50559C20.9943 7.72447 21.2755 8.00572 21.4944 8.33329C22 9.08996 22 10.1433 22 12.25C22 15.7612 22 17.5167 21.1573 18.7779C20.7926 19.3238 20.3238 19.7926 19.7779 20.1573C18.5167 21 16.7612 21 13.25 21H12C11.2801 21 10.6152 21 10 20.9948M12 7L11.3666 5.73313C10.8418 4.68358 10.3622 3.62712 9.19926 3.19101C8.6899 3 8.10802 3 6.94427 3C5.1278 3 4.21956 3 3.53806 3.38032C3.05227 3.65142 2.65142 4.05227 2.38032 4.53806C2 5.21956 2 6.1278 2 7.94427V11C2 11.7199 2 12.3848 2.00522 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M2 20.5V19.6611C2 19.0548 2.24082 18.4735 2.66947 18.0448L7.31022 13.4041C7.56894 13.1453 7.91983 13 8.28571 13C8.65159 13 9.00249 13.1453 9.2612 13.4041L9.59594 13.7388C9.85466 13.9975 10 14.3484 10 14.7143C10 15.0802 9.85465 15.4311 9.59594 15.6898L4.95518 20.3305C4.52653 20.7592 3.94515 21 3.33894 21H2.5C2.22386 21 2 20.7761 2 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
