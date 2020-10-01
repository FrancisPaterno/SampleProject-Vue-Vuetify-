<template
    >
  <div class="projects">
    <v-subheader class="grey--text">Projects</v-subheader>

    <v-expansion-panels
      ><v-expansion-panel v-for="project in myprojects" :key="project.id"
        ><v-expansion-panel-header>{{
          project.title
        }}</v-expansion-panel-header>
        <v-expansion-panel-content
          ><v-card flat class="px-4 grey--text"
            ><div class="font-weight-bold">due by {{ project.due }}</div>
            <div>{{ project.content }}</div></v-card
          >
        </v-expansion-panel-content>
      </v-expansion-panel></v-expansion-panels
    >

    <v-container class="my-5" fluid> </v-container>
  </div>
</template>

<script>
import db from "../js/fb";
export default {
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    myprojects() {
      return this.projects.filter((project) => {
        return project.person === "Francis Paterno";
      });
    },
  },
  created() {
    db.collection("projects").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.projects.push({ ...change.doc.data(), id: change.doc.id });
        }
      });
    });
  },
};
</script>

<style></style>
