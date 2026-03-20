export function parsearUrl(url) {
    try {
        const urlObj = new URL(url);
        return {
            host: urlObj.host,
            pathname: urlObj.pathname,
            parametros: urlObj.search
        };
    } catch (error) {
        console.error(error.message);
        return null;
    }
}