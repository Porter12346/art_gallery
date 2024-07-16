<script setup>

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Art Gallery</h1>
      </div>
      <div class="col-4">
        <div class="card">
          <img class="img-fluid"
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/4-bold-and-brash-squidward.jpg"
            alt="">
          <p>Ah yes now this is truly a work of art</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
