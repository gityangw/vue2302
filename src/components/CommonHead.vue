<template>
    <h2>这是父组件</h2>
    {{ msg }}
    <hr>
    <common-nav @biu="fn"></common-nav>
</template>

<script>
import CommonNav from './CommonNav.vue';
export default {
    data() {
        return {
            msg: '111'
        }
    },
    methods: {
        fn(msg) {
            console.log('收到了消息', msg);
            this.msg = msg
        }
    },
    components: {
      CommonNav
    }
}
</script>