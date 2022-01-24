import React from "react";

type Describe = {
  DescribeTion: string;
  (SomeThing: number): boolean;
};

function doSomeThing(fn: Describe) {
  console.log(fn.DescribeTion);
  console.log(fn(4));
}

function fn(n: number) {
  console.log(n);
  return true;
}

fn.DescribeTion = "this is a describe";

doSomeThing(fn);

function map<input, output>(
  arr: input[],
  func: (arg: input) => output
): output[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));

/*人生多么美妙*/
