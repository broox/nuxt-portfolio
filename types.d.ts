interface ProjectVersion {
  version: string
  description: string
  createdAt: string
}

interface Project {
  slug: string
  title: string
  description: string
  featured: number
  updatedAt: string
  url: string | null
  job: string | null
  tags: string[]
  versions: ProjectVersion[]
}

interface Job {
  slug: string
  position: string
  company: string
  location: string
  timespan: string
  tasks: string[]
}

interface Tag {
  slug: string
  name: string
  description: string
  featured?: boolean
}

interface TagWithMetadata extends Tag {
  projectCount: number
  fontSize: number
}

interface StoreState {
  jobs: Job[]
  projects: Project[]
  tags: Tag[]
}
