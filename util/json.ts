import sjson from 'secure-json-parse';

export function parseJson(stringifiedJson: string) {
  if (!stringifiedJson) return undefined;
  try {
    return sjson(stringifiedJson);
  } catch {
    return undefined;
  }
}
