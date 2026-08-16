<script setup lang="ts">
import { computed } from 'vue'
import { motion, useAnimationControls } from 'motion-v'
import { useIconAnimation } from 'hugeicons-animated-vue/composables/useIconAnimation'
import type { AnimatedIconHandle } from 'hugeicons-animated-vue/types'
import { planIcon, toMotionVariants, usesCustom, variantsFor } from '../lib/motion'

type SvgEl = [string, Record<string, string | number>]

const props = withDefaults(
  defineProps<{
    name: string
    elements: SvgEl[]
    size?: number
  }>(),
  { size: 28 },
)

const plan = computed(() => planIcon(props.name, props.elements))

const items = computed(() =>
  props.elements.map((el, index) => {
    const role = plan.value.roles[index] ?? { kind: 'static' as const }
    const spec = variantsFor(role.kind, role, plan.value.seed)
    return {
      tag: el[0],
      attrs: el[1],
      role,
      variants: toMotionVariants(spec),
      motionTag: (motion as Record<string, unknown>)[el[0]],
    }
  }),
)

function strokeAttrs(attrs: Record<string, string | number> = {}) {
  return {
    stroke: 'currentColor',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '1.5',
    ...attrs,
  }
}

function originStyle(origin?: [number, number]) {
  const [x, y] = origin || [12, 12]
  return { transformOrigin: `${x}px ${y}px` }
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: plan.value.loops,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :overflow="plan.clip ? 'hidden' : 'visible'"
    >
      <template v-for="(item, i) in items" :key="i">
        <component
          :is="item.tag"
          v-if="item.role.kind === 'static'"
          v-bind="strokeAttrs(item.attrs)"
        />
        <component
          :is="item.motionTag"
          v-else
          v-bind="strokeAttrs(item.attrs)"
          :variants="item.variants"
          :custom="usesCustom(item.role.kind) ? item.role.custom : undefined"
          :animate="controls"
          initial="normal"
          :style="originStyle(item.role.origin)"
        />
      </template>
    </svg>
  </div>
</template>
