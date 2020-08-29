import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import NotoSansKrEot from "./asset/noto-sans-kr-v12-latin_korean/noto-sans-kr-v12-latin_korean-regular.eot";
import NotoSansKrWoff2 from "./asset/noto-sans-kr-v12-latin_korean/noto-sans-kr-v12-latin_korean-regular.woff2";
import NotoSansKrWoff from "./asset/noto-sans-kr-v12-latin_korean/noto-sans-kr-v12-latin_korean-regular.woff";
import NotoSansKrSvg from "./asset/noto-sans-kr-v12-latin_korean/noto-sans-kr-v12-latin_korean-regular.svg";
import NotoSansKrMediumEot from "./asset/noto-sans-kr-v12-latin_korean/noto-sans-kr-v12-latin_korean-500.eot";
import NotoSansKrMediumWoff2 from "./asset/noto-sans-kr-v12-latin_korean/noto-sans-kr-v12-latin_korean-500.woff2";
import NotoSansKrMediumWoff from "./asset/noto-sans-kr-v12-latin_korean/noto-sans-kr-v12-latin_korean-500.woff";
import NotoSansKrMediumSvg from "./asset/noto-sans-kr-v12-latin_korean/noto-sans-kr-v12-latin_korean-500.svg";
import css from "./css";
import Resume from "./Resume";
const GlobalStyle = createGlobalStyle`

${css}

html{
  scroll-behavior: smooth;
}

html, body,#root {
    padding: 0;
    margin: 0;
  }
 
  body {
    font: 14px "Noto Sans KR",  Arial, sans-serif;
  }

  @font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/noto-sans-kr-v12-latin_korean-regular.eot'); /* IE9 Compat Modes */
  src: local('Noto Sans KR Regular'), local('NotoSansKR-Regular'),
       url('${NotoSansKrEot}') format('embedded-opentype'), /* IE6-IE8 */
       url('${NotoSansKrWoff2}') format('woff2'), /* Super Modern Browsers */
       url('${NotoSansKrWoff}') format('woff'), /* Modern Browsers */
       url('${NotoSansKrSvg}') format('svg'); /* Legacy iOS */
  }

@font-face {
  font-family: 'Noto Sans KR Medium';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/noto-sans-kr-v12-latin-500.eot'); /* IE9 Compat Modes */
  src: local('Noto Sans KR Medium'), local('NotoSansKR-Medium'),
      url('${NotoSansKrMediumEot}')  format('embedded-opentype'), /* IE6-IE8 */
      url('${NotoSansKrMediumWoff2}') format('woff2'), /* Super Modern Browsers */
      url('${NotoSansKrMediumWoff}') format('woff'), /* Modern Browsers */
      url('${NotoSansKrMediumSvg}')   format('svg'); /* Legacy iOS */
}
  `;

function App() {
  return (
    <ThemeProvider
      theme={{
        fontSize: {
          title: "40px",
          description: "12px",
          contentTitle: "1.6rem",
          label: "1.1rem",
        },
      }}
    >
      <GlobalStyle />
      <Resume></Resume>
    </ThemeProvider>
  );
}

export default App;
