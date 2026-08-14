export const SITE_NAME = 'Hugeicons Animated Vue'
export const SITE_TITLE = 'Hugeicons Animated Vue — Icons that know the gesture'
export const SITE_DESCRIPTION =
  'A curated set of hand-animated Hugeicons for Vue 3. Install each icon as source you own — no lock-in.'
export const GITHUB_URL = 'https://github.com/mickaelrebeau/hugeicons-animated-vue'
export const REACT_URL = 'https://hugeicons-animated.com'
export const HUGEICONS_URL = 'https://hugeicons.com'

export const REGISTRY_NAMESPACE = '@hugeicons-animated-vue'
export const REGISTRY_URL =
  'https://raw.githubusercontent.com/mickaelrebeau/hugeicons-animated-vue/main/apps/web/public/r/{name}.json'

export const installCommand = (name: string) =>
  `npx shadcn add ${REGISTRY_NAMESPACE}/${name}`
