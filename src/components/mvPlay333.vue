<template>
  <div class="play">
    <div style="height: 50px"></div>
    <!-- html中的原生播放器实现MV视频的播放 -->
    <!-- <video :src="this.videoPlay" controls="controls" class="play"></video> -->

    <div class="demo">
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      >
      </video-player>
    </div>

    <div id="mvInfo">
      <span id="name">{{ mvDetail.name }}</span
      ><br />
      <span id="artistName">歌手：{{ mvDetail.artistName }}</span>

      <!-- 最开始的时候，因为没有将数字转为万的函数封装为一个独立的方法，所以在此测试一下转化的方法 -->
      <!-- <span id="playCount">播放：{{ (mvDetail.playCount)/10000 + '万' }}</span
    ><br /> -->

      <span id="playCount">播放：{{ $dataFormat(mvDetail.playCount) }}</span
      ><br />

      <span id="publishTime">发行时间：{{ mvDetail.publishTime }}</span>
      <span id="subCount"
        ><img src="../assets/img/点赞.png" alt="" />喜欢：{{
          mvDetail.subCount
        }}</span
      >
    </div>
  </div>
</template>

<script>
import { getvideodata } from "api/home";
import { getMvcomment } from "api/home";
import { mvDetail } from "api/home";

export default {
  name: "mvPlay",
  components: {},
  data() {
    return {
      videoPlay: [],
      comment: [],
      mvDetail: [],
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: true, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            //type: "application/x-mpegURL", // 类型
            type: "video/mp4",
            //src: "http://vodkgeyttp8.vod.126.net/cloudmusic/MTI5MDc0OTc=/f03666847973acb4a20edc3c4e32e819/7e913582545642c10ee571f0d9fbd315.mp4?wsSecret=fdefd84a7bab5fb036d0bada8453d568&wsTime=1623553783" // url地址
            src: "",
          },
        ],
        poster: "", // 封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true, // 是否显示全屏按钮
        },
      },
    };
  },
  props: ["myMvId"],
  created() {
    getvideodata(this.myMvId).then((res) => {
      console.log(res);
      this.videoPlay = res.data.url;
      this.playerOptions["sources"][0]["src"] = this.videoPlay;
    });
    getMvcomment(this.myMvId).then((res) => {
      console.log(res);
      this.comment = res;
    });
    mvDetail(this.myMvId).then((res) => {
      console.log(res);
      this.mvDetail = res.data;
    });
  },
  destroyed() {},
  methods: {},
};
</script>

<style scoped>
.play {
  width: 100%;
  height: 100%;
}
#mvInfo {
  padding: 8px;
}
#name {
  font-size: 30px;
  line-height: 50px;
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
#publishTime {
  font-size: 18px;
  color: gray;
  line-height: 40px;
}
#issue {
  font-size: 18px;
  color: gray;
}
#hot {
  font-size: 25px;
}
img {
  width: 50px;
  height: 40px;
  border-radius: 50%;
}
#subCount {
  float: right;
  font-size: 18px;
  color: gray;
}
#subCount img {
  width: 25px;
  height: 25px;
}
</style>


