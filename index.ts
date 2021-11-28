import { atLeast, last, map } from "dependent-ts";

async function main() {
  const values = await externalApi();

  if (!atLeast(1, values)) {
    throw new Error("Expected at least one element");
  }

  // Here values has type `Array1<string>`
  values;

  // Here upperValues maintains the knowledge that it has at least one element
  const upperValues = map(values, (value) => value.toUpperCase());

  // Here lastValue is string since we have the guarantee that the array has at least one element
  const lastValue = last(upperValues);

  const maybeString: string[] = [];

  // Here we don't have the guarantee that the array has at least one element so the type is `string | undefined`
  const maybeLastValue = last(maybeString);
}

async function externalApi(): Promise<string[]> {
  return ["hello", "there"];
}
