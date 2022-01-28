const { getHeader, getBody, isValid } = require('./jwt');

describe('Test sobre la lectura de JWT', () => {
  test('getHeader', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoxMjMxMjMxMjM0NH0.Ft95K3oxRMECIovKlfSuI3-xIFq0YX-SJ6nOL56b6Vs';
    expect(getHeader(token)).toEqual({ alg: "HS256", typ: "JWT"});
  });

  test('getBody', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoxMjMxMjMxMjM0NH0.Ft95K3oxRMECIovKlfSuI3-xIFq0YX-SJ6nOL56b6Vs';
    expect(getBody(token)).toEqual({
      sub: "1234567890",
      name: "John Doe",
      exp:12312312344
    });
  });
  test('isValid: El token está caducado', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiZXhwIjoxNjQzMzE2Njc3fQ.khLUrcgO66bjfWmduHITIhCqn-vCGeVGXZkxmG_tEqc';
    expect(isValid(token)).toBeFalsy();
  });
});
