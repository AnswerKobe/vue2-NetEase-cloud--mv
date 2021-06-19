<template>
  <div class="comment">
    <div>
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >
        精彩评论
      </van-divider>
      <div class="issue" v-for="item in comment.hotComments" :key="item.id">
        <img :src="item.user.avatarUrl" alt="" />
        <span class="nickname">{{ item.user.nickname }}</span
        >&nbsp;&nbsp;&nbsp;
        <span class="time">{{ getLocalTime(item.time) }}</span
        ><br />
        <span>{{ item.content }}</span>
        <hr style="border: 0; background-color: #f5f5f5; height: 1px" />
      </div>
    </div>

    <div>
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >
        热门评论：{{ comment.total }}
      </van-divider>
      <div class="issue" v-for="item in comment.comments" :key="item.id">
        <img :src="item.user.avatarUrl" alt="" />
        <span class="nickname">{{ item.user.nickname }}</span>
        <span class="time">{{ getLocalTime(item.time) }}</span
        ><br />
        <span>{{ item.content }}</span>
        <hr style="border: 0; background-color: #f5f5f5; height: 1px" />
      </div>
    </div>
    <div style="height: 60px"></div>
  </div>
</template>

<script>
import { getMvcomment } from "api/home";

export default {
  name: "comment",
  components: {},
  data() {
    return {
      comment: [],
    };
  },
  props: ["myComment"],
  created() {
    getMvcomment(this.myComment).then((res) => {
      console.log(res);
      this.comment = res;
    });
  },
  methods: {
    /*  
    parseInt() 函数可解析一个字符串，并返回一个整数。
    js中时间操作单位是毫秒。
   toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
   replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
   replace(/:\d{1,2}$/,' ')验证替换以：开始有一位或二位数字的结束字符串，就是秒；替换为空.
  */
    getLocalTime(nS) {
      return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/, " ");
    },
  },
};
</script>

<style scoped>
.van-divider {
  font-size: 20px;
}
.play {
  width: 100%;
  height: 100%;
}
.comment {
  padding: 8px;
}
#name {
  font-size: 30px;
}
#artistName {
  font-size: 22px;
  color: cornflowerblue;
}
#playCount {
  font-size: 18px;
  color: gray;
  float: right;
}
.issue {
  margin: 12px;
  font-size: 18px;
  color: gray;
  line-height: 30px;
}
#hot {
  font-size: 25px;
}
img {
  width: 50px;
  height: 40px;
  border-radius: 50%;
}
.nickname {
  padding: 10px;
  color: black;
}
.time {
  color: black;
}
</style>
