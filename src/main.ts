type MyType = {
  foo: string;
  bar: number;
};

export function createFooBar(): MyType {
  return {
    foo: "a",
    bar: 42,
  };
}
