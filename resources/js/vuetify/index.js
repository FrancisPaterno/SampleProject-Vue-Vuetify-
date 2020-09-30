import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "fa"
    },
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: "#9652ff",
                success: "#3cd1c2",
                info: "#ffaa2c",
                error: "#f83e70"
            }
        }
    }
});
