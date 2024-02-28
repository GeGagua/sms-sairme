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
import axios from "axios";
import { BackUrl } from "../../const";
import { toast } from "react-toastify";

const SMS = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const phone = localStorage.getItem("sms-phone");
  const [value, setValue] = useState<number | string>("");

  useEffect(() => {
    const pid = localStorage.getItem("sms-pid");
    if (pid && phone) {
      axios
        .post(
          `${BackUrl}/sms/agreement`,
          {
            pid: Number(pid),
            phone: Number(phone),
            email: "gegagagua@gmail.com",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setId(res.data?.data?._id);
        });
    } else {
      navigate('/')
    }
  }, [navigate, phone]);

  const send = () => {
    if (value && `${value}`.length === 4 && id) {
      axios
        .post(
          `${BackUrl}/sms/agreement/confirm/otp`,
          {
            id: id,
            otp: Number(value),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          localStorage.setItem('sms-id', id)
          navigate("/email");
        })
        .catch(() => {
          toast("არასწორია, გთხოვთ შეიყვანოთ სწორი OTP", {
            type: "error",
          });
        });
    }
  };

  const resend = () => {
    axios
    .post(
      `${BackUrl}/sms/agreement/otp`,
      {
        id: id,
        phone: Number(phone),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(() => {
      toast('ახალი OTP კოდი გაგზავნილია', {
        type: 'success'
      })
    })
  }

  return (
    <TwoPartsContainer>
      <Container>
        <Header back />
        <StandardDiv>
          <Title>ტელეფონზე მიღებული კოდი</Title>
          <p>კოდი {phone?.substring(0, 3)}****{phone?.substring(7)}-ზე გამოგიგზავნეთ</p>
          <Input
            label=""
            newCode
            onSmSCLick={() => resend()}
            value={value}
            onChange={(e) => setValue(e)}
            placeholder="SMS კოდი"
          />
          <Button onClick={() => send()}>გაგრძელება</Button>
        </StandardDiv>
        <Footer active={4} />
      </Container>
      <Sidebar />
    </TwoPartsContainer>
  );
};

export default SMS;
