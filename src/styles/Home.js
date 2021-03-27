import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`flex items-center justify-center min-h-screen w-screen`};
`;

export const Button = styled.button`
  ${tw`
    bg-gradient-to-r from-green-400 to-blue-500
    hover:from-green-500 hover:to-blue-600
    w-2/12
    h-12
    xs:w-4/12
    sm:w-4/12
    md:w-4/12
    font-inter
    xs:text-xs
    sm:text-sm
    md:text-base
    text-xl
    font-semibold
    text-white
    rounded-md
    shadow-lg
    `};
`;
