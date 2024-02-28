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
import { useState } from "react";
import { toast } from "react-toastify";

const Mobile = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | string>("");

  const validate = () => {
    if (value && `${value}`.length === 9) {
      localStorage.setItem("sms-phone", `${value}`);
      navigate("/sms")
    } else {
      toast("გთხოვთ შეიყვანეთ სწორი ტელეფონის ნომერი", {
        type: "error",
      });
    }
  };

  return (
    <TwoPartsContainer>
      <Container>
        <Header />
        <StandardDiv>
          <Title>შეიყვანეთ ტელეფონის ნომერი</Title>
          <p>გამოგეგზავნებათ დასადასტურებელი SMS კოდი</p>
          <Input
            label=""
            isMobile
            value={value}
            onChange={(e) => setValue(e)}
            placeholder="ტელეფონის ნომერი"
          />
          <Button onClick={() => validate()}>გაგრძელება</Button>
        </StandardDiv>
        <Footer active={2} />
      </Container>
      <Sidebar />
    </TwoPartsContainer>
  );
};

export default Mobile;
