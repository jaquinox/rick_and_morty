
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

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-4 mt-24 mx-10" >
        <div  class="rounded-2xl  overflow-hidden  shadow-2xl "  >
            <div >
                <img :src="character.image" :alt="character.name"  class="" />
                    <div class="text-center col-auto">
                        {{ character.name }} <br>
                        {{ character.status }} <br>
                        {{ character.species }} <br>
                        {{ character.gender }} <br>
                        {{ character.origin.name }} <br>
                        {{ character.location.name }} <br>
                       
                    </div>                
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

