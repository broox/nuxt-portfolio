const truncateDescription = (description: string | null, maxLength: number = 155): string | null => {
  if (!description) return null
  return description.length > maxLength ? `${description.substring(0, maxLength)}…` : description
}

export const usePageMeta = ({ title, description, image }: {
  title?: string
  description?: string | null
  image?: string
}) => {
  const route = useRoute()
  const config = useRuntimeConfig()

  // Ensure canonical URLs have a trailing slash
  const canonicalUrl = computed(() => {
    const fullUrl = `${config.public.baseURL}${route.fullPath}`
    return fullUrl.endsWith('/') ? fullUrl : `${fullUrl}/`
  })

  const metaTags = computed(() => {
    const meta: any[] = []

    meta.push({
      property: 'og:url',
      content: canonicalUrl.value
    })

    if (title) {
      meta.push({
        property: 'og:title',
        content: title
      })
    }

    if (description) {
      const truncatedDesc = truncateDescription(description)
      if (truncatedDesc) {
        meta.push(
          {
            name: 'description',
            content: truncatedDesc
          },
          {
            property: 'og:description',
            content: truncatedDesc
          }
        )
      }
    }

    if (image) {
      meta.push({
        property: 'og:image',
        content: image
      })
    }

    return meta
  })

  useHead(() => ({
    title,
    meta: metaTags.value,
    link: [
      {
        rel: 'canonical',
        href: canonicalUrl.value
      }
    ]
  }))
}