export function parsearUrl(url){
    const urlObj = new URL(url);
    return {
        host: urlObj.host,
        pathname: urlObj.pathname,
        parametros: urlObj.search
    };
}