import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  text-align: center;
  padding: 4rem 0;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
  }

  .form {
    background: ${({ theme }) => theme.colors.active};
    width: 50%;
    margin: 0 auto;
    margin-top: 3rem;
    color: ${({ theme }) => theme.colors.dark};
    text-align: center;
    padding: 3rem;

    h5 {
      margin: 0;
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    span {
      font-size: 1rem;
    }

    form {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      position: relative;
      margin-top: 5rem;
    }

    label {
      position: absolute;
      top: 0;
      color: ${({ theme }) => theme.colors.darker};
    }

    input {
      background: transparent;
      border: none;
      border-bottom: 0.1rem solid rgba(255, 255, 255, 0.5);
      width: 100%;
      margin-right: 1rem;
    }
    input:focus-visible {
      outline: none;
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.darker};
    }

    button {
      background: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.white};
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      border: none;
    }
  }
`;
