<template>
  <v-dialog max-width="600" v-model="dialog">
    <template v-slot:activator="{ on, attrs }"
      ><v-btn text v-bind="attrs" v-on="on" class="success"
        >Add new project</v-btn
      >
    </template>
    <v-card
      ><v-card-title>Add a new Project</v-card-title>
      <v-card-text
        ><v-form class="px-3" ref="form"
          ><v-text-field
            label="Title"
            v-model="title"
            prepend-icon="fa-folder"
            :rules="inputRules"
          ></v-text-field
          ><v-textarea
            label="Information"
            v-model="content"
            prepend-icon="fa-edit"
            :rules="inputRules"
          ></v-textarea>

          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="due"
            transition="scale-transition"
            offset-y
            min-width="290px"
            ><template v-slot:activator="{ on, attrs }"
              ><v-text-field
                label="Due date"
                prepend-icon="fa-calendar-alt"
                v-bind="attrs"
                v-on="on"
                v-model="formattedDate"
                :rules="inputRules"
              ></v-text-field></template
            ><v-date-picker v-model="due" scrollable
              ><v-spacer></v-spacer
              ><v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(due)"
                >OK</v-btn
              ></v-date-picker
            >
          </v-menu>

          <v-btn
            @click="submit"
            text
            class="success mx-0 mt-3"
            :loading="loading"
            >Add project</v-btn
          ></v-form
        ></v-card-text
      >
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import db from "../fb";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      menu: false,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: this.formattedDate,
          person: "Francis Paterno",
          status: "ongoing",
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("project-added");
          });
      }
    },
  },
  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "do MMM yyyy") : "";
    },
  },
};
</script>

<style></style>
