<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Span',
  props: {
    tag: {
      type: String,
      default: 'span'
    }
  }
}
</script>
