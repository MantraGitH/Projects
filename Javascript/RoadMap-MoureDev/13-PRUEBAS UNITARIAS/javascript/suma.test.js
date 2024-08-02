// suma.test.js

const suma = require('./ejercicio.js'); // Importa la función usando CommonJS

test('suma 1 + 2 para igualar 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('suma 5 + 6 para igualar 11', () => {
    expect(suma(5, 6)).toBe(11);
});

test('suma números negativos -3 + (-2) para igualar -5', () => {
    expect(suma(-3, -2)).toBe(-5);
});
