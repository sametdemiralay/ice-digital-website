import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  background-image: url(/images/ice-digital-banner.webp);
  margin-top: 5rem;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  div {
    padding: 4rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.active};
    font-size: 4rem;
    width: 50%;
    margin: 0;
    margin-bottom: 2rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: 3rem;
    margin: 0;
    margin-bottom: 5rem;
  }

  a {
    background: ${({ theme }) => theme.colors.active};
    padding: 0.5rem 2rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.dark};
    border: 0.1rem solid ${({ theme }) => theme.colors.active};

    :hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.active};
    }
  }

  @media (max-width: 768px) {
    height: 70vh;
    background-position: right;
    margin-top: 4rem;
    div {
      padding: 2rem 1rem;
      text-align: center;
      position: absolute;
      bottom: 40%;
    }

    h1 {
      font-size: 2rem;
      width: 100%;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Sınır Tanımayan Reklam Ajansı</h1>
        <h3>İstanbul - İzmir</h3>
        <Link href='/sizin-icin'>
          <a>Sizin İçin</a>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
