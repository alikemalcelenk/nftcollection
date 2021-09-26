<template>
  <Box class="hello">
    <IconFavorite class="icon" />
    <IconFavoriteFill class="icon" />
    <IconLogo class="icon" />
  </Box>
</template>

<script>
// elements
import Box from './Elements/Box'

// icons
import IconFavorite from './Icons/Favorite.vue'
import IconFavoriteFill from './Icons/FavoriteFill.vue'
import IconLogo from './Icons/Logo.vue'

export default {
  name: 'HelloWorld',
  components: {
    Box,
    IconFavorite,
    IconFavoriteFill,
    IconLogo
  },

  props: {
    msg: {
      type: String,
      default: 'X page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.icon {
  color: var(--c-blue);
}
</style>
