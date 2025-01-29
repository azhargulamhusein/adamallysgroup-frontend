export const getFullImageURL = (url) => {
    if (url?.includes?.('http')) return url
    return (`https://${url}`)
}