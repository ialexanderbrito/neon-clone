import Head from 'next/head';
import { useEffect, useState } from 'react';

import Button from '../components/Button';

import {
  Container,
  ContentMenu,
  ContentBanner,
  Main,
  ContainerMovie,
} from '../styles/Home';

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY);
    });
  }, [scrollPosition]);
  return (
    <>
      <Head>
        <title>
          Conta Digital Grátis e Cartão de Crédito sem anuidade | Neon
        </title>
      </Head>
      <Container>
        <ContentMenu scrollPosition={scrollPosition}>
          <h1>
            <img src="assets/logo.svg" alt="Banco Neon" />
            <title>Logotipo Neon</title>
          </h1>

          <ul>
            <li>
              <a href="/">Conta</a>
            </li>
            <li>
              <a href="/">Pejota</a>
            </li>
            <li>
              <a href="/">Perguntas</a>
            </li>
            <li>
              <a href="/">Tarifas</a>
            </li>
            <li>
              <a href="/">#FocoNoDinheiro</a>
            </li>
            <li>
              <a href="/">Conheça a Neon</a>
            </li>
            <li>
              <Button>Abra sua conta</Button>
            </li>
          </ul>
        </ContentMenu>
        <ContentBanner>
          <article>
            <header>
              <h1>A conta digital certa pra cuidar bem do seu dinheiro</h1>
              <p>
                Neon, conta grátis e cartão sem anuidade. Abra sua conta, é só
                baixar o app!
              </p>
              <p>
                <Button>Abra sua conta</Button>
              </p>
            </header>
            <img src="assets/banner.png" alt="App mobile" />
          </article>
        </ContentBanner>
        <Main>
          <ContainerMovie>
            <header>
              <h1 style={{ display: 'none' }}>Video de campanha Neon</h1>
            </header>
            <div className="container-video">
              <iframe
                title="Video de campanha Neon: Windersson Blogueira"
                src="https://www.youtube.com/embed/cEM7Ff_d1BU?controls=0&enablejsapi=1&origin=https%3A%2F%2Fneon.com.br"
                frameBorder={0}
                width={710}
                height={399}
                allowFullScreen
              />
            </div>
          </ContainerMovie>
        </Main>
      </Container>
    </>
  );
}
