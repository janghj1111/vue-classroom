const sampleRouter = [
    {
        path: "/",
        name: "sample",
        meta: { authRequired: true },
        component: () => import("@/views/sample/Sample.vue"),
    },
]

export default sampleRouter;