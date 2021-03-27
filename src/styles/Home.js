import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`flex items-center justify-center min-h-screen w-screen`};
`;

export const Container = styled.div`
  ${tw`w-full h-full pb-5`}
`;

export const ContentMenu = styled.header`
  ${tw`w-full h-24 py-0 px-4 fixed flex items-center bg-transparent`}
  z-index: 1000;
  transition: all 0.35s ease;

  ${(props) =>
    props.scrollPosition >= 52 &&
    css`
      background-color: #fff;
      height: 70px;
    `}

  h1 {
    ${tw`h-10`}
    flex-basis: 240px;

    img {
      filter: brightness(0) invert(1);

      ${(props) =>
    props.scrollPosition >= 52 &&
    css`
          filter: initial;
        `}
    }
  }

  ul {
    ${tw`flex items-center justify-end flex-wrap flex-1 h-10`}

    li:first-child {
      ${tw`ml-0`}
    }

    li {
      ${tw`ml-8`}

      a {
        ${tw`font-bold text-xl leading-8 text-white font-inter`}

        ${(props) =>
    props.scrollPosition >= 52 &&
    css`
            color: #00a5f0;
          `}
      }
    }
  }
`;

export const ContentBanner = styled.section`
  ${tw`pt-28 pr-0 pb-6 pr-0`}
  min-height: 380px;
  background: #0073cd;

  article {
    ${tw`max-w-6xl m-0 m-auto flex items-center`}
  }

  header {
    ${tw`flex flex-col w-full h-80 my-0 mr-0 ml-24 pt-0 pr-4 pb-0`}
    max-width: 524px;
  }

  h1 {
    ${tw`text-5xl text-white text-left font-bold font-inter`}
    flex-wrap: bold;
    line-height: 60px;
  }

  p {
    ${tw`mt-5 text-white`}
  }

  p + p {
    ${tw`w-48`}/* width: 179px; */
  }

  img {
    ${tw`w-full `}
    max-width: 505px;
  }
`;

export const Main = styled.main`
  ${tw`w-full mt-10 mr-0 mb-0`}
`;

export const ContainerMovie = styled.article`
  ${tw`max-w-6xl w-full flex items-center justify-center m-0 m-auto py-0 px-7`}

  .container-video {
    ${tw`mb-5`}
    width: 740px;
    height: 399px;

    iframe {
      ${tw`rounded-xl`}
    }
  }
`;
