<template>
  <TheLayout>
    <Box style="background-color: gray"> </Box>
    <Box style="background-color: blue"> </Box>
    <Box style="background-color: green"> </Box>
  </TheLayout>
</template>

<script>
// components
import TheLayout from '../components/TheLayout.vue'
import Box from '../components/Elements/Box.vue'

export default {
  name: 'Home',
  components: {
    TheLayout,
    Box
  }
}
</script>
