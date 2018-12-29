<template>
    <div>

        <h1>Page A</h1>
        <p>{{ msg }}</p>
        <p>{{ $route.params.id }}</p>
        <ul>
            <router-link :to="{name: 'a.b'}">Voir la vue B</router-link>
            <router-link :to="{name: 'a.c'}">Voir la vue C</router-link>
        </ul>

        <h1>Sous vue</h1>
        <transition name="bounce" mode="out-in">
            <router-view></router-view>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "PageA",
        data(){
            return {
                msg: 'salut'
            }
        },
        beforeRouteLeave(){

        },
        beforeRouteEnter(to, from, next) {
            window.setTimeout(() => {
                next(vm => {
                    vm.msg = "ok"
                })
            }, 2000)

            /*
            let confirm = window.confirm("Are you sure ? (Page A)")
            if (confirm) {
                next()
            } else {
                next(false)
            }*/
        }
    }
</script>

<style scoped>

</style>