import { Container } from "./styles";

import Logo from "../../assets/logo.png";

export function Header(){
    return(
        <Container>
            <img src={Logo} alt="CLC logo" />   
            <ul>
                <li><a href="">WHO WE ARE</a></li>
                <li><a href="">EVENTS</a></li>
                <li><a href="">LOCATION</a></li>
                <li><a href="">GIVE</a></li>
            </ul>
        </Container>
    )
}