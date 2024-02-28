import { useNavigate } from "react-router-dom";
import Button from "../../components/styled/Button";
import {
  Container,
  StandardDiv,
  Title,
  TwoPartsContainer,
} from "../../components/styled/Global";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Sidebar from "../../components/layout/Sidebar";
import Input from "../../components/styled/Input";
import { useEffect, useState } from "react";

const Email = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | string>("");

  const validate = () => {
    localStorage.setItem('sms-email', `${value}`)
    navigate("/companies");
  };

  useEffect(() => {
    const smsVerify = localStorage.getItem('sms-id')
    if (!smsVerify) {
      navigate("/");
    }
  }, [navigate])

  return (
    <TwoPartsContainer>
      <Container>
        <Header />
        <StandardDiv>
          <Title>შეიყვანეთ ელ. ფოსტა</Title>
          <p>გაიგეთ ბოლო სიახლეები პირველმა (ნებაყოფლობით შესავსები ველი)</p>
          <Input
            label=""
            type="text"
            value={value}
            onChange={(e) => setValue(e)}
            placeholder="ელ. ფოსტის მისამართი"
          />
          <Button onClick={() => validate()}>დაწყება</Button>
        </StandardDiv>
        <Footer active={3} />
      </Container>
      <Sidebar />
    </TwoPartsContainer>
  );
};

export default Email;
