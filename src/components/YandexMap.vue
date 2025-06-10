<script setup lang="ts">
const coordinates: [number, number] = [55.55194, 37.557197]

ymaps.ready(init)
function init() {
  const myMap = new ymaps.Map('map', {
    center: coordinates, // Москва
    zoom: 16,
    controls: ['zoomControl'],
  })

  const myPlacemark = new ymaps.Placemark(
    coordinates,
    {
      hintContent: 'Метка',
      balloonContent: 'Это Москва',
    },
    {
      preset: 'islands#icon',
      iconColor: '#0095b6',
    },
  )

  myMap.geoObjects.add(myPlacemark)
}
</script>

<template>
  <div id="map" style="width: 100%; height: 400px"></div>
</template>

<style lang="scss" scoped></style>
