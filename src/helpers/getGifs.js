// TODO externalize property
const gitUrl = 'http://api.giphy.com/v1/gifs'

// TODO externalize property
const apiKey = 'IBN0Asliz77L2xVsqUJeL17AYOfT6cFg'

export const getGifs = async category => {
  // TODO refactor hardcoded url query params
  const url = `${gitUrl}/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${apiKey}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs
}
