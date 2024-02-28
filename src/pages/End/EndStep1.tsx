import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Button from "../../components/styled/Button";
import { Center, Title } from "../../components/styled/Global";
import { EndContainer, EndContainerBlock, EndContainerBox } from "./styled";
import axios from "axios";
import { BackUrl } from "../../const";
import { useEffect } from "react";

const EndStep1 = () => {
  const id = localStorage.getItem("sms-id");
  const companies = localStorage.getItem("sms-companies") ? JSON.parse(localStorage.getItem("sms-companies") || "") : [];
  const navigate = useNavigate();
  const agree = () => {
    axios
      .put(`${BackUrl}/sms/agreement/${id}`, {
        companies: companies ? companies : [],
        email: localStorage.getItem("sms-email") || "",
      })
      .then(() => {
        navigate("/success");
      });
  };

  useEffect(() => {
    const smsVerify = localStorage.getItem('sms-id')
    if (!smsVerify) {
      navigate("/");
    }
  }, [navigate])

  return (
    <Center>
      <Header />
      <EndContainer>
        <EndContainerBlock>
          <Title>თანხმობა პერსონალური მონაცემების დამუშავებაზე</Title>
          <EndContainerBox>
            <p>
              წინამდებარე თანხმობით უფლებას ვანიჭებ „თეგეტას ჯგუფს“ და მის
              პარტნიორ კომპანიებს, რომ პირდაპირი მარკეტინგის მიზნებისთვის
              ტელეფონის (მათ შორის, მობილური ტელეფონის ნომერზე SMS-ების მიღების
              გზით), ელექტრონული ფოსტის, ასევე, სხვა ელექტრონული საშუალებებით
              (მათ შორის, მობილური აპლიკაციების მეშვეობით) მომეწოდოს ინფორმაცია
              კომპანიებში არსებული სიახლეების, პროდუქტებისა და შეთავაზებების,
              ფასდაკლებების, აქციების ან ახალი წამოწყების თაობაზე.
            </p>
            <p>
              ამასთან, ინფორმირებული ვარ, რომ „თეგეტას ჯგუფში“ შემავალი და
              პარტნიორი კომპანიების მიერ დამუშავდება ის პერსონალური მონაცემები,
              რაც დაცულია აღნიშნულ კომპანიებში და რაც მოიცავს შემდეგს: სახელი,
              გვარი, პირადი ნომერი, ტელეფონის ნომერი, ფაქტობრივი მისამართი,
              სქესი, ელექტრონული ფოსტის მისამართი, ჩემს მფლობელობაში არსებული
              სატრანსპორტო საშუალების მონაცემები და „თეგეტას ჯგუფში“ და პარტნიორ
              კომპანიებში ჩემ მიერ განხორციელებული აქტივობები/ოპერაციები,
              შესაბამისად, თითოეული კომპანია უფლებამოსილია მოითხოვოს და მიიღოს
              „თეგეტას ჯგუფის“/პარტნიორი სხვა კომპანიებიდან ჩემს შესახებ
              არსებული ინფორმაცია, რაც ინახება შესაბამის კომპანიაში
            </p>
            <p>
              ამასთან, ვაცხადებ, რომ ინფორმირებული ვარ საქართველოს
              კანონმდებლობით მონიჭებული ჩემი უფლებების თაობაზე, მათ შორის,
              ვაცნობიერებ, რომ მე მაქვს უფლება ნებისმიერ დროს უარი ვთქვა ჩემი
              მონაცემების პირდაპირი მარკეტინგის მიზნით დამუშავებაზე, მათ შორის,
              თითოეული კომპანიის SMS შეტყობინების მიღებაზე უარის თქმისთვის
              გამოვიყენო SMS OFF-ის ფუნქცია, რომელიც უფასოა;
            </p>
          </EndContainerBox>
          <Button onClick={() => agree()}>ვადასტურებ</Button>
        </EndContainerBlock>
      </EndContainer>
      <EndContainerBlock>
        <Footer fullWidth active={6} />
      </EndContainerBlock>
    </Center>
  );
};

export default EndStep1;
