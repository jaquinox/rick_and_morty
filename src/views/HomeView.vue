<template>
  <main>
    <div class="flex justify-center items-center mt-8">
      <h1 class="text-5xl text-red-500">Rick y Morty</h1>
    </div>

    <div class="flex justify-center mt-5">

      <button @click="decrementPage" class="me-5 rounded-md bg-orange-800 px-10.5 py-2.5 text-sm size-30 text-white shadow-xs" ><spam class="text-5xl font-extrabold">-</spam></button>

      <p class="text-5xl font-extrabold"> {{ page }}</p>

      <button @click="incrementPage" class="ms-5 rounded-md bg-indigo-600 px-10.5 py-2.5 text-sm  size-30 text-white shadow-xs" ><spam class="text-5xl font-extrabold">+</spam></button>

    </div>



    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-4 mt-24 mx-10" >
      <div  v-for="character in characters" :key="characters.id"  class="rounded-2xl  overflow-hidden  shadow-2xl "  >
          <div @click="seeCharacterDetails(character.id)">
            <img :src="character.image" :alt="character.name"  class="" />
                  <div class="text-center">
                    {{ character.name }}
                  </div>                
          </div>    
      </div>
    </div>
  </main>


</template>

<script setup lang="ts">

    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const characters = ref([])
    const page:any = ref(1)

    const loadCharacters = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page.value}`)
      const data = await response.json()
      characters.value = data.results
      //console.log(characters.value)
    }

    onMounted(() => {
      loadCharacters()
    })

    const incrementPage = () => {
      page.value++
      loadCharacters()
    }

    const seeCharacterDetails = (character_id:number) => {
      router.push(`details/${character_id}`)
    }

    const decrementPage = () => {
      if(page.value > 1){
        page.value--
        loadCharacters()  
      }else{
        page.value = 1
        loadCharacters()
      }
    }


</script>
