import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  padding: 4rem 0;

  .item {
    width: 40%;
    margin: 0 auto;
    margin-bottom: 4rem;
    text-align: center;

    h5 {
      color: ${({ theme }) => theme.colors.active};
      margin: 0;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    .item {
      width: 70%;
    }
  }
`;
