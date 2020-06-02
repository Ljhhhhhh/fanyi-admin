/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/list',
  name: 'User',
  meta: {
    title: '用户管理',
    icon: 'user'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/user'),
      name: 'UserList',
      meta: { title: '用户管理' }
    }
  ]
}
export default userRouter
