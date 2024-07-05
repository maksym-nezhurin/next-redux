import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import {TestComponent} from "@/app/components/TestComponent/TestComponent";

export default function IndexPage() {
  return <>
    <TestComponent />

    <Counter/>
  </>;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
