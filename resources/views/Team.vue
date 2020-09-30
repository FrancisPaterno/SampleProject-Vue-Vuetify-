<template
    >
  <div class="team">
    <v-subheader class="grey--text">Team</v-subheader>
    <v-container class="my-5">
      <v-layout row
        ><v-flex
          xs12
          sm6
          md4
          lg3
          v-for="person in team"
          :key="person.name"
          class="my-3"
        >
          <v-card text class="text-xs-center ma-3" width="100%" height="100%"
            ><v-responsive class="pt-4"
              ><v-avatar size="100" class="grey lighten-2"
                ><img :src="person.avatar" /></v-avatar
            ></v-responsive>
            <v-card-text
              ><div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div></v-card-text
            ><v-card-actions
              ><v-btn text color="grey"
                ><v-icon small left>fa-comment-dots</v-icon>
                <span>Message</span></v-btn
              ></v-card-actions
            >
          </v-card>
        </v-flex></v-layout
      >
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "/images/avatar1.png",
        },
        { name: "Ryu", role: "Grahic designer", avatar: "/images/avatar2.png" },
        {
          name: "Chun Li",
          role: "Web Developer",
          avatar: "/images/avatar3.png",
        },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/images/avatar4.png",
        },
        { name: "Yoshi", role: "Sales guru", avatar: "/images/avatar5.png" },
      ],
    };
  },
};
</script>

<style></style>
