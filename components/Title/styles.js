import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 8rem;

  h2 {
    color: ${({ theme }) => theme.colors.active};
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 3rem;
  }
`;
