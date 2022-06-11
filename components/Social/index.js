import { Container } from "./styles";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";

const Social = () => {
  return (
    <Container>
      <a href='https://www.youtube.com/' rel='noreferrer' target='_blank'>
        <GrInstagram />
      </a>
      <a href='https://www.youtube.com/' rel='noreferrer' target='_blank'>
        <GrFacebookOption />
      </a>
    </Container>
  );
};

export default Social;
