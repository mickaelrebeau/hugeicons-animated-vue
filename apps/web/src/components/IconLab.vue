<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue'
import { ICON_NAMES, catalogReady, generatedIcon, handcraftedIcon, isHandcraftedIcon, loadIconCatalog } from '../lib/icons-manifest'
import GeneratedIconPreview from './GeneratedIconPreview.vue'
import { DISAPPROVED_ICON_NAMES } from 'hugeicons-animated-vue/icon-approval'
import type { AnimatedIconHandle } from 'hugeicons-animated-vue/types'
import { installCommand } from '../lib/site'
import posthog from 'posthog-js'

onMounted(() => {
  void loadIconCatalog()
})

const names = ICON_NAMES.filter((name) => !DISAPPROVED_ICON_NAMES.has(name))
const selected = ref(names.includes('notification-03') ? 'notification-03' : names[0])
const filter = ref('')
const size = ref(72)
const color = ref('#141812')
const trigger = ref<'hover' | 'click' | 'loop'>('hover')
const copied = ref<'cmd' | 'code' | null>(null)
const preview = useTemplateRef<AnimatedIconHandle>('preview')

const swatches = ['#141812', '#afe67f', '#6aa131', '#5e6658', '#ffffff']

const filteredNames = computed(() => {
  const q = filter.value.trim().toLowerCase()
  const list = q ? names.filter((name) => name.includes(q)) : names
  if (selected.value && !list.includes(selected.value)) return [selected.value, ...list]
  return list
})

const pascal = computed(() =>
  selected.value
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('') + 'Icon',
)

const snippet = computed(
  () => `<script setup lang="ts">
import { ${pascal.value} } from 'hugeicons-animated-vue'
<\/script>

<template>
  <${pascal.value} :size="${size.value}" />
<\/template>`,
)

let loopId = 0
watch(
  trigger,
  (mode) => {
    window.clearInterval(loopId)
    if (mode === 'loop') {
      preview.value?.startAnimation()
      loopId = window.setInterval(() => preview.value?.startAnimation(), 1600)
    }
  },
  { immediate: true },
)

onUnmounted(() => window.clearInterval(loopId))

async function copy(kind: 'cmd' | 'code') {
  await navigator.clipboard.writeText(
    kind === 'cmd' ? installCommand(selected.value) : snippet.value,
  )
  if (import.meta.env.VITE_POSTHOG_PROJECT_TOKEN && import.meta.env.VITE_POSTHOG_HOST) {
    posthog.capture(kind === 'cmd' ? 'lab_install_command_copied' : 'lab_component_code_copied', {
      icon_name: selected.value,
      icon_size: size.value,
      animation_trigger: trigger.value,
    })
  }
  copied.value = kind
  window.setTimeout(() => {
    if (copied.value === kind) copied.value = null
  }, 1400)
}

function onPreviewEnter() {
  if (trigger.value === 'hover') preview.value?.startAnimation()
}

function onPreviewClick() {
  if (trigger.value === 'click' || trigger.value === 'hover') {
    preview.value?.startAnimation()
  }
}
</script>

<template>
  <section id="lab" class="section">
    <div class="section-head">
      <h2>Tune it live.</h2>
      <p>Size, color, trigger. The icon stays source — you take the settings home as Vue.</p>
    </div>
    <div class="lab">
      <div
        class="lab-preview"
        :style="{ color }"
        @pointerenter="onPreviewEnter"
        @click="onPreviewClick"
      >
        <component
          v-if="isHandcraftedIcon(selected)"
          :is="handcraftedIcon(selected)"
          ref="preview"
          :size="size"
        />
        <GeneratedIconPreview
          v-else-if="catalogReady && generatedIcon(selected)"
          ref="preview"
          :name="selected"
          :elements="generatedIcon(selected)!.elements"
          :size="size"
        />
      </div>
      <div class="lab-controls">
        <div class="control">
          <label for="lab-filter">Find icon</label>
          <input id="lab-filter" v-model="filter" type="search" class="picker" placeholder="Search icons" />
        </div>
        <div class="control">
          <label for="lab-icon">Icon</label>
          <select id="lab-icon" v-model="selected" class="picker">
            <option v-for="name in filteredNames" :key="name" :value="name">
              {{ name }}
            </option>
          </select>
        </div>
        <div class="control">
          <label for="lab-size">Size · {{ size }}px</label>
          <input id="lab-size" v-model.number="size" type="range" min="20" max="160" />
        </div>
        <div class="control">
          <label>Color</label>
          <div class="swatches">
            <button
              v-for="swatch in swatches"
              :key="swatch"
              class="swatch"
              type="button"
              :class="{ 'is-on': color === swatch }"
              :style="{ background: swatch }"
              :aria-label="swatch"
              @click="color = swatch"
            />
          </div>
        </div>
        <div class="control">
          <label>Trigger</label>
          <div class="triggers">
            <button
              v-for="mode in (['hover', 'click', 'loop'] as const)"
              :key="mode"
              type="button"
              :class="{ 'is-on': trigger === mode }"
              @click="trigger = mode"
            >
              {{ mode }}
            </button>
          </div>
        </div>
        <div class="control">
          <label>Vue</label>
          <pre class="snippet">{{ snippet }}</pre>
          <div class="triggers" style="margin-top: 0.7rem">
            <button type="button" @click="copy('code')">
              {{ copied === 'code' ? 'copied' : 'copy component' }}
            </button>
            <button type="button" @click="copy('cmd')">
              {{ copied === 'cmd' ? 'copied' : 'copy install' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
