const sampleRouter = [
    {
        path: "/",
        name: "sample",
        component: () => import("@/views/Sample.vue"),
    },
]

export default sampleRouter;