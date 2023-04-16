import NavigationMenu from "@/components/NavigationMenu";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavigationMenu />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
