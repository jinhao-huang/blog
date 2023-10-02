import { useTranslations } from "next-intl";

export default function Home() {
  const dict = useTranslations("App");
  return (
    <>
      <h1>{dict("hello")}, 1BitBool!</h1>
    </>
  );
}
