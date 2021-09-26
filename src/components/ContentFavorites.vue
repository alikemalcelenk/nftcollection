<template>
  <Box class="homeContent">
    <NFTCard class="nftCard" v-for="nft in nfts" :key="nft.id" :nft="nft" />
  </Box>
</template>

<script>
// elements
import Box from './Elements/Box.vue'

// components
import NFTCard from './NFTCard.vue'

// vuex
import { mapGetters } from 'vuex'
export default {
  name: 'ContentHome',
  components: {
    NFTCard,
    Box
  },
  computed: {
    ...mapGetters({ nfts: 'getLikedNfts' })
  }
}
</script>

<style scoped>
.homeContent {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px 40px 40px 40px;
}
.nftCard {
  margin-top: 20px;
}
</style>
