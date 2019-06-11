<template>
    <div>
        <button @click="increment">dianwo</button>
        <div>{{count}}</div>
    </div>
</template>

<script>
    // import { mapMutations } from 'vuex'
    import { createNamespacedHelpers } from 'vuex'
    const { mapState,mapMutations,mapActions } = createNamespacedHelpers('cart');
    console.log(mapMutations);
    export default {
        data:function(){
            return{
                aa:'1111',
                countNUm:0
            }
        },
        name: "chat",
        sockets: {
            connect: function () {
                console.log('socket connected')
            },
            customEmit: function (data) {
                console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
            }
        },
        methods: {
            sendMessage: (data) =>{
                // $socket is socket.io-client instance
                this.$socket.emit('test', this.aa)
            },
            /*increment(){
                this.$store._modules.root._children.cart.context.commit('increment');
                console.log();
            },*/
            ...mapActions([
                'increment'
            ])

        },
        computed:{
            count:function(){
                return this.$store._modules.root.state.cart.count;
                // this.$store._modules.root.state.cart
                console.log(this.$store);
                console.log(this.$store._modules);
                console.log(this.$store._modules.root.state);
                console.log(this.$store._modules.root.state.cart);
                console.log(this.$store._modules.root.state.cart.count);
                // return 11;
                // this.countNUm=this.$store;
            }
        }
    }

</script>

<style scoped>

</style>