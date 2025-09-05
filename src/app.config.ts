export default {
  pages: [
    "pages/index/index",
    "pages/vote/index",
    "pages/night/index",
    "pages/materials/index",
    "pages/video-detail/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: "custom"
  },
  tabBar:{
    custom: true,
    color: "#000",
    selectedColor: "#E57A3",
    backgroundColor: "#0E57A3",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页"
      },
      {
        pagePath: "pages/vote/index",
        text: "投票"
      },
      {
        pagePath: "pages/materials/index",
        text: "赛事资料"
      },
      {
        pagePath: "pages/night/index",
        text: "创作者之夜"
      },
    ],
  }
}
