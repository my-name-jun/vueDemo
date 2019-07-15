import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FirstPart from '@/components/HomeComponents/FirstPart'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
            children: [{
                path: '/',
                name: 'FirstPart',
                component: FirstPart
            }]
        },
        {
            path: '/FirstPart',
            name: 'FirstPart',
            component: FirstPart
        },
    ]
})