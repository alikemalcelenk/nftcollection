<template>
  <TheLayout>
    <Header />
    <Content />
    <TheFooter />
  </TheLayout>
</template>

<script>
// components
import TheLayout from '../components/TheLayout.vue'
import Header from '../components/Header.vue'
import Content from '../components/ContentHome.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'Home',
  components: {
    TheLayout,
    Header,
    Content,
    TheFooter
  }
}
</script>
