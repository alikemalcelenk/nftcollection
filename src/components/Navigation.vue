<template>
  <router-link to="/favorites" class="routerLink">
    <Button :class="'button' + (selected && ' selectedButton')">
      Favorites
    </Button>
  </router-link>
</template>

<script>
// elements
import Button from './Elements/Button.vue'

export default {
  name: 'Navigation',
  components: {
    Button
  },
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.routerLink {
  text-decoration: none;
}

.button {
  padding: 10px 25px 10px 25px;
  border-radius: 5px;
  cursor: pointer;
}

.selectedButton {
  color: var(--c-blue);
}

@media (hover: hover) and (pointer: fine) {
  .button:hover {
    background-color: var(--c-blue-10);
    color: var(--c-blue);
  }
}
</style>
