import Title from "../components/Title";
import Image from "next/image";
import { Wrapper } from "../styles/hakkimizda";

const About = () => {
  return (
    <>
      <Title text='Hakkımızda' />
      <Wrapper>
        <div className='text-area'>
          <p>
            Markaların büyümelerine ve vermek istedikleri mesajı bulmalarına
            yardımcı oluyoruz. Zaman değişse de yaratıcılığa ve sorun çözmeye
            olan tutkumuz hiç değişmiyor. Müşterilerimizi başarılı bir geleceğe
            taşıma misyonumuzu yerine getirebilmek için teknolojiye ve
            yenilikçiliğe odaklanıyoruz.
          </p>
        </div>
        <div className='image-area'>
          <Image
            src='/images/about-side.webp'
            layout='fill'
            alt='ice-digital-about'
          />
        </div>
      </Wrapper>
    </>
  );
};

export default About;
