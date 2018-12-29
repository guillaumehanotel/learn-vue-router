import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

require(['../components/PageD.vue'], function (PageD) {
    console.log(PageD)
})


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'root',
            component: HelloWorld
        },
        {
            path: '/a',
            name: 'a',
            // ajax
            component: resolve => require(['../components/PageA'], resolve),

            children: [
                {
                    path: '/b',
                    name: 'a.b',
                    component: require('../components/PageB').default
                },
                {
                    path: '/c',
                    name: 'a.c',
                    component: require('../components/PageC').default
                }
            ]
        },
        {
            path: '/b',
            name: 'b',
            component: require('../components/PageB').default
        },
        {
            path: '/c',
            name: 'c',
            component: require('../components/PageC').default
        },
        {
            path: '*',
            redirect: '/'
        },

    ]
})


/*

,
        {
            path: '/article/:id(\\d+)',
            component: require('../components/PageA').default,
            name: 'post',
}
 */