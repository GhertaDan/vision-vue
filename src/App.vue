<template>
  <my-header></my-header>
  <router-view></router-view>
  <my-footer></my-footer>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
export default {
  name: "app",
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="scss">
</style>
