// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes)
})

// router.beforeEach(async (to, from, next) => {
//   console.log(to.meta)
//   next()
// })

export default router
