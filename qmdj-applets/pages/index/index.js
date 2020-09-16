//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    loading: true,
    hideBanner: false,
    swiperList: ['../../images/swiper-1.jpg', '../../images/swiper-2.jpg', '../../images/swiper-3.jpg'],
    navList: [{
        name: "课程管理",
        icon: ""
      },
      {
        name: "会员中心",
        icon: ''
      },
      {
        name: '合伙人',
        icon: ''
      },
      {
        name: "个人中心",
        icon: "",
        link: "/pages/user/user"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //导航跳转
  handleRedirect(e) {
    let link = e.currentTarget.dataset['link']
    console.log(link)
    if (link) {
      wx.navigateTo({
        url: link
      })
    }
  },

  // 跳转到课程详情
  handleGotoCourseInfo(e) {
    let courseId = e.currentTarget.dataset['id']
    wx.redirectTo({
      url: '../course-info/index?id=' + courseId
    })
  },


  onLoad: function () {
    setTimeout(() => {
      this.setData({
        loading: false,
        hideBanner: true
      })
    }, 2000);
  },
})