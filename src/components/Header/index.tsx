import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/CassiDEV.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <span>
          <img id="logo" src={logo} /> MCassiMoney
        </span>
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
