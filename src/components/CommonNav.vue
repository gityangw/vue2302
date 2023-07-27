<template>
    这是子组件
    <!-- <button @click="a=100">修改a</button> -->
    {{ a }}
    {{ b }}
    {{ c }}
    {{ d }}
</template>

<script>
    export default {
        props: {
            a: String,
            b: [String,Number],
            c: {
                type: Array,
                required: true
            },
            d: {
                type: String,
                default: '默认值'
            },
            e: {
                validator: (value) => {
                return /^\w{2,5}$/.test(value)
                }
            },
        },
        mounted(){
            console.log(this);
        }
    }
</script>

<style lang="scss" scoped>

</style>