<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Text',
  props: {
    tag: {
      type: String,
      default: 'span'
    }
  }
}
</script>
