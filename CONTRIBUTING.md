# Contributing

Thanks for helping make Hugeicons Animated Vue better. This repo is MIT-licensed
and open to issues, discussions, and pull requests.

## Ground rules

- Be kind. We follow the [Code of Conduct](CODE_OF_CONDUCT.md).
- Keep changes focused. One concern per pull request.
- Do not hand-edit generated registry files (`registry.json`, `apps/web/public/r/*`).
  Run `pnpm registry:build` instead.
- Icon source of truth is `packages/vue/src/icons/*.vue`.

## Setup

```bash
pnpm install
pnpm dev
```

Requires Node 20+ and [pnpm](https://pnpm.io) 10.

## Project map

| Path | Role |
| --- | --- |
| `packages/vue` | Vue 3 + `motion-v` icon library published to npm |
| `apps/web` | Landing, gallery, and Lab |
| `scripts/` | Icon convert, registry, and manifest tooling |
| `docs/animation-guidelines.md` | Motion rules for new or revised icons |

## Icons

- Preserve Hugeicons primitives between poses.
- Prefer a short, discrete, productive gesture.
- Finite gestures must return to the rest pose.
- Looping gestures stop and return to rest on pointer leave.
- Respect `prefers-reduced-motion`.

See [docs/animation-guidelines.md](docs/animation-guidelines.md).

Re-port from the React originals only when needed:

```bash
# clone enesgules/hugeicons-animated, then:
HUGEICONS_SRC=/path/to/hugeicons-animated/icons pnpm icons:convert
pnpm registry:build
```

## Pull requests

1. Fork and branch from `main`.
2. Make the change and verify `pnpm --filter hugeicons-animated-vue build` and
   `pnpm --filter web build`.
3. Open a PR using the template. Describe *why*, not only *what*.

## Reporting bugs

Use the bug report issue template. Include Vue / `motion-v` versions, a
reproduction, and whether reduced-motion is enabled.

## Security

Do not file public issues for vulnerabilities. See [SECURITY.md](SECURITY.md).
