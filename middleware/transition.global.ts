export default defineNuxtRouteMiddleware((to, from) => {
  const pageLevels: Record<string | symbol, number> = {
    index: 0,
    cities: 0,
    id: 1,
  }

  function getLevel(name: string | symbol | undefined): number {
    if (name === undefined) return 0
    return pageLevels[name]
  }

  const mode = 'out-in' as const

  const right = {
    name: 'slide-right',
    mode,
  }
  const left = {
    name: 'slide-left',
    mode,
  }
  const page = {
    name: 'page',
    mode,
  }

  if (getLevel(to.name) > getLevel(from.name)) {
    to.meta.pageTransition = right
    from.meta.pageTransition = left
  }
  if (getLevel(to.name) < getLevel(from.name)) {
    to.meta.pageTransition = left
    from.meta.pageTransition = right
  }
  if (getLevel(to.name) === getLevel(from.name)) {
    to.meta.pageTransition = page
    from.meta.pageTransition = page
  }
})
