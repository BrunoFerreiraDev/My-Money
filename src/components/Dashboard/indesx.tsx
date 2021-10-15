import { Summary } from "../Summary";
import { Transactionstable } from "../TransactionsTable";

import iconSun from '../../assets/iconSun.png'
import iconMoon from '../../assets/iconMoon.png'

import { Container } from "./styles";

interface DashboardProps {
    onThemeTooggle: () => void;
    stateTheme: string;
}

export function Dashboard({ onThemeTooggle, stateTheme }: DashboardProps) {
    return (
        <Container>
            <Summary />
            <Transactionstable />
            <button onClick={() => onThemeTooggle()}>
                {stateTheme === 'dark' ? <img src={iconMoon} alt="icon da lua" /> : <img src={iconSun} alt="icon do sol" />}
            </button>


        </Container>
    )
}