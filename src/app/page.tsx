"use client"
import Link from "next/link";

import ProductCard from "./components/ProductCard";
import { useMemo, useState } from "react";

const nums = new Array(30_000_000).fill(0).map((_,i) => {
  return {
    index : i,
    isMagical : i === 29_000_000
  }
});

export default function Home() {
  let [count, setCount] = useState<number>(0);
  const [numbers, setNumber] = useState(nums);

  // const magical = numbers.find(item => item.isMagical);

  const memoMagical = useMemo(() => numbers.find(item => item.isMagical), [numbers]);


  return (
    <main >
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <div>{count}</div>
      <button onClick={() => {setCount(count++)}}>Increase</button>
    </main>
  );
}
