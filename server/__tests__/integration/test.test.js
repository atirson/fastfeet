function soma(a, b) {
  return a + b;
}

describe('Test', () => {
  it('test', () => {
    const result = soma(4, 5);

    expect(result).toBe(9);
  });
});
