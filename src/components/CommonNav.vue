<template>
    这是子组件
    <button @click="emitMsg">点击向父通信</button>
</template>

<script>
    export default {
        data() {
            return {
                msg: '子组件数据',
                arr: [1,2,3],
                num:1
            }
        },
        methods: {
            emitMsg() {
                this.$emit('biu', this.msg)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>