<script setup lang="ts">
import { computed, onMounted, ref, watch, type ComponentPublicInstance } from 'vue'
import { ICON_NAMES, HANDCRAFTED_ICONS, catalogReady, generatedIcon, loadIconCatalog } from '../lib/icons-manifest'
import { DISAPPROVED_ICON_NAMES } from 'hugeicons-animated-vue/icon-approval'
import type { AnimatedIconHandle } from 'hugeicons-animated-vue/types'
import Search01Icon from 'hugeicons-animated-vue/icons/search-01.vue'
import GeneratedIconPreview from './GeneratedIconPreview.vue'
import { installCommand } from '../lib/site'
import posthog from 'posthog-js'

onMounted(() => {
  void loadIconCatalog()
})

const PAGE_SIZE = 80
const query = ref('')
const page = ref(1)
const copied = ref<string | null>(null)
const handles = new Map<string, AnimatedIconHandle>()

function bindHandle(name: string, el: Element | ComponentPublicInstance | null) {
  if (el && typeof (el as AnimatedIconHandle).startAnimation === 'function') {
    handles.set(name, el as AnimatedIconHandle)
  } else {
    handles.delete(name)
  }
}

const publicNames = ICON_NAMES.filter((name) => !DISAPPROVED_ICON_NAMES.has(name))

const matches = computed(() => {
  const q = query.value.trim().toLowerCase()
  return q ? publicNames.filter((name) => name.includes(q)) : publicNames
})

const pageCount = computed(() => Math.max(1, Math.ceil(matches.value.length / PAGE_SIZE)))

const icons = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return matches.value.slice(start, start + PAGE_SIZE)
})

watch(query, () => {
  page.value = 1
})

watch(pageCount, (count) => {
  if (page.value > count) page.value = count
})

async function copy(name: string) {
  await navigator.clipboard.writeText(installCommand(name))
  if (import.meta.env.VITE_POSTHOG_PROJECT_TOKEN && import.meta.env.VITE_POSTHOG_HOST) {
    posthog.capture('icon_install_command_copied', { icon_name: name })
  }
  copied.value = name
  window.setTimeout(() => {
    if (copied.value === name) copied.value = null
  }, 1400)
}
</script>

<template>
  <section id="icons" class="section">
    <div class="gallery-tools">
      <div class="section-head">
        <h2>Browse icons.</h2>
        <p>
          Hover to preview. Click to copy the install command.
          <span>{{ matches.length }} of {{ publicNames.length }}</span>
        </p>
      </div>
      <label class="search">
        <Search01Icon :size="16" />
        <span class="sr-only">Search icons</span>
        <input v-model="query" type="search" :placeholder="`Search ${publicNames.length} icons`" />
      </label>
    </div>
    <div class="grid">
      <button
        v-for="name in icons"
        :key="name"
        class="cell"
        type="button"
        :aria-label="`Copy ${name}`"
        @click="copy(name)"
        @pointerenter="handles.get(name)?.startAnimation()"
        @pointerleave="handles.get(name)?.stopAnimation()"
      >
        <component
          v-if="HANDCRAFTED_ICONS[name]"
          :is="HANDCRAFTED_ICONS[name]"
          :ref="(el) => bindHandle(name, el)"
          :size="32"
        />
        <GeneratedIconPreview
          v-else-if="catalogReady && generatedIcon(name)"
          :ref="(el) => bindHandle(name, el)"
          :name="name"
          :elements="generatedIcon(name)!.elements"
          :size="32"
        />
        <small>{{ copied === name ? 'copied' : name }}</small>
      </button>
    </div>
    <nav v-if="pageCount > 1" class="pager" aria-label="Icon pages">
      <button type="button" :disabled="page <= 1" @click="page -= 1">Previous</button>
      <span>{{ page }} / {{ pageCount }}</span>
      <button type="button" :disabled="page >= pageCount" @click="page += 1">Next</button>
    </nav>
  </section>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

.cell :deep(.hia-icon) {
  pointer-events: none;
}

.pager {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.pager button {
  padding: 0.45rem 0.9rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
  cursor: pointer;
}

.pager button:disabled {
  opacity: 0.4;
  cursor: default;
}
</style>
