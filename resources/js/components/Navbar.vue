<template>
  <nav>
    <v-app-bar flat dense app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }"
          ><v-btn text color="grey" v-bind="attrs" v-on="on"
            ><v-icon left>fa-caret-down</v-icon><span>Menu</span></v-btn
          >
        </template>
        <v-list
          ><v-list-item
            v-for="link in links"
            :key="link.text"
            route
            :to="link.route"
            ><v-list-item-title>{{ link.text }}</v-list-item-title></v-list-item
          ></v-list
        >
      </v-menu>
      <v-btn text color="grey"
        ><span>Sign Out </span><v-icon right>fa-sign-out-alt</v-icon></v-btn
      >
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center
        ><v-flex flex-column class="mt-5"
          ><v-avatar size="100"
            ><img src="/images/avatar1.png" alt=""
          /></v-avatar>
          <p class="subheading white--text mt-1">The Net Ninja</p></v-flex
        >
        <v-flex class="mt-4 mb-3"><Popup /></v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          route
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content></v-list-item
        ></v-list
      >
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "fa-tachometer-alt", text: "Dashboard", route: "/" },
        { icon: "fa-folder", text: "My Projects", route: "/projects" },
        { icon: "fa-user", text: "Team", route: "/team" },
      ],
    };
  },
  components: { Popup },
};
</script>

<style></style>
