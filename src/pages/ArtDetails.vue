<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { artsService } from '../services/ArtsService.js';
import { api } from '../services/AxiosService.js';

const route = useRoute()
const activeArt = computed(()=>AppState.activeArt)

onMounted(()=>getArtDetails())

async function getArtDetails() {
    try {
        const artId = route.params.id
        await artsService.getArtById(artId)
    } catch (error) {
        console.log(error)
    }
}

async function admireArt(){
    try {
        await artsService.admireActiveArt()
    } catch (error) {
        console.log(error)
    }
}

</script>


<template>
    <div v-if="activeArt" class="container-fluid">
        <div class="row">
            <div class="col-8">
                <img class="img-fluid img-sizing" :src="activeArt.urlLarge" alt="">
            </div>
            <div class="col-4">
                <p>{{ activeArt.description }}</p>
                <button @click="admireArt()" class="btn btn-primary">Admire</button>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
    .img-sizing{
        height: 88vh
    }
</style>