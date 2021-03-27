import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  .default-button {
    ${tw`w-full h-10 bg-yellow-300 hover:bg-yellow-400 py-2.5 px-5 flex items-center justify-center rounded-3xl`};

    min-width: 155px;
    transition: all 0.3s;
    min-width: 9.6875rem;

    a {
      ${tw`uppercase font-bold text-base leading-9 text-black`}
    }
  }
`;
