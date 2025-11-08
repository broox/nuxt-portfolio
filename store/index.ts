import { defineStore } from 'pinia'

import jobs from '~/data/jobs.json'
import projects from '~/data/projects.json'
import tags from '~/data/tags.json'

const descendingProjects = projects.reverse()

export const useStore = defineStore('main', {
  state: (): StoreState => ({
    jobs: jobs as Job[],
    projects: descendingProjects as Project[],
    tags: tags as Tag[],
  }),
  getters: {
    featuredProjects: (state): Project[] => {
      return state.projects.filter(project => project.featured)
    },
    featuredTags: (state): Tag[] => {
      return state.tags.filter(tag => tag.featured)
    },
    getProject: (state) => {
      return (slug: string): Project | undefined => {
        return state.projects.find((project) => project.slug === slug)
      }
    },
    getProjectsForJob: (state) => {
      return (slug: string): Project[] => {
        return state.projects.filter(project => project.job === slug)
      }
    },
    getProjectsTagged: (state) => {
      return (slug: string): Project[] => {
        return state.projects.filter(project => project.tags.includes(slug))
      }
    },
    getTag: (state) => {
      return (slug: string): Tag | undefined => {
        return state.tags.find((tag) => tag.slug === slug)
      }
    }
  }
})
