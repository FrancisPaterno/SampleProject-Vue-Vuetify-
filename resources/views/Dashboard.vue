<template>
  <div class="dashboard" height="100%">
    <v-subheader class="grey--text">Dashboard</v-subheader>
    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>fa-folder</v-icon>
              <span class="caption text-lowercase">By project</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left small>fa-user-alt</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.id">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6 flex-column>
            <div class="caption grey--text">{{ project.title }}</div>
            <div>{{ project.content }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 flex-column>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 flex-column>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2 class="d-flex justify-end">
            <div class="mr-5">
              <v-chip
                small
                :class="`white--text caption my-2 v-chip--${project.status}`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
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
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
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

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.v-chip--no-color.theme--light.v-size--small.white--text.caption.my-2.v-chip--complete {
  background: #3cd1c2;
}
.v-chip.v-chip--no-color.theme--light.v-size--small.white--text.caption.my-2.v-chip--ongoing {
  background: orange;
}
.v-chip.v-chip--no-color.theme--light.v-size--small.white--text.caption.my-2.v-chip--overdue {
  background: tomato;
}
</style>
