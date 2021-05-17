<template>
  <div class="home-page">
    <section class="real-time-info">
      <TitleSplit title="实时资讯"></TitleSplit>
      <ul class="info-ul">
        <li class="info-li-img">
          <div class="up">
            <el-image
                src="//12618670.s61i.faiusr.com/4/AD0IrpeCBhAEGAAg3bjizQUo5piuwwEw_gE4jAE.png"
                fit="fit"></el-image>
          </div>
          <dl class="down">
            <dt>财务记账集团立足诚信</dt>
            <dd>财务记账集团有限责任公司（以下简称“财务记账”）是中国财务记账的发祥地，是财务企业的重点发展...</dd>
          </dl>
        </li>
        <li class="info-li" v-for="n in 2" :key="n">
          <dl class="up">
            <dt>{{ infoList[(n-1)*2].title }}</dt>
            <dd>{{ infoList[(n-1)*2].content }}</dd>
          </dl>
          <dl class="down">
            <dt>{{ infoList[n*2-1].title }}</dt>
            <dd>{{ infoList[n*2-1].content }}</dd>
          </dl>
        </li>
      </ul>
    </section>
    <section class="img-container">
      <ul>
        <li class="img-box">
          <el-image
              src="//12618670.s61i.faiusr.com/2/AD0IrpeCBhACGAAg08iAxAUomrecyAQw4AM4_gE.jpg"
              fit="fit"></el-image>
        </li>
        <li class="text-box">
          <div class="title">一般纳税人代理记账</div>
          <div class="text">不同的公司所属的行业以及公司的规模都不同，所以具体的税种和税率要根据实际情况以及公司所在地相关法律法规而定。</div>
        </li>
      </ul>
      <div class="down-box">
        <div class="title">快速审核、优化提交流程、全程跟踪</div>
        <div class="text">全天候审核资料、急速上报国家商标局，让您以更快的速度拿到注册证</div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TitleSplit from '@/components/TitleSplit.vue'

export default {
  name: 'Home',
  components: {
    TitleSplit
  },
  data() {
    return {
      infoList: [
        {
          title: '为服装贸易知识产权上锁',
          content: '随着服装进出口贸易量的不断扩大，外贸经营权的进一步放开，服装进出口的模式也在不断变化，总体上看呈现多元化发展态势。...'
        },
        {
          title: '美国IBM公司购买专利以增加专利储备',
          content: '7月29日消息，据国外媒体报道，本月，面临着一系列知识产权案件威胁的谷歌公司又从美国IBM公司（Internati...'
        },
        {
          title: '为iPad松绑 麦博雅皮士让iPad游戏嗨起来',
          content: '曾几何时，游戏的主阵地曾是微软Xbox或索尼PlayStation等游戏机，但是随着iPad、iPhone等智能平...'
        },
        {
          title: '谷歌从IBM购买专利以增强知识产权储备',
          content: '新浪科技讯 北京时间7月29日下午消息，由于面临越来越多的知识产权诉讼威胁，谷歌本月已经从IBM购买了一批专利以扩...'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.home-page {
  section.real-time-info {
    .info-ul {
      display: flex;
      justify-content: space-between;

      & > li {
        width: 300px;
        text-align: left;
      }

      .info-li-img {
        div.up {
          padding-top: 20px;
        }

        dl {
          margin-top: 28px;

          dt {
            line-height: 28px;
            font-size: 16px;
            color: #333;
          }

          dd {
            font-size: 14px;
            color: #666;
          }
        }
      }

      .info-li {
        font-size: 14px;

        dl {
          height: 150px;

          &.up {
            margin-top: 8px;
            border-bottom: 1px solid #e5e5e5;
          }

          &.down {
            margin-top: 23px;
          }

          dt {
            line-height: 28px;
            color: #333;
          }

          dd {
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
  }

  section.img-container {

  }
}
</style>
