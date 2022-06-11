import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.dark};
  display: flex;
  height: 80vh;

  .text-area {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      width: 80%;
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  .image-area {
    flex: 1;
    position: relative;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    .text-area {
      p {
        font-size: 1.2rem;
        line-height: 1.7rem;
      }
    }
  }
`;
