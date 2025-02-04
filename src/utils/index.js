export const getFullImageURL = (url) => {  

   url = url.replace(
        "nyc3.digitaloceanspaces.com/adamallys-space",
        "adamallys-space.nyc3.cdn.digitaloceanspaces.com"
      );
      url = url.replace(
        "adamallys-space.nyc3.digitaloceanspaces.com",
        "adamallys-space.nyc3.cdn.digitaloceanspaces.com"
    ); 
    if (url?.includes?.('http')) return url  
    return (`https://${url}`)
}