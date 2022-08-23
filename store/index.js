import { defineStore } from 'pinia'

import jobs from '@/static/jobs.json'
import projects from '@/static/projects.json'

const descendingProjects = projects.reverse()

export const useStore = defineStore('main', {
  state: () => ({
    jobs: jobs,
    projects: descendingProjects,
    tags: [],
  }),
  getters: {
    featuredProjects: (state) => {
      return state.projects.filter(project => project.featured)
    },
    getProject: (state) => {
      return (slug) => state.projects.find((project) => project.slug === slug)
    },
  }
})