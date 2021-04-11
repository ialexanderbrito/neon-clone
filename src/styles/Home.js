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

  .default-button {
    ${tw`w-full h-10 bg-yellow-300 hover:bg-yellow-400 py-2.5 px-5 flex items-center justify-center rounded-3xl`};

    min-width: 155px;
    transition: all 0.3s;
    min-width: 9.6875rem;

    a {
      ${tw`uppercase font-bold text-base leading-9 text-black`}
    }
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

export const Products = styled.div`
  ${tw`w-full pt-12 pr-0 pb-0 m-0 m-auto flex items-center justify-center flex-col`};
  max-width: 1140px;

  & > header {
    ${tw`flex flex-1 mb-10`}
  }

  h1 {
    ${tw`text-3xl leading-10 font-bold font-inter`}
  }

  .default-button {
    ${tw`w-full h-10 bg-yellow-300 hover:bg-yellow-400 py-2.5 px-5 flex items-center justify-center rounded-3xl`};

    min-width: 155px;
    transition: all 0.3s;
    min-width: 9.6875rem;

    a {
      ${tw`uppercase font-bold text-base leading-9 text-black`}
    }
  }

  .button-all-products {
    ${tw`flex-1 flex items-center justify-center mb-16 text-white`};

    div {
      ${tw`rounded-3xl text-white`};
      background: #00a5f0;
      color: #fff;

      &:hover {
        background: #0082bd;
      }
    }
  }
`;

export const ContainerCards = styled.div`
  ${tw`flex items-center justify-between flex-wrap pt-0 pr-5 pb-10 pl-5`};

  article {
    ${tw`flex flex-col justify-center items-center w-full  cursor-pointer rounded-lg p-5`}
    flex-basis: calc(33% - 18px);
    max-width: 350px;
    height: 359px;
    transition: all 0.3s ease;

    header {
      ${tw`order-1 flex flex-col justify-center items-center`}

      h2 {
        ${tw`w-full text-xl leading-loose text-center text-white font-bold mb-5 font-inter`}
      }

      p {
        ${tw`text-lg leading-7 text-white font-inter w-full text-center`}
      }
    }

    img {
      ${tw`w-full order-none mb-5`}
      max-width: 150px;
    }
  }

  article:nth-child(1) {
    background: #0046a0;
    :hover {
      background: #003b87;
    }
  }

  article:nth-child(2) {
    background: #0073cd;
    :hover {
      background: #0065b4;
    }
  }

  article:nth-child(3) {
    background: #008282;
    :hover {
      background: #006969;
    }
  }
`;

export const AppDownloadStore = styled.section`
  ${tw`py-16 px-0`}
  background: #0073cd;
`;

export const AppContent = styled.div`
  ${tw`w-full m-0 m-auto py-16 px-0 flex items-center`}
  max-width: 1140px;

  header {
    ${tw`py-0 px-4 ml-24`}

    h1 {
      ${tw`text-3xl text-white font-bold mb-10 leading-10 font-inter`}
      width: 430px;
    }

    .store {
      ${tw`flex-row flex`}
    }

    img {
      ${tw`cursor-pointer`}
    }

    img:last-child {
      ${tw`ml-5`}
    }
  }

  > img {
    ${tw`w-full py-0 px-4 ml-20`}
    max-width: 350px;
    height: 678px;
  }
`;

export const Footer = styled.footer`
  ${tw`my-0 mx-auto w-full flex items-center justify-center flex-col mt-20`}
  max-width: 1140px;

  header {
    ${tw`flex items-center justify-between `}
    margin: 0px -15px 20px;

    img:first-child {
      ${tw`ml-0`}
    }

    img {
      ${tw`cursor-pointer h-8 w-8 ml-5`}
      transition: all 0.35s ease;
      :hover {
        opacity: 0.8;
      }
    }
  }

  .container-footer {
    ul {
      ${tw`flex items-center`}
      li {
        ${tw`flex items-center`}
        a {
          color: #0073cd;
          font-size: 14px;
          line-height: 20px;
          font-weight: 700;
        }
        :nth-child(even)::after,
        :nth-child(even)::before {
          content: '•';
          margin: 0px 10px;
          color: #0073cd;
        }
        :last-child::after {
          content: '';
          margin: 0px;
        }
      }
    }
  }

  .copyright-footer {
    ${tw`w-full pt-2.5 pr-2.5 pb-0 pl-2.5`}
    max-width: calc(940px - 20px);
    hr {
      ${tw`my-2 mx-0`}
    }
    ul {
      ${tw`w-full`}
      li {
        ${tw`leading-3 text-center`}
        strong,
        span {
          ${tw`text-xs`}
        }
      }
    }
  }

  .info-footer {
    ${tw`w-full flex items-start justify-between py-0 px-2.5`}
    max-width: calc(940px - 20px);

    .info {
      ${tw`flex-1`}

      p {
        ${tw`text-xs leading-5`}
      }
    }

    .seal {
      ${tw`w-full flex flex-col items-start `}
      flex-basis: 215px;

      img {
        ${tw`mt-0 mr-0 mb-0 ml-10`}
        width: 165px;
      }

      p {
        ${tw`text-xs leading-5 text-right`}
      }
    }
  }
`;
