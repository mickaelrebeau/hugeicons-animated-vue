<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import type { AnimatedIconHandle } from 'hugeicons-animated-vue/types'
import { ICON_LIST } from '../lib/icons-manifest'
import { DISAPPROVED_ICON_NAMES } from 'hugeicons-animated-vue/icon-approval'
import { installCommand } from '../lib/site'
import posthog from 'posthog-js'
import Copy01Icon from 'hugeicons-animated-vue/icons/copy-01.vue'
import Tick02Icon from 'hugeicons-animated-vue/icons/tick-02.vue'

const PUBLIC_ICONS = ICON_LIST.filter((i) => !DISAPPROVED_ICON_NAMES.has(i.name))

const HERO_SPECIMENS = [
  { name: 'alert-circle', top: '18%', left: '58%', size: 22 },
  { name: 'bookmark-01', top: '14%', left: '78%', size: 24 },
  { name: 'cloud-rain', top: '32%', left: '88%', size: 26 },
  { name: 'cursor-pointer-01', top: '46%', left: '70%', size: 22 },
  { name: 'mail-open', top: '58%', left: '90%', size: 24 },
  { name: 'settings-01', top: '72%', left: '76%', size: 22 },
  { name: 'coffee-02', top: '78%', left: '54%', size: 24 },
  { name: 'play', top: '28%', left: '48%', size: 20 },
]

const specimens = HERO_SPECIMENS.flatMap((s) => {
  const icon = PUBLIC_ICONS.find((i) => i.name === s.name)
  return icon ? [{ ...s, icon }] : []
})

const selected = ref('notification-03')
const copied = ref(false)
const copyRef = useTemplateRef<AnimatedIconHandle>('copyIcon')
const tickRef = useTemplateRef<AnimatedIconHandle>('tickIcon')

const selectedIcon = computed(
  () => PUBLIC_ICONS.find((i) => i.name === selected.value) ?? PUBLIC_ICONS[0],
)

const command = computed(() => installCommand(selected.value))

async function copyCommand() {
  await navigator.clipboard.writeText(command.value)
  if (import.meta.env.VITE_POSTHOG_PROJECT_TOKEN && import.meta.env.VITE_POSTHOG_HOST) {
    posthog.capture('install_command_copied', { icon_name: selected.value })
  }
  copied.value = true
  tickRef.value?.startAnimation()
  window.setTimeout(() => {
    copied.value = false
  }, 1600)
}

function pick(name: string, handle?: AnimatedIconHandle | null) {
  selected.value = name
  handle?.startAnimation()
}

const blades = Array.from({ length: 12 }, (_, i) => i * 30)
</script>

<template>
  <section class="hero">
    <div class="hero-field" aria-hidden="true">
      <div class="aperture" data-aperture>
        <span class="aperture-ring" />
        <span class="aperture-ring" />
        <span class="aperture-ring" />
        <span class="aperture-ring" />
        <span class="aperture-ring" />
        <i
          v-for="deg in blades"
          :key="deg"
          class="blade"
          :style="{ transform: `rotate(${deg}deg)` }"
        />
      </div>
      <button
        v-for="specimen in specimens"
        :key="specimen.name"
        class="specimen"
        type="button"
        :style="{ top: specimen.top, left: specimen.left }"
        :aria-label="`Preview ${specimen.name}`"
        @pointerenter="pick(specimen.name)"
        @click="pick(specimen.name)"
      >
        <component :is="specimen.icon.component" :size="specimen.size" />
      </button>
    </div>

    <div class="hero-copy">
      <p class="kicker">Vue 3 · Motion · source you own</p>
      <h1>
        Icons,<br />
        now they<br />
        <em>gesture</em>.
      </h1>
      <p class="lede">
        Hand-animated
        <a href="https://hugeicons.com" target="_blank" rel="noreferrer">Hugeicons</a>
        for Vue. Each icon is a component you copy into your app — the same
        geometry, a verb attached.
      </p>
      <div class="install-row">
        <code>
          $ npx shadcn add @hugeicons-animated-vue/<strong>{{ selectedIcon.name }}</strong>
        </code>
        <button
          class="icon-btn"
          type="button"
          :aria-label="`Copy install command for ${selectedIcon.name}`"
          @click="copyCommand"
          @pointerenter="copyRef?.startAnimation()"
        >
          <Tick02Icon v-if="copied" ref="tickIcon" :size="16" />
          <Copy01Icon v-else ref="copyIcon" :size="16" />
        </button>
      </div>
    </div>
  </section>
</template>
