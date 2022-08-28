const getMetaDescription = (description) => {
  if (!description) {
    return null
  }

  const maxLength = 155
  return description.length > maxLength ? `${description.substring(0, maxLength)}…` : description
}

const getMetaTags = ({ title, description, image }) => {
  const meta = []

  if (title) {
    meta.push({
      hid: 'og:title',
      property: 'og:title',
      content: title
    })
  }

  if (description) {
    description = getMetaDescription(description)
    meta.push({
      hid: 'description',
      property: 'description',
      content: description
    },{
      hid: 'og:description',
      property: 'og:description',
      content: description
    })
  }

  if (image) {
    meta.push({
      hid: 'og:image',
      property: 'og:image',
      content: image
    })
  }

  return meta
}

export default (_, inject) => {
  inject('getMetaTags', getMetaTags)
}
