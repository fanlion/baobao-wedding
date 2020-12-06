export default {
  pages: [
    // 'pages/splash/index',
    'pages/home/index',
    'pages/bless/index',
    'pages/map/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#CD96CD',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: 'assets/image/tab/ic_home_normal.png',
        selectedIconPath: 'assets/image/tab/ic_home_select.png',
        text: '首页'
      },
      {
        pagePath: 'pages/map/index',
        iconPath: 'assets/image/tab/ic_nav_normal.png',
        selectedIconPath: 'assets/image/tab/ic_nav_select.png',
        text: '导航'
      },
      {
        pagePath: 'pages/bless/index',
        iconPath: 'assets/image/tab/ic_heart_normal.png',
        selectedIconPath: 'assets/image/tab/ic_heart_select.png',
        text: '祝福'
      },
      {
        pagePath: 'pages/my/index',
        iconPath: 'assets/image/tab/meme-normal@2x.png',
        selectedIconPath: 'assets/image/tab/me-selected@2x.png',
        text: '我的'
      }
    ]
    // position: "bottom",
    // selectedColor: "#CD96CD",
    // backgroundColor: "#fff",
    // color: "#5f5f5f"
  }
};
