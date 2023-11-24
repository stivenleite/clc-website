import { Container, Welcome, Buttons } from "./styles"

import { Header } from "../../components/Header"

export function Home(){
    return(
        <Container>
            <Header />
            
            <Welcome>
                <h1>Welcome Home</h1>
                <p>Know Jesus - Find Community - Discover Purpose - Make a Difference</p>
                <Buttons>
                    <button>WATCH</button>
                    <button>JOIN</button>
                    <button>GIVE</button>
                </Buttons>
            </Welcome>
        </Container>
    )
}