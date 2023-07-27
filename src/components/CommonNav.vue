<template>
    这是子组件
    {{ msg }}
</template>

<script>
    export default {
        props: ['msg'],
        mounted(){
            console.log(this);
        }
    }
</script>

<style lang="scss" scoped>

</style>