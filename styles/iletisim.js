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
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      position: relative;
      margin-top: 4rem;
    }

    label {
      position: relative;
      font-size: 0.75rem;
      opacity: 0.7;
      padding-bottom: 0.2rem;
      color: ${({ theme }) => theme.colors.darker};
    }

    input {
      background: transparent;
      border: none;
      border-bottom: 2px solid rgba(255, 255, 255, 0.5);
      width: -webkit-fill-available;
      /* margin-right: 1rem; */
      margin-bottom: 1rem;
    }
    input[type="submit"] {
      background: ${({ theme }) => theme.colors.dark};
      border: none;
      color: ${({ theme }) => theme.colors.white};
      padding: 0.5rem;
      font-size: 1.2rem;
      cursor: pointer;
    }
    input:focus-visible {
      outline: none;
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.darker};
    }

    textarea {
      width: -webkit-fill-available;
      height: 5rem;
      margin-bottom: 2rem;
      padding: 0.5rem;
    }
    textarea:focus-visible {
      outline: none;
    }

    /* button {
      background: ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.white};
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      border: none;
    } */
  }
`;
