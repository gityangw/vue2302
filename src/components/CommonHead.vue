<template>
    <h2>这是父组件</h2>
    <common-nav :a="10" :c="[1,2,3]" e="as"></common-nav>
</template>

<script>
import CommonNav from './CommonNav.vue';
export default {
    data() {
        return {
            msg: '这是父组件的数据'
        }
    },
    components: {
        CommonNav
    },

}
</script>