<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import type { AnimatedIconHandle } from 'hugeicons-animated-vue/types'
import { installCommand } from '../lib/site'
import posthog from 'posthog-js'
import AlertCircleIcon from 'hugeicons-animated-vue/icons/alert-circle.vue'
import Bookmark01Icon from 'hugeicons-animated-vue/icons/bookmark-01.vue'
import CloudRainIcon from 'hugeicons-animated-vue/icons/cloud-rain.vue'
import Coffee02Icon from 'hugeicons-animated-vue/icons/coffee-02.vue'
import Copy01Icon from 'hugeicons-animated-vue/icons/copy-01.vue'
import CursorPointer01Icon from 'hugeicons-animated-vue/icons/cursor-pointer-01.vue'
import MailOpenIcon from 'hugeicons-animated-vue/icons/mail-open.vue'
import PlayIcon from 'hugeicons-animated-vue/icons/play.vue'
import Settings01Icon from 'hugeicons-animated-vue/icons/settings-01.vue'
import Tick02Icon from 'hugeicons-animated-vue/icons/tick-02.vue'

const specimens = [
  { name: 'alert-circle', top: '18%', left: '58%', size: 22, component: AlertCircleIcon },
  { name: 'bookmark-01', top: '14%', left: '78%', size: 24, component: Bookmark01Icon },
  { name: 'cloud-rain', top: '32%', left: '88%', size: 26, component: CloudRainIcon },
  { name: 'cursor-pointer-01', top: '46%', left: '70%', size: 22, component: CursorPointer01Icon },
  { name: 'mail-open', top: '58%', left: '90%', size: 24, component: MailOpenIcon },
  { name: 'settings-01', top: '72%', left: '76%', size: 22, component: Settings01Icon },
  { name: 'coffee-02', top: '78%', left: '54%', size: 24, component: Coffee02Icon },
  { name: 'play', top: '28%', left: '48%', size: 20, component: PlayIcon },
]

const selected = ref('notification-03')
const copied = ref(false)
const copyRef = useTemplateRef<AnimatedIconHandle>('copyIcon')
const tickRef = useTemplateRef<AnimatedIconHandle>('tickIcon')

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

function pick(name: string) {
  selected.value = name
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
        <component :is="specimen.component" :size="specimen.size" />
      </button>
    </div>

    <div class="hero-copy">
      <p class="kicker">Free · Vue 3 · MIT</p>
      <h1>
        Free animated icons<br />
        for modern <em>Vue</em> UIs.
      </h1>
      <p class="lede">
        Animated
        <a href="https://hugeicons.com" target="_blank" rel="noreferrer">Hugeicons</a>
        for Vue. Hover to play, copy the source, keep the geometry — the same
        library, a gesture attached.
      </p>
      <div class="hero-actions">
        <a class="btn btn-lime" href="#icons">Browse icons</a>
        <a class="btn btn-ghost" href="#lab">Open playground</a>
      </div>
      <div class="install-row">
        <code>
          $ npx shadcn add @hugeicons-animated-vue/<strong>{{ selected }}</strong>
        </code>
        <button
          class="icon-btn"
          type="button"
          :aria-label="`Copy install command for ${selected}`"
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
