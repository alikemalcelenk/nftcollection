<template>
  <Box class="hello">
    {{ msg }}
  </Box>
</template>

<script>
// elements
import Box from './Elements/Box'

export default {
  name: 'HelloWorld',
  components: {
    Box
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
</style>
