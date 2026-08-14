import { onMounted, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapContext(
  root: Ref<HTMLElement | null>,
  setup: (ctx: gsap.Context) => void,
) {
  let ctx: gsap.Context | undefined
  let mm: gsap.MatchMedia | undefined

  onMounted(() => {
    if (!root.value) return
    ctx = gsap.context(() => {
      mm = gsap.matchMedia()
      setup(ctx!)
    }, root.value)
  })

  onUnmounted(() => {
    mm?.revert()
    ctx?.revert()
  })
}

export { gsap, ScrollTrigger }
