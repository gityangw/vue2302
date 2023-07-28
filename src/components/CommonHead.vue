<template>
    <h2>这是父组件</h2>
    
    <hr>
    <common-nav></common-nav>
    <hr>
    <common-nav2></common-nav2>
</template>

<script>
import CommonNav from './CommonNav.vue';
import CommonNav2 from './CommonNav2.vue';
export default {
   
    components: {
      CommonNav,
      CommonNav2,
    }
}
</script>