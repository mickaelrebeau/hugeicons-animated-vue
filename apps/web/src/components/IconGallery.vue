<script setup lang="ts">
import { computed, ref } from 'vue'
import { ICON_LIST } from '../lib/icons-manifest'
import { DISAPPROVED_ICON_NAMES } from 'hugeicons-animated-vue/icon-approval'
import Search01Icon from 'hugeicons-animated-vue/icons/search-01.vue'
import { installCommand } from '../lib/site'

const query = ref('')
const copied = ref<string | null>(null)

const icons = computed(() => {
  const q = query.value.trim().toLowerCase()
  const list = ICON_LIST.filter((i) => !DISAPPROVED_ICON_NAMES.has(i.name))
  return q ? list.filter((i) => i.name.includes(q)) : list
})

async function copy(name: string) {
  await navigator.clipboard.writeText(installCommand(name))
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
        <p class="kicker">The case</p>
        <h2>Pick an icon.</h2>
        <p>
          Hover to preview. Click to copy the install command.
          <span>{{ icons.length }} of {{ ICON_LIST.filter((i) => !DISAPPROVED_ICON_NAMES.has(i.name)).length }}</span>
        </p>
      </div>
      <label class="search">
        <Search01Icon :size="16" />
        <span class="sr-only">Search icons</span>
        <input v-model="query" type="search" :placeholder="`Search ${icons.length} icons`" />
      </label>
    </div>
    <div class="grid">
      <button
        v-for="icon in icons"
        :key="icon.name"
        class="cell"
        type="button"
        :aria-label="`Copy ${icon.name}`"
        @click="copy(icon.name)"
      >
        <component :is="icon.component" :size="32" />
        <small>{{ copied === icon.name ? 'copied' : icon.name }}</small>
      </button>
    </div>
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
</style>
