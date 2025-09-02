

export default {
  pages: [
    "pages/index/index",
    "pages/vote/index",
    "pages/data/index",
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
        pagePath: "pages/data/index",
        text: "赛事资料"
      },
    ],
  }
}
