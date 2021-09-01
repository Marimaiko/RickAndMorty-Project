<template>
      <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card>
</template>

<script>
// import api from '../services/api'
import axios from 'axios'

export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  beforeMount () {
    // api; {
    // }
    axios({
      url: 'https://rickandmortyapi.com/graphql',
      method: 'post',
      data: {
        query: `
         query {
           characters {
             results {
               name
             }
           }
         }
        `
      }
    }).then((result) => {
      console.log(result.data)
    })
  }

}
</script>
