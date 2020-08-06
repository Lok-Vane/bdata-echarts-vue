<template>
  <div class="home">
    <div class="echart" ref="echart"></div>
    <button @click="change">change</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
    }
  },
  methods: {
    getECheart () {
      let myChart = this.$echarts.init(this.$refs.echart);
      myChart.showLoading({
        text: '正在加载数据'
      });
      myChart.setOption(this.option);
      myChart.hideLoading();  //提示关闭
    },
    change () {
      this.option.series[0].data = [];
      for (var i = 0; i < 6; i++) {
        this.option.series[0].data.push(Math.round(Math.random() * 100))
      }
    }
  },
  mounted () {
    this.getECheart();
  },
  watch: {
    "option": {
      handler: function () {
        this.getECheart();
      },
      deep: true
    }
  },
}
</script>

<style scoped>
.echart {
  width: 500px;
  height: 300px;
}
</style>
