<template>
  <q-page class="flex flex-center">
    <q-card class="CharacterCard flex flex-center" v-for='character in characters' v-bind:key="character.id">
      <q-btn class="flex justify-between">
        <q-card-section horizontal width='350px'>
          <q-card-section >
            <div class="text-h5">{{character.name}}</div>
            <div class='text-subtitle2'><span></span>{{character.status}} - {{character.species}}</div>
          </q-card-section>

          <q-img
            class="col-5"
            :src= 'character.image'
            ratio="1"
            width="300px"
          />
        </q-card-section>
      </q-btn>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PageIndex',

  data () {
    return {
      characters: []
    }
  },

  async mounted () {
    try {
      const result = await axios({
        method: 'post',
        url: 'https://rickandmortyapi.com/graphql',
        data: {
          query: `
          {
            characters {
              results{
                id
                name
                status
                species
                image
              }
            }
          }`
        }
      })
      this.characters = result.data.data.characters.results
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang:sass scoped>
  .CharacterCard {
    width: 35%;
    margin: 2rem;
    /* display: flex;
    justify-content: space-between; */
  }
</style>
