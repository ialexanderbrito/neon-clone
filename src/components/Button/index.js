import { Container } from './styles';

export default function Button({ children }) {
  return (
    <Container>
      <div className="default-button">
        <a href="/">{children}</a>
      </div>
    </Container>
  );
}
