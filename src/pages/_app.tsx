import type { AppProps } from "next/app";
import React from "react";

import RootLayout from "./layout";
import "../styles/global.css";

export default function myApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
