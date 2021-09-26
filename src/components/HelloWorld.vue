<template>
  <Box class="hello">
    <IconFavorite class="icon" />
    <IconFavoriteFill class="icon" />
    <IconLogo class="icon" />
    <TheLogo />
    <Navigation />
    <Navigation selected />
    <Box class="nftCard"><NFTCard :nft="nft" /> </Box>
    <Box class="nftCard"><NFTCard :nft="nft" liked /> </Box>
  </Box>
</template>

<script>
// elements
import Box from './Elements/Box'

// icons
import IconFavorite from './Icons/Favorite.vue'
import IconFavoriteFill from './Icons/FavoriteFill.vue'
import IconLogo from './Icons/Logo.vue'

// components
import TheLogo from './TheLogo.vue'
import Navigation from './Navigation.vue'
import NFTCard from './NFTCard.vue'

export default {
  name: 'HelloWorld',
  components: {
    Box,
    IconFavorite,
    IconFavoriteFill,
    IconLogo,
    TheLogo,
    Navigation,
    NFTCard
  },
  props: {
    msg: {
      type: String,
      default: 'X page'
    }
  },
  data: function () {
    return {
      nft: {
        id: 1,
        url: 'https://lh3.googleusercontent.com/aKTdnYMXij4YcRE7eduuIq8ADj8VACs34YXBSwcFinQNAzc0kGvcQ5jsGciD2TxLKyjIXJkdqfwhQ8zRK5o-mFTMXyEd2LOVeQqTa0Q=w600',
        name: '#3336',
        collection: 'Bored Ape Yacht Club',
        createdBy: 'BoredApeYachtClub',
        blockchain: 'Ethereum'
      }
    }
  }
}
</script>

<style scoped>
.hello {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
.icon {
  color: var(--c-blue);
}
.nftCard {
  width: 900px;
}
</style>
