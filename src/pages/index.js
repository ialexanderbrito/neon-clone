import Head from 'next/head';
import { useEffect, useState } from 'react';

import Button from '../components/Button';

import {
  Container,
  ContentMenu,
  ContentBanner,
  Main,
  ContainerMovie,
  Products,
  ContainerCards,
  AppDownloadStore,
  AppContent,
  Footer,
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
        <title>Neon</title>
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
              <a href="/">MEI Fácil</a>
            </li>
            <li>
              <a href="/">Perguntas</a>
            </li>
            <li>
              <a href="/">Tarifas</a>
            </li>
            <li>
              <a href="/">#FocaNoDinheiro</a>
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
                <div className="default-button">
                  <a href="/">Abra sua conta</a>
                </div>
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
          <Products>
            <header>
              <h1>Resolva sua vida direto no app!</h1>
            </header>
            <ContainerCards>
              <article>
                <header>
                  <h2>Crédito</h2>
                  <p>
                    Sua conta digital tem cartão de crédito sem anuidade nem
                    complicação.
                  </p>
                </header>
                <img src="assets/neon_card.png" alt="Cartão Neon" />
              </article>

              <article>
                <header>
                  <h2>Sem taxas</h2>
                  <p>
                    Você não paga nada por transferências, boletos de depósito e
                    outros serviços no app.
                  </p>
                </header>
                <img src="assets/neon_fees.png" alt="Neon Taxas" />
              </article>

              <article>
                <header>
                  <h2>Investimentos</h2>
                  <p>
                    Rendem mais que a poupança e você resgata quando quiser.
                  </p>
                </header>
                <img src="assets/neon_invest.png" alt="Neon Investimentos" />
              </article>
            </ContainerCards>
            <div className="button-all-products">
              <div className="default-button">
                <a href="/" style={{ color: '#FFF' }}>
                  Todos os produtos
                </a>
              </div>
            </div>
          </Products>
          <AppDownloadStore>
            <AppContent>
              <header>
                <h1>
                  Que tal abrir uma conta digital para ver como a gente faz a
                  sua vida mais simples?
                </h1>
                <div className="store">
                  <img src="assets/badge_play.svg" alt="Play Store" />
                  <img src="assets/badge_app.svg" alt="Apple Store" />
                </div>
              </header>
              <img src="assets/app_dashboard.png" alt="App" />
            </AppContent>
          </AppDownloadStore>
        </Main>
        <Footer>
          <header>
            <img src="assets/facebook.svg" alt="Facebook" />
            <img src="assets/linkedin.svg" alt="Linkedin" />
            <img src="assets/twitter.svg" alt="Twitter" />
            <img src="assets/instagram.svg" alt="Instagram" />
            <img src="assets/youtube.svg" alt="Youtube" />
          </header>
          <div className="container-footer">
            <ul>
              <li>
                <a href="/">Termos e Condições de Uso</a>
              </li>
              <li>
                <a href="/">Política de Privacidade</a>
              </li>
              <li>
                <a href="/">Carreira</a>
              </li>
              <li>
                <a href="/">Ouvidoria</a>
              </li>
            </ul>
          </div>
          <div className="copyright-footer">
            <hr />
            <ul>
              <li>
                <strong>Atendimento: </strong>
                <span>oi@neon.com.br (24 horas)</span>
              </li>
              <li>
                <strong>Imprensa: </strong>
                <span>imprensa@neon.com.br</span>
              </li>
            </ul>
            <hr />
          </div>
          <div className="info-footer">
            <div className="info">
              <p>Neon Pagamentos S.A. – CNPJ 20.855.875/0001-82 </p>
              <p>R. Hungria, 1400 – Jardim Europa, São Paulo – SP, 01455-000</p>
              <p>Neon Pagamentos® 2018</p>
              <p>&nbsp;</p>
              <p>
                Oi! Leu até aqui? Você se preocupa com os mínimos detalhes,
                mesmo. A gente também.
              </p>
              <p>
                Por isso o time Neon está sempre trabalhando para fazer a conta
                digital perfeita para você <span>;)</span>
              </p>
              <p />
            </div>
            <div className="seal">
              <img src="assets/selo_peb.png" alt="Selo" />
              <p>
                Esta empresa é membro da ABCD e, como tal, atende às Orientações
                de Conduta constantes em seu Código de Ética e Autorregulação
              </p>
            </div>
          </div>
        </Footer>
      </Container>
    </>
  );
}
