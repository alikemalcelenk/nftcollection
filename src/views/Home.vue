<template>
  <TheLayout>
    <Header />
    <Box> </Box>
    <TheFooter />
  </TheLayout>
</template>

<script>
// components
import TheLayout from '../components/TheLayout.vue'
import Header from '../components/Header.vue'
import TheFooter from '../components/TheFooter.vue'

import Box from '../components/Elements/Box.vue'

export default {
  name: 'Home',
  components: {
    TheLayout,
    Header,
    TheFooter,
    Box
  }
}
</script>
