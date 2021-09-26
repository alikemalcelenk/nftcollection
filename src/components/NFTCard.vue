<template>
  <Box class="ntfcard">
    <Box class="leftContent">
      <Image :src="nft.url" class="nftImage" />
    </Box>
    <Box class="midContent">
      <Text class="nftName">{{ nft.name }}</Text>
      <Text class="description"
        ><Text class="title">Colection:</Text> {{ nft.collection }}
      </Text>
      <Text class="description"
        ><Text class="title">Created by</Text> {{ nft.createdBy }}
      </Text>
      <Text class="description"
        ><Text class="title">Blockchain:</Text> {{ nft.blockchain }}
      </Text>
    </Box>
    <Box class="rightContent">
      <Button @click="like">
        <IconFavoriteFill class="favoriteIcon" v-if="isLiked" />
        <IconFavorite class="favoriteIcon" v-else />
      </Button>
    </Box>
  </Box>
</template>

<script>
// elements
import Box from './Elements/Box'
import Image from './Elements/Image'
import Text from './Elements/Text'
import Button from './Elements/Button'

// icons
import IconFavorite from './Icons/Favorite.vue'
import IconFavoriteFill from './Icons/FavoriteFill.vue'

export default {
  name: 'NFTCard',
  components: {
    Box,
    Image,
    Text,
    Button,
    IconFavorite,
    IconFavoriteFill
  },
  props: {
    liked: {
      type: Boolean,
      default: false
    },
    nft: {
      type: Object
    }
  },
  data: function () {
    return {
      isLiked: this.liked
    }
  },
  methods: {
    like: function () {
      this.isLiked = !this.isLiked
    }
  }
}
</script>

<style scoped>
.ntfcard {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
}
.leftContent {
  display: flex;
  background-color: transparent;
}
.nftImage {
  border: 1px solid var(--c-black);
  border-radius: 10px;
  width: 158px;
}
.midContent {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 10px;
  margin-right: 10px;
  word-break: break-all;
  white-space: pre-wrap;
}
.nftName {
  font-family: SFProDisplay-SemiBold;
}
.title {
  color: var(--c-blue);
}
.description {
  margin-top: 5px;
}
.rightContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 0;
}
.favoriteIcon {
  color: var(--c-blue);
}
</style>
