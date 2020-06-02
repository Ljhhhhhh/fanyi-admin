/** When your routing worker is too long, you can split it into small modules **/

import Layout from '@/layout'

const workerRouter = {
  path: '/worker',
  component: Layout,
  redirect: '/worker/list',
  name: 'worker',
  meta: {
    title: '翻译人员',
    icon: 'worker',
    roles: ['admin']
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/worker/example1'),
      name: 'workerExample1',
      meta: { title: '翻译人员' },
      roles: ['admin']
    },
    {
      path: ':id',
      component: () => import('@/views/worker/example2'),
      name: 'workerExample2',
      meta: { title: '案例二' },
      roles: ['admin']
    }
  ]
}
export default workerRouter
