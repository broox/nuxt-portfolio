const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const getDisplayDate = (dateString: string) => {
  const date = new Date(dateString)
  if (dateString.length > 4) {
    const month = months[date.getUTCMonth()]
    return `${month} ${date.getUTCFullYear()}`
  } else {
    return date.getUTCFullYear()
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      getDisplayDate
    }
  }
})
