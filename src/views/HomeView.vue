<template>
  <!---->
  <main>
    <div class="flex justify-center items-center mt-8">
      <h1 class="text-5xl text-red-500">Rick y Morty</h1>
    </div>

    <div class="flex justify-center">
      <input type="text" placeholder="Search" v-model="searchName"
        class="mx-10 mt-10 rounded-md border-2 border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 align-middle" />
    </div>

    <div class="flex justify-center">
      <button v-for="status in statusFilters" :class="[
        'bg-black text-white p-2 rounded-full m-2 h-10 align-middle',
        searchStatus === status ? 'bg-red-500' : 'bg-black',
      ]" @click="searchByStatus(status)">
        {{ status }}
      </button>
    </div>

    <div class="flex justify-center mt-5">
      <button @click="decrementPage"
        class="me-5 rounded-md bg-orange-800 px-10.5 py-2.5 text-sm size-30 text-white shadow-xs">
        <spam class="text-5xl font-extrabold">-</spam>
      </button>

      <p class="text-5xl font-extrabold">{{ page }}</p>

      <button @click="incrementPage"
        class="ms-5 rounded-md bg-indigo-600 px-10.5 py-2.5 text-sm size-30 text-white shadow-xs">
        <spam class="text-5xl font-extrabold">+</spam>
      </button>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-4 mt-24 mx-10">
      <div v-for="character in filteredCharacters" :key="characters.id" class="rounded-2xl overflow-hidden shadow-2xl">
        <div @click="seeCharacterDetails(character.id)">
          <img :src="character.image" :alt="character.name" class="" />
          <div class="text-center">
            {{ character.name }}
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const characters = ref([])
const searchName = ref('')
const searchStatus = ref('Todos')
const page: any = ref(1)

const statusFilters = ['Todos', 'Alive', 'Dead', 'unknown']

const filteredCharacters = computed(() => {
  return characters.value.filter((character: any) => {
    const matchName = character.name.toLowerCase().includes(searchName.value.toLowerCase())

    const matchStatus = searchStatus.value === 'Todos' || character.status === searchStatus.value

    return matchName && matchStatus
  })
})

const searchByStatus = (status: string) => {
  console.log(status)
  searchStatus.value = status // Actualiza el estado seleccionado
}

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

const seeCharacterDetails = (character_id: number) => {
  router.push(`details/${character_id}`)
}

const decrementPage = () => {
  if (page.value > 1) {
    page.value--
    loadCharacters()
  } else {
    page.value = 1
    loadCharacters()
  }
}
</script>
