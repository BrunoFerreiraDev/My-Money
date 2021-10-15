import { createGlobalStyle } from 'styled-components'

interface DefaultTheme {
    body: string;
    header: string;
    button: string;
}

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
    :root{
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #04ABCA; 
        --green: #33CC95;
        
        --blue-ligth: #3A82D3;

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

        background: ${(props) => props.theme.body};
        .header{
            background: ${(props) => props.theme.header}
        }
        .header > div >button{
            background: ${(props) => props.theme.button}
        }
    }
    
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor:pointer;
    }
    [dsabled]{
        opacity:0.6;

        cursor: not-allowed;
    }

    .react-modal-overlay{
        //estilos padão de um overlay de modal
        background: rgba(0,0,0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
    
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.5);
        }
    
}
`