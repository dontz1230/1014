<template>
    <div class="map-container">
        <!--田園美食屋地圖呈現-->
        <div class="google-map" id="map"></div>
    </div>
</template>

<script>
export default {
  name: "map",
  data() {
    return {
      map: null,
      lat: 24.9640598,
      lng: 121.1902643
    };
  },
  mounted() {
    this.initMap();
    this.setMarker();
  },
  methods: {
    // 建立地圖
    initMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 18,
        maxZoom: 20,
        minZoom: 10,
        streetViewControl: false,
        mapTypeControl: false
      });
    },
    // 建立地標
    setMarker() {
      const marker = new google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },
        map: this.map
      });
      // 創造訊息視窗
      const infowindow = new google.maps.InfoWindow({
        // 設定顯示的內容
        content: `
          <div class="map-content">
            <i class="fa fa-home fa-2x home"></i>
            <h2>田園美食屋</h2>
            <p>營業時間</p>
            <p>11:40 - 14:00</p>
            <p>17:00 - 20:00</p>
          </div>
        `
      });

      // 在地標上設定，點選marker的時候跳窗
      marker.addListener("click", () => {
        // 指定在哪個地圖和地標上開啟訊息視窗
        infowindow.open(this.map, marker);
      });
    }
  }
};
</script>

<style lang="scss">
    .map-container {
        max-width: 1200px;
        border: 1px solid #8b8b8b;
        border-radius: 10px;
        overflow: hidden;
        margin: auto;
    }
    .map-content {
        text-align: center;
        margin:auto;
        padding: 5px;
        h2, p, .home{
            margin-bottom: 5px;
        }
    }
    .google-map {
        width: 100%;
        height: 300px;
    }

@media screen and (max-width:768px){
    .map-container {
        max-width: calc(100% - 40px);
        border: 1px solid #8b8b8b;
        border-radius: 10px;
        overflow: hidden;
        margin: 0 auto;
    }
}

</style>