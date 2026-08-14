import { ref, toValue, type MaybeRefOrGetter } from 'vue'
import type { AnimatedIconHandle } from '../types'

export type IconPose = 'normal' | 'animate'

type AnimationControls = {
  set: (variant: IconPose | Record<string, unknown>) => void
  start: (variant: IconPose | Record<string, unknown>) => Promise<unknown>
}

export function useReducedMotionFlag(
  reduced?: MaybeRefOrGetter<boolean | undefined>,
) {
  if (typeof window === 'undefined') return () => false
  return () => {
    const override = reduced === undefined ? undefined : toValue(reduced)
    if (override !== undefined) return override
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
}

export function useIconAnimation(options: {
  controls: AnimationControls
  loops?: boolean
}): AnimatedIconHandle & {
  onMouseEnter: () => void
  onMouseLeave: () => void
} {
  const { controls, loops = false } = options
  const isPlaying = ref(false)
  let run = 0

  const prefersReduced = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  async function startAnimation() {
    if (prefersReduced() || isPlaying.value) return

    isPlaying.value = true
    const current = ++run
    controls.set('normal')
    await controls.start('animate')
    if (run === current) isPlaying.value = false
  }

  function stopAnimation() {
    if (!loops) return
    run += 1
    isPlaying.value = false
    void controls.start('normal')
  }

  return {
    startAnimation,
    stopAnimation,
    onMouseEnter: () => {
      void startAnimation()
    },
    onMouseLeave: () => {
      stopAnimation()
    },
  }
}
