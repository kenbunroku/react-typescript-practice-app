import { memo, VFC } from "react";
import { Header } from "../organisms/layout/Header";

export const Setting: VFC = memo(() => {
  return (
    <>
      <Header />
      <p>This is a setting page.</p>
    </>
  );
});
