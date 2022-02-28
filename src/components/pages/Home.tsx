import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const Home: VFC = memo(() => {
  return (
    <>
      <Header />
      <p>This is a home page.</p>
    </>
  );
});
