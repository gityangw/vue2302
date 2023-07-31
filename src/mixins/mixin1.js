export default {
    data() {
        return {
            
            mas: 'hello'
        }
    },
    methods: {
        changeMsg() {
            this.msg='值改了'
        }
    },
    computed: {
        reverseMsg() {
            return this.msg.split('').reverse().join('')
        }
    },
}