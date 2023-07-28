<template>
    这是子组件1
    <button @click="emitMsg">点击向兄弟节点发消息</button>
</template>

<script>
    import emitter from '@/assets/mitt'
    export default {
        data() {
            return {
                msg: '子组件1数据',
            }
        },
        methods: {
            emitMsg() {
                emitter.emit('biu', this.msg)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>