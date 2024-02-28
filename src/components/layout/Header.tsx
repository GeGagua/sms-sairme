import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../styled/BackButton";
import { FC } from "react";
import sairme from "../../assets/img/sairme.svg";

const HeaderContainer = styled.header`
  height: 56px;
  position: relative;
  width: 100%;
  min-height: 56px;
  max-width: 1048px;
  margin: 0 auto;

  img {
    height: 56px;
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 992px) {
    height: 42px;
    min-height: 42px;

    img {
      height: 36px;
    }
  }
`;

interface IProps {
  hideBack?: boolean
  back?: boolean
}

const Header: FC<IProps> = ({ hideBack, back }) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      {!hideBack && <BackButton onClick={() => back ? navigate('/mobile') : navigate(-1)} />}
      <Link to={"/"}>
        <img src={sairme} alt="Tegeta Leasing" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
