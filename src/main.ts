function Dato(dato: string | number | boolean) {
  console.log(typeof dato === 'string' ? dato.toUpperCase() : '');
  console.log(typeof dato === 'number' ? dato * 2 : '')
  console.log(typeof dato === 'boolean' ? (dato ? 'Sì' : 'No') : '');
}
