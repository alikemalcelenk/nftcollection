<template>
  <TheLayout>
    <Header selectedPage="favorites" />
    <Box style="background-color: blue"> </Box>
    <Box style="background-color: green"> </Box>
  </TheLayout>
</template>

<script>
// components
import TheLayout from '../components/TheLayout.vue'
import Header from '../components/Header.vue'

import Box from '../components/Elements/Box.vue'

export default {
  name: 'Favorites',
  components: {
    TheLayout,
    Header,
    Box
  }
}
</script>
