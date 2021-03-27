import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  * {
    ${tw`m-0 p-0 box-border outline-none no-underline`}
    -webkit-font-smoothing: antialiased;
    list-style: none;
    font-family: 'Averta-Regular',Helvetica,sans-serif;
  }
  body {
    ${tw`text-xl leading-8`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
