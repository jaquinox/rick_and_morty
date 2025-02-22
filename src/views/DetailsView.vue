
<template>

<main>

    <!--
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-4 mt-24 mx-10" >
      <div  class="rounded-2xl  overflow-hidden  shadow-2xl "  >
          <div >
            <img :src="character.image" :alt="character.name"  class="" />
                  <div class="text-center">
                    {{ character.name }}
                  </div>                
          </div>    
      </div>
    </div>

-->


    <div v-if="character">

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-center gap-4 mt-24 " >
          <div  class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 rounded-2xl  overflow-hidden  min-h-96 "  >
              
            <div  class=" lg:m-auto mb-5 justify-center rounded-2xl  overflow-hidden  shadow-2xl lg:w-xl">
                  <img :src="character.image" :alt="character.name"  class="m-auto mt-5 mb-5" />                                    
              </div>      
              
              <div class="lg:m-auto mt-5 mb-5 font text-center grid grid-cols-1 text-indigo-900 text-3xl font-extrabold rounded-2xl  shadow-2xl lg:w-lg lg:h-80  items-center">
                  <p>Nombre: {{ character.name }}</p>    
                  <p>Estado: {{ character.status }}</p>    
                  <p>Especie: {{ character.species }}</p>    
                  <p class="align-bottom">Género: {{ character.gender }}</p>      
                        
              </div>
          </div>
        
        </div>


    </div>


</main>


</template>

<script setup lang="ts">

import{ref, onMounted} from 'vue'

import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
const character  = ref();


const loadCharacter = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const data = await response.json()
      character.value = data

      console.log(character.value)
    }



    onMounted(() => {
      loadCharacter()
    })



</script>

