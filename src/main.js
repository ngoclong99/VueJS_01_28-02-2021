import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// import từ file App.vue
// Tạp vue object
// sau đó mount vào nơi có ID = 'app' -> tại App.vue (gắn app trên trang html)
new Vue({
    render: (h) => h(App),
}).$mount("#app"); //
