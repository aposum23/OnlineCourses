import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from 'vue-router';
import CourseList from "@/views/pages/courseList/CourseList.vue";
import CreateCourse from "@/views/pages/createCourse/CreateCourse.vue";
import StepOne from "@/views/pages/createCourse/stepOne/StepOne.vue";
import StepTwo from "@/views/pages/createCourse/stepTwo/StepTwo.vue";
import StepThree from "@/views/pages/createCourse/stepThree/StepThree.vue";
import UserProfile from "@/views/pages/userProfile/UserProfile.vue";
import MyCourses from "@/views/pages/myCourses/MyCourses.vue";
import CourseMonitoring from "@/views/pages/monitoring/CourseMonitoring.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        meta: {transition: 'fade'},
        component: CourseList,
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {transition: 'fade'},
        component: UserProfile,
    },
    {
        path: '/my-courses',
        name: 'myCourses',
        meta: {transition: 'fade'},
        component: MyCourses,
    },
    {
      path: '/create-course',
      name: 'createCourse',
      meta: {transition: 'fade'},
      redirect: {name: 'stepOne'},
      component: CreateCourse,
      children: [
          {
              path: 'step-one',
              name: 'stepOne',
              meta: {transition: 'fade'},
              component: StepOne
          },
          {
              path: 'step-two',
              name: 'stepTwo',
              meta: {transition: 'fade'},
              component: StepTwo
          },
          {
              path: 'step-three',
              name: 'stepThree',
              meta: {transition: 'fade'},
              component: StepThree
          }
      ]
    },
    {
        path: '/monitoring',
        name: 'monitoring',
        meta: {transition: 'fade'},
        component: CourseMonitoring,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('@/views/pages/NotFoundPage/NotFoundPage.vue')
    }
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
