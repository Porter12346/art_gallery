<script setup>
import { computed, onMounted } from 'vue';
import { artsService } from '../services/ArtsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { RouterLink } from 'vue-router';

onMounted(() => {if(!AppState.arts){getArts()}AppState.activeArt=null})

const arts = computed(() => AppState.arts)

const page = computed(() => AppState.page)

async function getArts() {
  try {
    await artsService.getArts(page.value)
  } catch (error) {
    console.log(error);
    Pop.toast(error)
  }

}

</script>

<template>
  <div>
    <h1 class="text-center">Art Gallery</h1>
  </div>
  <div class="grid">
    <div v-for="art in arts" :key="art.id" class="item">
      <RouterLink :to="{name:'art details', params: {id: art.id}}">
      <img class="img-fluid" :src="art.urlNormal" alt="">
      <!-- <p>{{art.description}}</p> -->
    </RouterLink>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <button @click="getArts" class="btn btn-primary px-5 m-2">Load more</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

img {
  width: 100%;
}

.grid {
  columns: 18rem;
  gap: 0;
  counter-reset: grid;
}

.item {
  break-inside: avoid;
  padding: 0.5rem;
  border-radius: 0.75rem;
  width: 100%;
}

// .item::before {
//   counter-increment: grid;
//   content: counter(grid);
// }
</style>
