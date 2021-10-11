import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`;
export const Content = styled.div`
    max-width: 1120px;
    margin:0 auto;

    padding: 2rem 1rem 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-ligth);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.3s;
        //aplica um transição de 3 seundos para a propriedade filter

        &:hover{
            filter: brightness(0.9)
            //a propriedade filter aplica um filtro determinado pelo programado, 
            //que nesse caso é escurecer a co em 10%
        }
    }
`;