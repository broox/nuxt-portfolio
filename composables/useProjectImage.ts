const imageManifest = import.meta.glob('/public/images/*.png')
const thumbManifest = import.meta.glob('/public/images/thumb/*.gif')

/**
 * Updated composable for resolving project image paths
 *
 * @param project - The project object
 * @param version - Optional specific version to use for the image
 * @returns Object containing URLs and relative paths of images if they exist, or undefined otherwise
 */
export const useProjectImage = (project: any, version?: any) => {
  const config = useRuntimeConfig()

  const imgPath = computed(() => {
    const path = version
      ? `${project.slug}-${version.version}.png`
      : `${project.slug}.png`
    const fullPath = `/public/images/${path}`
    return fullPath in imageManifest ? `/images/${path}` : undefined
  })

  const imgURL = computed(() => {
    return imgPath.value ? `${config.public.baseURL}${imgPath.value}` : undefined
  })

  const thumbnailPath = computed(() => {
    const path = version
      ? `${project.slug}-${version.version}.gif`
      : `${project.slug}.gif`
    const fullPath = `/public/images/thumb/${path}`
    return fullPath in thumbManifest ? `/images/thumb/${path}` : undefined
  })

  const thumbnailURL = computed(() => {
    return thumbnailPath.value ? `${config.public.baseURL}${thumbnailPath.value}` : undefined
  })

  return {
    imgURL,
    imgPath,
    thumbnailURL,
    thumbnailPath
  }
}
