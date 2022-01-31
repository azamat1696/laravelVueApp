<template>
<PageComponent>
  <template v-slot:header>
    <h1 class="text-3xl font-bold text-gray-900">Surveys update</h1>

  </template>
Content update survey
</PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue'
import {ref} from "vue";
import {useRoute} from "vue-router";
import store from "../store";

const route = useRoute();
let model = ref({
  title : "",
  status: false,
  description: null,
  image: null,
  expire_date: null,
  questions: []
})

if(route.params.id){
 model.value = store.state.surveys.find(
   (e) => e.id === parseInt(route.params.id)
 )
}
</script>

<style scoped>

</style>
