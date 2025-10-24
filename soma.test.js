const somar = require('./soma');

describe('Testes para a função somar', () => {

  test('deve somar dois números positivos corretamente', () => {
    expect(somar(1, 2)).toBe(3);
    expect(somar(10, 5)).toBe(15);
  });

  test('deve retornar o próprio número quando somado com zero', () => {
    expect(somar(5, 0)).toBe(5);
    expect(somar(0, -10)).toBe(-10);
  });

  test('deve somar números positivos e negativos corretamente', () => {
    expect(somar(10, -5)).toBe(5);
    expect(somar(-8, 3)).toBe(-5);
    expect(somar(-1, -4)).toBe(-5);
  });

  test('deve somar números decimais usando precisão adequada (toBeCloseTo)', () => {
    const resultadoEsperado = 0.3;
    const resultadoReal = somar(0.1, 0.2);

    expect(resultadoReal).toBeCloseTo(resultadoEsperado);
    expect(somar(1.5, 2.75)).toBeCloseTo(4.25);
  });

});