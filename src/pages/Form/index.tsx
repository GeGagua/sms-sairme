import styled from "styled-components";
import { Container, Flex, SubTitle } from "../../components/styled/Global";
import Button from "../../components/styled/Button";
import Input from "../../components/styled/Input";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FormContainer = styled.div`
  text-align: left;
`;

const Form = () => {
  const [isLegal, setIslegal] = useState(false);
  const [value, setValue] = useState<string | number>("");
  const [legalValue, setLegalValue] = useState<string | number>("");
  const navigate = useNavigate();

  const validate = () => {
    if (isLegal) {
      if (`${value}`.length !== 11 || !legalValue) {
        toast("გთხოვთ შეიყვანოთ სწორი ინფორმაცია", {
          type: "error",
        });
      } else {
        navigate(`/success?isLegal=1&&value=${value}&legalValue=${legalValue}`);
      }
    } else {
      if (`${value}`.length !== 11) {
        toast("გთხოვთ შეიყვანეთ სწორი პირადობის მოწმობა", {
          type: "error",
        });
      } else {
        navigate(`/success?value=${value}`);
      }
    }
  };

  useEffect(() => {
    const urlParams = new URL(window.location.href);
    const isLegalProps = urlParams.searchParams.get("isLegal");
    if (isLegalProps) {
      setIslegal(true);
    }
  }, []);

  return (
    <Container>
      <FormContainer>
        <SubTitle>შეავსე თანხმობის ფორმა</SubTitle>

        {isLegal ? (
          <>
            <Input
              onChange={(e) => setLegalValue(e)}
              value={legalValue}
              placeholder="00000"
              label="იურიდიული პირის საიდენთიფიკაციო ნომერი"
            />
            <Input
              onChange={(e) => setValue(e)}
              value={value}
              placeholder="00000000000"
              label="უფლებამოსილი პირის პირადი ნომერი"
            />
          </>
        ) : (
          <Input
            onChange={(e) => setValue(e)}
            value={value}
            placeholder="00000000000"
            label="პირადი ნომერი"
          />
        )}

        <Flex style={{ justifyContent: "left", gap: 16 }}>
          <Button onClick={() => navigate("/status")} light small>
            უკან
          </Button>
          <Button onClick={() => validate()} small>
            ვეთანხმები
          </Button>
        </Flex>
      </FormContainer>
    </Container>
  );
};

export default Form;
