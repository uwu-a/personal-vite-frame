import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { defineComponent } from 'vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: defineComponent({ template: '<div>PlaceHolder</div>' })
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
