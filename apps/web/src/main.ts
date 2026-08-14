import { createApp } from 'vue'
import posthog from 'posthog-js'
import App from './App.vue'
import './styles/main.css'
import 'lenis/dist/lenis.css'

const posthogProjectToken = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN
const posthogHost = import.meta.env.VITE_POSTHOG_HOST

const app = createApp(App)

if (posthogProjectToken && posthogHost) {
  posthog.init(posthogProjectToken, {
    api_host: posthogHost,
    capture_exceptions: {
      capture_unhandled_errors: true,
      capture_unhandled_rejections: true,
      capture_console_errors: false,
    },
  })

  app.config.errorHandler = (error) => {
    posthog.captureException(error)
  }
} else if (import.meta.env.DEV) {
  const missingVariable = posthogProjectToken
    ? 'VITE_POSTHOG_HOST'
    : 'VITE_POSTHOG_PROJECT_TOKEN'

  throw new Error(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
  )
}

app.mount('#app')
