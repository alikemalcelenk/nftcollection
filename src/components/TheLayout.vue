<template>
  <Box class="layout">
    <slot />
  </Box>
</template>

<script>
// elements
import Box from './Elements/Box.vue'

export default {
  name: 'TheLayout',
  components: {
    Box
  }
}
</script>

<style scoped>
.layout {
  display: grid;
  grid-template-rows: 80px 1fr 80px;
  min-width: 300px;
  height: 100vh;
}
</style>
