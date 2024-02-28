import { useNavigate } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Button from "../../components/styled/Button";
import { Center, Title } from "../../components/styled/Global";
import { EndContainer, EndContainerBlock, EndContainerBox } from "./styled";

const EndStep3 = () => {
  const navigate = useNavigate()
  return (
    <Center>
      <Header />
      <EndContainer>
        <EndContainerBlock>
          <Title>
            საქონლის მიწოდებისა და მომსახურების გაწევის სტანდარტული პირობები
          </Title>
          <EndContainerBox>
            <p>
              გთხოვთ, გაითვალისწინოთ, რომ იმ შემთხვევაში, თუ თქვენ ხართ ფიზიკური
              პირი, რომელიც პირადი სარგებლობისთვის ყიდულობს/იღებს
              ავტოტექმომსახურებას/საქონელს „თეგეტას ჯფუფში“ შემავალი
              კომპანიებისგან და წარმოადგენთ მომხმარებელს, „საქონლის მიწოდებისა
              და მომსახურების გაწევის სტანდარტული პირობები“ განთავსებულია ლინკზე
              და გთხოვთ, დაეცნოთ და დაეთანხმოთ მას. 
            </p>
          </EndContainerBox>
          <Button onClick={() => navigate("/success")}>ვადასტურებ</Button>
        </EndContainerBlock>
      </EndContainer>
      <EndContainerBlock>
        <Footer fullWidth active={8} />
      </EndContainerBlock>
    </Center>
  );
};

export default EndStep3;
