import type { DirectiveBinding } from 'vue'

interface AnimationElement extends HTMLElement {
  speed: number
  animationId?: number
  cacheScrollTop: number
}

const raf = window.requestAnimationFrame
const cancelRaf = window.cancelAnimationFrame

function scrollElement(el: AnimationElement) {
  const maxScrollTop = el.scrollHeight - el.clientHeight

  el.cacheScrollTop = el.cacheScrollTop + el.speed >= maxScrollTop
    ? 0
    : el.cacheScrollTop + el.speed

  el.scrollTo({
    top: el.cacheScrollTop,
  })

  el.animationId = raf(scrollElement.bind(null, el))
}

function mouseEnterHandler(el: AnimationElement) {
  if (el.animationId) {
    cancelRaf(el.animationId)
    el.animationId = undefined
  }
}

function mouseLeaveHandler(el: AnimationElement) {
  return el.animationId = raf(scrollElement.bind(null, el))
}

function elementScrollHandler(el: AnimationElement) {
  return el.cacheScrollTop = el.scrollTop
}

export const autoScroll = {
  name: 'autoScroll',
  mounted: (el: AnimationElement, binding: DirectiveBinding) => {
    const maxScrollTop = el.scrollHeight - el.clientHeight

    if (maxScrollTop - 1 <= 0)
      return

    el.speed = binding.value || 1
    el.cacheScrollTop = 0
    el.animationId = raf(scrollElement.bind(null, el))

    el.addEventListener('scroll', elementScrollHandler.bind(null, el))

    if (binding.modifiers.mouse) {
      el.addEventListener('mouseenter', mouseEnterHandler.bind(null, el))
      el.addEventListener('mouseleave', mouseLeaveHandler.bind(null, el))
    }
  },
  unmounted: (el: AnimationElement, binding: DirectiveBinding) => {
    if (binding.modifiers.mouse) {
      el.removeEventListener(
        'mouseenter',
        mouseEnterHandler.bind(null, el),
      )
      el.removeEventListener(
        'mouseleave',
        mouseLeaveHandler.bind(null, el),
      )
    }
  },
}
