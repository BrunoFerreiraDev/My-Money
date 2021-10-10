import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue-ligth: #ADE2EC;
        
        --blue: #04ABCA; 

        --text-title: #363F5F;
        --text-body:#969CB3;

        --background: #F0F2F5;
        --shape:#FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px (Desktop)

    html{
        @media (max-width:1080px){
            font-size:93.75%;
        }
        @media (max-width){
            font-size:87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothin: antialiased;// em alguns navegadores com o gogle a fonte fica mais nitida
    }

    button{
        cursor:pointer;
    }
    [dsabled]{
        opacity:0.6;

        cursor: not-allowed;
    }
`