import { createStore } from 'vuex'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL + 'tasks/';

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    addTask(state, task) {
      state.tasks.push(task)
    },
    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex(task => task.id === updatedTask.id)
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask)
      }
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId)
    }
  },
  actions: {
    async fetchTasks({ commit }) {
      try {
        const response = await axios.get(API_URL)
        commit('setTasks', response.data.tasks)
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    },
    async createTask({ commit }, taskData) {
      try {
        const response = await axios.post(API_URL, taskData)
        commit('addTask', response.data.task)
      } catch (error) {
        console.error('Error creating task:', error)
      }
    },
    async updateTask({ commit }, updatedTaskData) {
      try {
        await axios.put(`${API_URL}${updatedTaskData.id}`, updatedTaskData)
        commit('updateTask', updatedTaskData)
      } catch (error) {
        console.error('Error updating task:', error)
      }
    },
    async deleteTask({ commit }, taskId) {
      try {
        await axios.delete(`${API_URL}${taskId}`)
        commit('deleteTask', taskId)
      } catch (error) {
        console.error('Error deleting task:', error)
      }
    }
  },
  getters: {
  }
})
