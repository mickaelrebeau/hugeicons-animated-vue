<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FolderManagementIcon' })

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
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.58px) rotate(-1.86deg)', 'translateY(0.37px) rotate(0.65deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M12.0027 21C7.28739 21 4.92973 21 3.46487 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38042 4.53806C2.6516 4.05227 3.05255 3.65142 3.53848 3.38032C4.22017 3 5.12865 3 6.94562 3C8.10968 3 8.69172 3 9.20122 3.19101C10.3645 3.62712 10.8442 4.68358 11.3691 5.73313L12.0027 7M8.00163 7H16.754C18.8613 7 19.9149 7 20.6718 7.50559C20.9995 7.72447 21.2808 8.00572 21.4997 8.33329C21.8937 8.92282 21.9808 9.69244 22 11" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M18 19.7727C19.7673 19.7727 21.2 18.3075 21.2 16.5C21.2 14.6925 19.7673 13.2273 18 13.2273M18 19.7727C16.2327 19.7727 14.8 18.3075 14.8 16.5C14.8 14.6925 16.2327 13.2273 18 13.2273M18 19.7727V21M18 13.2273V12M15.0913 14.7149L14.0004 14.0455M22 18.9545L20.9092 18.2851M20.9087 14.7149L21.9996 14.0455M14 18.9545L15.0908 18.2851" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
