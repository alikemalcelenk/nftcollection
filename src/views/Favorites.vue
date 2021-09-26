<template>
  <TheLayout>
    <Header selectedPage="favorites" />
    <Content />
    <TheFooter />
  </TheLayout>
</template>

<script>
// components
import TheLayout from '../components/TheLayout.vue'
import Header from '../components/Header.vue'
import Content from '../components/ContentFavorites.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'Favorites',
  components: {
    TheLayout,
    Header,
    TheFooter,
    Content
  }
}
</script>
