<template>
    <v-app>
        <Navbar />
        <v-main class="mx-4 mb-4 grey lighten-4"
            ><router-view></router-view
        ></v-main>
    </v-app>
</template>

<script>
import Navbar from "./js/components/Navbar";
export default {
    components: { Navbar }
};
</script>

<style></style>
