<template >
<PageComponent>
  <template v-slot:header>
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-900">{{model.id ? model.title : "Create a Survey"}}</h1>
    </div>


  </template>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">


        <div class="px-4 sm:px-0">
          <form @submit.prevent="saveSurvey" class="animate-fade-in-down">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <!-- Image-->

                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <div class="mt-1 flex items-center">
                    <img
                      v-if="model.image"
                      :src="model.image"
                      :alt="model.title"
                      class="w-64 h-48 object-cover"
                    >
                  <span
                    v-else
                    class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                    <button type="button" class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <input type="file"  class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer">
                      Change </button>
                  </div>
                </div>
                <!-- Image-->

                <!-- title-->
                <div>
                  <div class="col-span-6">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" name="title" v-model="model.title" id="street-address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>
                  <!-- title-->


                <div>
                  <label for="about" class="block text-sm font-medium text-gray-700"> Description </label>
                  <div class="mt-1">
                    <textarea id="description" v-model="model.description" name="description" rows="3" autocomplete="survey_description" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Describe your survey">

                   </textarea>
                  </div>
                </div>
                <div>
                  <label for="expire_date" class="block text-sm font-medium text-gray-700">Expire Date</label>
                  <input type="date" v-model="model.expire_date" name="expire_date" id="expire_date" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="status" name="status" type="checkbox" v-model="model.status" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="status" class="font-medium text-gray-700">Active</label>
                 </div>
                </div>
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <h3 class="text-2xl font-semibold flex items-center justify-between"> Questions
                    <button type="button"
                            class="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd">
                      </path>
                    </svg>
                      Add Question
                    </button>
                  </h3>
                  <div v-if="!model.questions.length" class="text-center text-gray-600">
                    You don't have any questions created
                  </div>
                  <div v-for="(question,index) in model.questions" :key="question.id">
                    <QuestionEditor
                     :question = "question"
                     :index = "index"
                     @change="questionChange"
                     @addQuestion="addQuestion"
                     @deleteQuestion="deleteQuestion"
                    />
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Save </button>
              </div>
            </div>
          </form>
        </div>

    </div>




</PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue'
import {ref} from "vue";
import {useRoute} from "vue-router";
import store from "../store";
import QuestionEditor from "../components/editor/QuestionEditor.vue";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
let model = ref({
  title : "",
  status: true,
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
function addQuestion(index){

  const newQuestion = {
    id: uuidv4(),
    type: "text",
    question: "",
    description: null,
    data:{}
  }
}
function questionChange(){
}
function deleteQuestion(question) {
  model.value.questions = model.value.questions.filter( (q) =>q !== question)
}
function saveSurvey(){
  store.dispatch("saveSurvey",model.value).then(({data}) => {
    router.push({
      name: "SurveyUpdate",
      params: {id: data.data.id }
    })
  })
}
</script>

<style scoped>

</style>
