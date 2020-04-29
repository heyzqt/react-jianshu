import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "热会热点",
      imgUrl:
        "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png"
    },
    {
      id: 2,
      title: "教育",
      imgUrl:
        "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png"
    }
  ],
  articleList: [
    {
      id: "article1",
      title: "一个人是否值得交往，看这四点就够了",
      description:
        "有人说：“不必把太多人请进生命里，若他们走进不了你的内心，就只会把你的生命搅扰得拥挤不堪。” 朋友不必多，贵在能知心。珍贵的情谊，要留给最值得结",
      info: "一气浩然  147  1499  2",
      imgUrl: "",
      linkUrl: "https://www.jianshu.com/p/e5afb458af65"
    },
    {
      id: "article2",
      title: "李嘉欣与8岁儿子共浴，当亲情越过界限，对孩子更多的是“伤害”",
      description:
        "父母永远都是孩子最亲近的人，特别是妈妈从怀孕到生孩子这个过程，她们给了孩子生命，同时也时刻守护着孩子们的成长。 绝大多数情况下，妈妈和孩子都是最...",
      info: "灵双儿  302  1851",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/11864358-2c5f48f03dffb247.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      linkUrl: "https://www.jianshu.com/p/e86c6f35c556"
    },
    {
      id: "article3",
      title: "2020如果你还想做自媒体，这些坑我建议你一定不要踩！",
      description:
        "1.内容定位 如果你在准备做自媒体的时候，没有想好自己要做的内容，而是东做一个西做一个，没有专注某一领域的内容，最终的结果就是浪费了很多时间和精...",
      info: "沐夕加油站  117  1446  1",
      imgUrl:
        "https://upload-images.jianshu.io/upload_images/6171276-3304c2681c7b7995.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      linkUrl: "https://www.jianshu.com/p/f5c5ede490be"
    }
  ],
  recommendList: [
    {
      id: "recommend1",
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png",
      href: "/"
    },
    {
      id: "recommend2",
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
      href: "/"
    },
    {
      id: "recommend3",
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
      href: "/"
    },
    {
      id: "recommend4",
      imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png",
      href: "/"
    }
  ],
  writerList: [
    {
      id: "writer1",
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "董克平日记",
      description: "写了938.5k字 · 3.6k喜欢"
    },
    {
      id: "writer2",
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "卢璐说",
      description: "写了1530.7k字 · 31.6k喜欢"
    },
    {
      id: "writer3",
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "乔汉童",
      description: "写了356k字 · 2k喜欢"
    },
    {
      id: "writer4",
      imgUrl: "https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "简书钻首席小管家",
      description: "写了364.9k字 · 170k喜欢"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
