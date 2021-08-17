
// // vado a richiedere questo modulo
// const http = require('http');


// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('ciao, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// va a richeider il modulo che permette di usare funzioni che verificano gli invcarianti
const assert = require('assert').strict;

//                   //attuale           //aspettativa
assert.deepStrictEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5],'Messaggio personalizzato in caso di errore, diverso da form');

//  console.log(new Date());
  // generatedMessage: true, il tru vuol dire che AssertionError é stato generato automaticamente
  // code: 'ERR_ASSERTION',
  // actual: /a/gi,
  // expected: 2021-08-17T15:16:00.417Z,
  // operator: 'deepStrictEqual'