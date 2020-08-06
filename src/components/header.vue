<template>
  <div id="showTime">
    <header>
      <h1>数据可视化-ECharts</h1>
      <div class="showTime" ref="showtime">加载中...</div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'myheader',
  mounted () {
    let ele = this.$refs.showtime;
    let timer = null;
    timer = setTimeout(time, 1000);
    function time () {
      clearTimeout(timer);
      const date = new Date();
      const tips = `当前时间：`;
      const temp = `${date.getFullYear()}-
              ${(date.getMonth() + 1).toString().padStart(2, '0')}-
              ${(date.getDate()).toString().padStart(2, '0')}`;
      ele.innerHTML = `${tips}${temp}
              ${(date.getHours()).toString().padStart(2, '0')}:
              ${(date.getMinutes()).toString().padStart(2, '0')}:
              ${(date.getSeconds()).toString().padStart(2, '0')}`;
      timer = setTimeout(time, 1000);
    }
  },
}
</script>

