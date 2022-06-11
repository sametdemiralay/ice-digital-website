import { useState } from "react";
import Title from "../components/Title";
import { Container } from "../styles/iletisim";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleMailChange = (e) => {
    let inputVal = e.target.value;
    setEmail(inputVal);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("selam");
    console.log(email);
  };

  return (
    <>
      <Title text='İletişim' />
      <Container>
        <p>icedigitalbasvuru@gmail.com</p>
        <div className='form'>
          <h5>Bizimle İletişime Geçin !</h5>
          <span>Sizinle çalışmak için heyecanlıyız !</span>

          <form onSubmit={sendEmail} method='post'>
            <label>Email</label>
            <input
              type='email'
              name='email'
              onChange={handleMailChange}
              value={email}
              placeholder='Email'
            />
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
