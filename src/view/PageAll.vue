<template>
  <v-app>
    <Menu />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Menu from "@/view/main_menu/Menu";
export default {
  name: "PageAll",
  components: {
    Menu
  }
}
</script>

<style scoped>

</style>
