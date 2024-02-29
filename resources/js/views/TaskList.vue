<template>
    <div class="container mt-4">
      <h1>Task List</h1>
      <TaskForm />
      <div class="list-group mt-3">
        <TaskItem v-for="task in tasks" :key="task.id" :task="task" class="list-group-item" />
      </div>
    </div>
  </template>

  <script>
  import { computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import TaskForm from '../components/TaskForm.vue'
  import TaskItem from '../components/TaskItem.vue'

  export default {
    components: {
      TaskForm,
      TaskItem
    },
    setup() {
      const store = useStore()
      const tasks = computed(() => store.state.tasks)

      onMounted(() => {
        store.dispatch('fetchTasks')
      })

      return { tasks }
    }
  }
  </script>

  <style>
  </style>
