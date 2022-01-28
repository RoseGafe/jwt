function decodePart(token, structurePart) {
  let indexPart = 0;
  if (structurePart === 'body') {
    indexPart = 1;
  }
  const parts = token.split('.');
  const partBase64 = parts[indexPart];
  const partJSON = Buffer.from(partBase64, 'base64');
  return JSON.parse(partJSON);
}

function getHeader(token) {
  return decodePart(token, 'header');
}

function getBody(token) {
  return decodePart(token, 'body');
}

function isValid(token) {
  const body = getBody(token);
  return (body.exp > Date.now);
}

module.exports = { getHeader, getBody, isValid };
