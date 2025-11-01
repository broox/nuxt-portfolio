import { defineStore } from 'pinia'

import jobs from '@/data/jobs.json'
import projects from '@/data/projects.json'
import tags from '@/data/tags.json'

const descendingProjects = projects.reverse()

export const useStore = defineStore('main', {
  state: () => ({
    jobs: jobs,
    projects: descendingProjects,
    tags: tags,
  }),
  getters: {
    featuredProjects: (state) => {
      return state.projects.filter(project => project.featured)
    },
    getProject: (state) => {
      return (slug) => state.projects.find((project) => project.slug === slug)
    },
    getProjectsForJob: (state) => {
      return (slug) => state.projects.filter(project => project.job === slug)
    },
    getProjectsTagged: (state) => {
      return (slug) => state.projects.filter(project => project.tags.includes(slug))
    },
    getTag: (state) => {
      return (slug) => state.tags.find((tag) => tag.slug === slug)
    }
  }
})
