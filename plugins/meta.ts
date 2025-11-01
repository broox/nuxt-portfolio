const getMetaDescription = (description: string | null) => {
  if (!description) {
    return null
  }

  const maxLength = 155
  return description.length > maxLength ? `${description.substring(0, maxLength)}…` : description
}

const getMetaTags = ({ title, description, image }: {
  title?: string
  description?: string | null
  image?: string
}) => {
  const meta: any[] = []

  if (title) {
    meta.push({
      property: 'og:title',
      content: title
    })
  }

  if (description) {
    const desc = getMetaDescription(description)
    meta.push({
      name: 'description',
      content: desc
    },{
      property: 'og:description',
      content: desc
    })
  }

  if (image) {
    meta.push({
      property: 'og:image',
      content: image
    })
  }

  return meta
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      getMetaTags
    }
  }
})
