export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }

  result = result.slice(0, -1);

  return result;
}
