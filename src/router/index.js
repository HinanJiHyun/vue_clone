import {createRouter, createWebHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Notifications from '../pages/Notifications.vue'
import Messages from '../pages/Messages.vue'
import Profile from '../pages/Profile.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import store from '../store'

const routes = [
  { path: '/', name: 'home', component: Home, title: '홈', icon: 'fas fa-home fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true}},
  { path: '/', name: 'explore', component: Home, title: '탐색하기', icon: 'fas fa-hashtag fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true}},
  { path: '/notifications', name: 'notification', component: Notifications, title: '알림', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true}},
  { path: '/messages', name: 'messages', component: Messages, title: '쪽지', icon: 'far fa-envelope fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true}},
  { path: '/', name: 'bookmarks', component: Home, title: '북마크', icon: 'far fa-bookmark fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true}},
  { path: '/', name: 'list', component: Home, title: '리스트', icon: 'fas fa-list fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true}},
  { path: '/profile', name: 'profile', component: Profile, title: '프로필', icon: 'far fa-user fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true}},
  { path: '/', name: 'more', component: Home, title: '더보기', icon: 'fas fa-ellipsis-h fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true}},
  { path: '/register', name: 'register',component: Register, meta: { isMenu: false, layout: 'EmptyLayout'}},
  { path: '/login', name: 'login',component: Login, meta: { isMenu: false, layout: 'EmptyLayout'}},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//navigation guard
//vuex 사용 : vue 어플리케이션에서 사용 할수있는 공통 저장소
router.beforeEach((to, from, next) => {
  const currentUser = store.state.user
  const requireAuth = to.matched.some((record) => record.meta.requireAuth)
  console.log(store.state.user)
  // not authenticated
  if(requireAuth && !currentUser){
    // router.push('/login')
    next('/login')
  }else{
    // authenticated
    next()
  }
})

export default router

{/* <router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
<i class="fas fa-hashtag fa-fw text-2xl"></i>
<span class="ml-5 text-lg hidden xl:inline-block">탐색하기</span>
</router-link>

<router-link to="/notifications" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
<i class="far fa-bell fa-fw text-2xl"></i>
<span class="ml-5 text-lg hidden xl:inline-block">알림</span>
</router-link>

<router-link to="/messages" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
<i class="far fa-envelope fa-fw text-2xl"></i>
<span class="ml-5 text-lg hidden xl:inline-block">쪽지</span>
</router-link>

<router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
<i class="far fa-bookmark fa-fw text-2xl"></i>
<span class="ml-5 text-lg hidden xl:inline-block">북마크</span>
</router-link>

<router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
<i class="fas fa-list fa-fw text-2xl"></i>
<span class="ml-5 text-lg hidden xl:inline-block">리스트</span>
</router-link>

<router-link to="/profile" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
<i class="far fa-user fa-fw text-2xl"></i>
<span class="ml-5 text-lg hidden xl:inline-block">프로필</span>
</router-link>

<router-link to="/" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full">
<i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
<span class="ml-5 text-lg hidden xl:inline-block">더보기</span>
</router-link> */}