<template>
    <h2>这是父组件</h2>
    <common-nav :msg="msg"></common-nav>
</template>

<script>
import CommonNav from './CommonNav.vue';
export default {
    data() {
        return {
            msg: '这是子组件的数据'
        }
    },
    components: {
        CommonNav
    }
}
</script>