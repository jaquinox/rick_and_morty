<template>
  <main>
    <div class="flex justify-center items-center mt-8">
      <h1 class="text-5xl text-red-500">Rick y Morty</h1>
    </div>

    <div class="grid grid-cols-6 justify-center gap-4 mt-24 mx-10" >
      <div v-for="character in characters" :key="characters.id"  class="rounded-2xl  overflow-hidden  shadow-2xl "  >
        <img :src="character.image" :alt="character.name"  class="" />
        <div class="text-center">
          {{ character.name }}
        </div>
        
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const characters = ref([])

const loadCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  const data = await response.json()

  characters.value = data.results

  console.log(characters.value)
}

onMounted(() => {
  loadCharacters()
})
</script>
