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

const Homepage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<number | string>("");

  const validate = () => {
    if (value && `${value}`.length === 11) {
      navigate("mobile");
      localStorage.setItem("sms-pid", `${value}`);
    } else {
      toast("გთხოვთ შეიყვანეთ სწორი პირადი ნომერი", {
        type: "error",
      });
    }
  };

  return (
    <TwoPartsContainer>
      <Container>
        <Header hideBack />
        <StandardDiv>
          <Title>გაიარე იდენტიფიკაცია</Title>
          <p>შენზე მორგებული შეთავაზებების მისაღებად</p>
          <Input
            label=""
            value={value}
            onChange={(e) => setValue(e)}
            placeholder="პირადი ნომერი"
          />
          <Button onClick={() => validate()}>დაწყება</Button>
        </StandardDiv>
        <Footer active={1} />
      </Container>
      <Sidebar />
    </TwoPartsContainer>
  );
};

export default Homepage;
