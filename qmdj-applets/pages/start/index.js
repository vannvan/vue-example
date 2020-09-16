Page({
  data: {
    //
  },
  onLoad: function () {
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/index/index',
      });
    }, 3000);
  }
})