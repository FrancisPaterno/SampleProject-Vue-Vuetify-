<template>
  <v-dialog max-width="600">
    <template v-slot:activator="{ on, attrs }"
      ><v-btn text v-bind="attrs" v-on="on" class="success"
        >Add new project</v-btn
      >
    </template>
    <v-card><v-card-title>Add a new Project</v-card-title></v-card>
  </v-dialog>
</template>

<script>
export default {};
</script>

<style>
</style>