<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
