<template>
  <div>
    <myheader></myheader>
    <section class="main">
      <div class="column">
        <div class="panel bar">
          <h3>{{chartA.title}}</h3>
          <mychart :options="chartA.options"></mychart>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h3>
            {{chartB.title}}
            <a class="active" href="javascript:;">2019</a>
            <a href="javascript:;">2020</a>
          </h3>
          <mychart :options="chartB.options"></mychart>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h3>{{chartC.title}}</h3>
          <mychart :options="chartC.options"></mychart>
          <div class="panel-footer"></div>
        </div>
      </div>
      <div class="column">
        <div class="no">
          <div class="no-head">
            <ul>
              <li>123456789</li>
              <li>987654321</li>
            </ul>
          </div>
          <div class="no-foot">
            <ul>
              <li>当前需求</li>
              <li>市场供应</li>
            </ul>
          </div>
        </div>
        <div class="map">
          <mymap></mymap>
          <!-- <img src="@/assets/imgs/map.png" class="map1" />
          <img src="@/assets/imgs/lbx.png" class="map2" />
          <img src="@/assets/imgs/jt.png" class="map3" />-->
          <img class="map1" />
          <img class="map2" />
          <img class="map3" />
          <!-- <div class="map1"></div>
          <div class="map2"></div>
          <div class="map3"></div>-->
        </div>
      </div>
      <div class="column">
        <div class="panel bar">
          <h3>{{chartD.title}}</h3>
          <mychart :options="chartD.options"></mychart>
          <div class="panel-footer"></div>
        </div>
        <div class="panel line">
          <h3>{{chartE.title}}</h3>
          <mychart :options="chartE.options"></mychart>
          <div class="panel-footer"></div>
        </div>
        <div class="panel pie">
          <h3>{{chartF.title}}</h3>
          <mychart :options="chartF.options"></mychart>
          <div class="panel-footer"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./bdata-echarts.js"></script>
