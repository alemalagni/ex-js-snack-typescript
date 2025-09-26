// Snack 1
function Dato(dato: string | number | boolean) {
  let response = '';

  if (typeof dato === 'string') {
    response = dato.toUpperCase();
  } else if (typeof dato === 'number') {
    response = (dato * 2).toString();
  } else if (typeof dato === 'boolean') {
    response = dato ? 'Sì' : 'No';
  } else {
    response = 'Tipo non supportato';
  }

  console.log(response);
}

// Snack 2
type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: 'M' | 'F';
  anniDiServizio: [number, ...number[]];
};