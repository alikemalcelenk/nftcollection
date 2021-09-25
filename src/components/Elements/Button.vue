<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
