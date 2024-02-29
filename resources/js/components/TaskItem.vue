<template>
    <div>
      <h3>{{ task.title }}</h3>
      <p v-if="task.description">{{ task.description }}</p>
      <input type="checkbox" v-model="task.completed" @change="updateTask" class="form-check-input">
      <div class="d-flex justify-content-end">
        <button @click="deleteTask" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </template>

  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  export default {
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const store = useStore()

      const updateTask = () => {
        store.dispatch('updateTask', props.task)
      }

      const deleteTask = () => {
        store.dispatch('deleteTask', props.task.id)
      }

      return {
        updateTask,
        deleteTask
      }
    }
  }
  </script>
