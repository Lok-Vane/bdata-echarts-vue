import Vue from 'vue'
import VueRouter from 'vue-router'
import BdataEcharts from '../views/bdata-echarts.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/bdataecharts',
        name: 'BdataEcharts',
        component: BdataEcharts
    },
    {
        path: '**',
        redirect: '/bdataecharts'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router