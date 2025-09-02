

export default {
  pages: [
    "pages/index/index",
    "pages/vote/index"
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
    selectedColor: "#000",
    backgroundColor: "#0E57A3",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页"
      },
      {
        pagePath: "pages/vote/index",
        text: "投票"
      }
    ],
  }
}
