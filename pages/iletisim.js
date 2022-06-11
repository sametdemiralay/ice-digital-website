import { useRef } from "react";
import Title from "../components/Title";
import { Container } from "../styles/iletisim";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // const sendEmail = async (e) => {
  //   e.preventDefault();
  //   const formData = {};
  //   Array.from(e.currentTarget.elements).forEach((field) => {
  //     if (!field.name) return;
  //     formData[field.name] = field.value;
  //   });
  //   fetch("/api/mail", {
  //     method: "post",
  //     body: JSON.stringify(formData),
  //   });
  //   console.log(formData);
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nilcm7c",
        "template_Fico7j6Q",
        form.current,
        "user_Mg7VRuUUkgc0lfrCksDQs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Title text='İletişim' />
      <Container>
        <p>icedigitalbasvuru@gmail.com</p>
        <div className='form'>
          <h5>Bizimle İletişime Geçin !</h5>
          <span>Sizinle çalışmak için heyecanlıyız !</span>

          <form onSubmit={sendEmail} ref={form}>
            <label>Name</label>
            <input type='text' name='user_name' placeholder='Email' />
            <label>Email</label>
            <input type='email' name='user_email' placeholder='Email' />
            <textarea name='user_message' />
            {/* <button type='submit'>Subscribe</button> */}
            <input type='submit' value='Send' />
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
