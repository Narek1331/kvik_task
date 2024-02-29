<template>
    <form @submit.prevent="submitForm" class="mt-4">
      <div class="mb-3">
        <input type="text" v-model="taskTitle" class="form-control" placeholder="Enter task title" required>
      </div>
      <div class="mb-3">
        <input type="text" v-model="taskDescription" class="form-control" placeholder="Enter task description">
      </div>
      <button type="submit" class="btn btn-primary">Add Task</button>
    </form>
  </template>

  <script>
  import { ref } from 'vue'
  import { useStore } from 'vuex'

  export default {
    setup() {
      const taskTitle = ref('')
      const taskDescription = ref('')
      const store = useStore()

      const submitForm = () => {
        if (taskTitle.value.trim() !== '') {
          store.dispatch('createTask', { title: taskTitle.value, description: taskDescription.value, completed: false })
          taskTitle.value = ''
          taskDescription.value = ''
        }
      }

      return {
        taskTitle,
        taskDescription,
        submitForm
      }
    }
  }
  </script>
