<template>
  <div class="chart" ref="chart"></div>
</template>

<script>
export default {
  name: 'mychart',
  props: {
    options: {
      type: Object,
      required: true,
    }
  },
  methods: {
    EChartsSetting () {
      const echart = this.$echarts.init(this.$refs.chart);
      echart.setOption(this.options);
      window.addEventListener('resize', () => {
        echart.resize();
      });
    }
  },
  mounted () {
    this.EChartsSetting();
  },
  watch: {
    "options": {
      handler: function () {
        this.EChartsSetting();
      },
      deep: true
    }
  },
}
</script>

