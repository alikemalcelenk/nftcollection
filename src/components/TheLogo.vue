<template>
  <router-link to="/" class="routerLink">
    <Box class="logo">
      <IconLogo class="logoSvg" />
      <Text class="name">NftCollection</Text>
    </Box>
  </router-link>
</template>

<script>
// elements
import Box from './Elements/Box'
import Text from './Elements/Text'

// icons
import IconLogo from './Icons/Logo.vue'

export default {
  name: 'TheLogo',
  components: {
    Box,
    Text,
    IconLogo
  }
}
</script>

<style scoped>
.routerLink {
  text-decoration: none;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  cursor: pointer;
}
.name {
  font-family: SFProDisplay-SemiBold;
  font-size: 18px;
  margin-left: 10px;
  color: var(--c-black);
}
.logoSvg {
  color: var(--c-blue);
  width: 40px;
  height: 40px;
}
</style>
