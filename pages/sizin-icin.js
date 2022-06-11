import { useState, useEffect } from "react";
import Title from "../components/Title";
import { Container } from "../styles/sizinIcin";

const ForYou = () => {
  const [data, setData] = useState([]);

  const fetchForYou = async () => {
    try {
      const response = await fetch("/api/forYou");
      const data = await response.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchForYou();
  }, []);

  return (
    <>
      <Title text='Sizin İçin' />
      <Container>
        {data.map((val) => (
          <div key={val.id} className='item'>
            <h5>{val.title}</h5>
            <p>{val.content}</p>
          </div>
        ))}
      </Container>
    </>
  );
};

export default ForYou;
