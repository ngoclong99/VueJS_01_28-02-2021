<template>
    <div id="app">
        <!-- Sử dụng sau khi khai báo -->
        <Menu></Menu>
        
    </div>
</template>

<script>
// import
import Menu from "./components/Menu.vue";

export default {
    name: "App",
    // Danh sách component
    components: {
        // Khai báo 
        Menu
    },
};
</script>

<style>
#app {
    color: #2c3e50;
    margin-top: 60px;
}
</style>
