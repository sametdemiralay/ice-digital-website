import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 1.3rem;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5rem;
  z-index: 99;

  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;

    :hover {
      fill: ${({ theme }) => theme.colors.active};
    }
  }

  .nav-item {
    color: ${({ theme }) => theme.colors.white};
  }
`;
