<script setup lang="ts"></script>

<template>
  <section class="section-padding">
    <div class="container">
      <div class="video__inner">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=0iBIanGxunrO23I3"
          title="YouTube video player"
          frameborder="0"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
  <!-- allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" -->
</template>

<style lang="scss" scoped>
.video__inner {
  display: flex;
  justify-content: center;
  align-items: center;
}
iframe {
  width: 100%;
  height: 100%;
  max-width: 700px;
  max-height: 345px;

  aspect-ratio: 2/1;
}
</style>
