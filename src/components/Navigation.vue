<template>
  <Box>
    <Button :class="'button' + (selected && ' selectedButton')"
      >Favorites</Button
    >
  </Box>
</template>

<script>
// elements
import Box from './Elements/Box'
import Button from './Elements/Button'

export default {
  name: 'Navigation',
  components: {
    Box,
    Button
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.button {
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
}

.selectedButton {
  color: var(--c-blue);
}

@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background-color: var(--c-blue-10);
    color: var(--c-blue);
  }
}
</style>
