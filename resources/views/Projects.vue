<template
    >
  <div class="projects">
    <v-subheader class="grey--text">Projects</v-subheader>

    <v-expansion-panels
      ><v-expansion-panel v-for="project in myprojects" :key="project.title"
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
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem natus possimus corrupti, repellat sequi non. Suscipit pariatur, ab molestias, nemo nam dolor minus harum optio iste maxime sunt similique?",
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem natus possimus corrupti, repellat sequi non. Suscipit pariatur, ab molestias, nemo nam dolor minus harum optio iste maxime sunt similique?",
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem natus possimus corrupti, repellat sequi non. Suscipit pariatur, ab molestias, nemo nam dolor minus harum optio iste maxime sunt similique?",
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem natus possimus corrupti, repellat sequi non. Suscipit pariatur, ab molestias, nemo nam dolor minus harum optio iste maxime sunt similique?",
        },
      ],
    };
  },
  computed: {
    myprojects() {
      return this.projects.filter((project) => {
        return project.person === "The Net Ninja";
      });
    },
  },
};
</script>

<style></style>
