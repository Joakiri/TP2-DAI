import countryToCurrency from 'country-to-currency';

export function obtenerMoneda(pais) {
    return countryToCurrency[pais];
}
