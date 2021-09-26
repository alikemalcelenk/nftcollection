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

export default {
  name: 'ContentHome',
  components: {
    NFTCard,
    Box
  },
  data: function () {
    return {
      nfts: [
        {
          id: 1,
          url: 'https://lh3.googleusercontent.com/aKTdnYMXij4YcRE7eduuIq8ADj8VACs34YXBSwcFinQNAzc0kGvcQ5jsGciD2TxLKyjIXJkdqfwhQ8zRK5o-mFTMXyEd2LOVeQqTa0Q=w600',
          name: '#3336',
          collection: 'Bored Ape Yacht Club',
          createdBy: 'BoredApeYachtClub',
          blockchain: 'Ethereum'
        },
        {
          id: 2,
          url: 'https://lh3.googleusercontent.com/aKTdnYMXij4YcRE7eduuIq8ADj8VACs34YXBSwcFinQNAzc0kGvcQ5jsGciD2TxLKyjIXJkdqfwhQ8zRK5o-mFTMXyEd2LOVeQqTa0Q=w600',
          name: '#3336',
          collection: 'Bored Ape Yacht Club',
          createdBy: 'BoredApeYachtClub',
          blockchain: 'Ethereum'
        },
        {
          id: 3,
          url: 'https://lh3.googleusercontent.com/aKTdnYMXij4YcRE7eduuIq8ADj8VACs34YXBSwcFinQNAzc0kGvcQ5jsGciD2TxLKyjIXJkdqfwhQ8zRK5o-mFTMXyEd2LOVeQqTa0Q=w600',
          name: '#3336',
          collection: 'Bored Ape Yacht Club',
          createdBy: 'BoredApeYachtClub',
          blockchain: 'Ethereum'
        }
      ]
    }
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
