import styled from "styled-components";

export const Nav = styled.nav`
  background: ${(props) =>
    props.scroll > 30 ? props.theme.colors.darker : "transparent"};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9;

  .logo {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 6rem;
    height: 2rem;
    margin-left: 4rem;
    background-image: url(images/logo.png);
  }

  .nav-container {
    margin-right: 4rem;

    .nav-item {
      margin-left: 3rem;
      font-size: 1rem;
      font-weight: 700;
      transition: color 0.25s ease;
      color: ${({ theme }) => theme.colors.white};

      :hover {
        color: ${({ theme }) => theme.colors.active};
      }
    }
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 4rem;
    display: none;

    path {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
    .nav-container {
      display: none;
    }

    svg {
      display: inline;
    }
  }
`;

export const MobileNav = styled.nav`
  background: ${({ theme }) => theme.colors.dark};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* display: flex; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: ${(props) => (props.visible ? "flex" : "none")};

  .nav-item {
    color: ${({ theme }) => theme.colors.active};
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
  }

  svg {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0;

    path {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Main = styled.main`
  padding: 0 4rem;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Footer = styled.footer`
  padding: 2rem 4rem;

  @media (max-width: 768px) {
    padding: 2rem;
    text-align: center;
  }
`;
