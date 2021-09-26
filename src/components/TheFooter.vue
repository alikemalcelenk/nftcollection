<template>
  <Box class="footer"> NFTCollection @2021 </Box>
</template>

<script>
// elements
import Box from './Elements/Box'

export default {
  name: 'TheFooter',
  components: {
    Box
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--c-soft-gray);
  font-size: 13px;
}
</style>
