import { defineStore } from 'pinia'
import projects from '@/static/projects.json'

const descendingProjects = projects.reverse()

export const useStore = defineStore('main', {
  state: () => ({
    jobs: [],
    projects: descendingProjects,
    tags: [],
  }),
  getters: {
    featuredProjects: (state) => {
      console.log(state)
      return state.projects.filter(project => project.featured)
    }
  }
})