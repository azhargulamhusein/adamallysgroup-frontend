
const modifyImageUrl = (url) => {
    if(!url.includes('http')){
        return `https://${url}`
    }
    return url
}

export default modifyImageUrl