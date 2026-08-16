<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MastodonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the mastodon move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.61px) rotate(-1.89deg)', 'translateY(0.38px) rotate(0.66deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M17 13.5V8C17 6.61929 15.8807 5.5 14.5 5.5C13.1193 5.5 12 6.61929 12 8M12 8V11.5M12 8C12 6.61929 10.8807 5.5 9.5 5.5C8.11929 5.5 7 6.61929 7 8V13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.49px' }" />
            <motion.path d="M13 16.9954C15.0099 16.9954 16.89 16.6876 18.4949 16.1525C20.1275 15.6081 21 13.9512 21 12.2302V7.52349C21 5.34784 19.8297 3.2779 17.7281 2.715C16.0259 2.25905 14.0744 2 12 2C9.9256 2 7.97414 2.25905 6.27189 2.715C4.17033 3.2779 3 5.34785 3 7.52349V14.4961C3 22.4937 11 21.9938 11 21.9938C13.5 21.9938 15 21 15 21V20C15 20 13.5 20.4943 11 20.4943C5.68009 20.4943 7.06011 15.9957 7.06011 15.9957C8.75781 16.627 10.8012 16.9954 13 16.9954Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.49px' }" />
          </svg>
        </div>
</template>
