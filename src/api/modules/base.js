export default [
  {
    //获取平台基础信息
    name: 'getPlatformInfo',
    path: '/api/v1/platform',
    method: 'get'
  },
  {
    //生成token
    name: 'getToken',
    path: '/api/v1/token',
    method: 'post'
  },
  {
    //获取红包列表
    name: 'redPacks',
    path: '/api/v1/redpacks',
    method: 'get'
  },
  {
    //获取轮播列表
    name: 'Banners',
    path: '/api/v1/banners',
    method: 'get'
  },
  {
    //获取公告列表
    name: 'Announcements',
    path: '/api/v1/announcements',
    method: 'get'
  },
  {
    //获取佣金记录
    name: 'Records',
    path: '/api/v1/cms/records',
    method: 'get'
  },
  {
    //获取积分记录
    name: 'scoreRecords',
    path: '/api/v1/score/records',
    method: 'get'
  },
  {
    //领取红包
    name: 'getredPacks',
    path: '/api/v1/redpacks',
    method: 'post'
  },
  // {
  //   //邀请列表
  //   name: 'getredPacks',
  //   path: '/api/cms/records',
  //   method: 'post'
  // },
]
