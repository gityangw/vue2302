<template>
   这是子组件2
   {{ msg }}
</template>

<script>
    import emitter from '@/assets/mitt'
    export default {
        data() {
            return {
                msg: ''
            }
        },
        mounted(){
        emitter.on('biu', function(msg){
        console.log('我收到兄弟的通信', msg);
        console.log(this);
        this.msg = msg;
    }.bind(this))
  }
    }
</script>

<style lang="scss" scoped>

</style>