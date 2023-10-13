<template>
  <div>

    <input v-model="inputWord" />
    <button @click="getTranslation">Translate</button>

    <!-- Lesson 3 Task 4: Create a component that displays two different messages based on a boolean variable. 
        Switch variable to test the conditional output of both messages. -->
    <p v-if="isTranslated" class="translation">{{ translation }}</p>
    <p v-else class="empty">No translation here</p>

    <!-- Create two elements, one with v-show, the other with v-if, with the same conditions. 
        Change the condition and observe the differences in the DOM. 
        Research in which situations it is best to use each directive. -->

        <!-- v-show adds a display none style to the tag, 
            while v-if completely removes it from the DOM tree -->
    <p v-show="isTranslated" class="translation">{{ translation }}</p>
    
  </div>
</template>
<script>
import axiosInstanse from "../services/axios";

export default {
  data() {
    return {
      inputWord: "",
      translation: "",
      isTranslated: false,
    };
  },
  methods: {
    getTranslation() {
      axiosInstanse
        .get(`/t?client=gtx&sl=en&tl=ru&q=${this.inputWord}`)
        .then((response) => {
          this.translation = response.data[0];
          this.isTranslated = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
