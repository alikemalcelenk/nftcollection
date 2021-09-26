<template>
  <Box class="header">
    <TheLogo />
    <Navigation :selected="selectedPage === 'favorites' && true" />
  </Box>
</template>

<script>
// elements
import Box from './Elements/Box'

// components
import TheLogo from './TheLogo.vue'
import Navigation from './Navigation.vue'

export default {
  name: 'Header',
  components: {
    Box,
    TheLogo,
    Navigation
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    selectedPage: {
      type: String,
      default: 'home'
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 40px 0px 40px;
  background-color: var(--c-white);
  border-bottom: 1px solid var(--c-soft-gray);
}
</style>
