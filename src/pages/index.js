import Head from 'next/head';

import { Wrapper, Button } from '../styles/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Template TailwindCSS & Styled Components</title>
      </Head>
      <Wrapper>
        <Button
          onClick={() => {
            alert('@ialexanderbrito');
          }}
        >
          {' '}
          Touch me
        </Button>
      </Wrapper>
    </>
  );
}
