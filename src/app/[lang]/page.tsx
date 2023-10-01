import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = (await getDictionary(lang))["app"]["dictionary"];
  return (
    <>
      <h1>{dict.hello}, 1BitBool!</h1>
    </>
  );
}
