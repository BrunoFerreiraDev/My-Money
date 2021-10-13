import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0%.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{//torca a cor do texto do placeholder
            color: var(--text-body);
        }

        & + input{//todo input que tiver um umput antes receberá um margin-top
            margin-top: 1rem;
        }
    }

    button[type="submit"]{//aplica estilo apenas no button que tem o typo submit
        width:100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;

        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

`;

interface RadioBoxProps {
    isActive: boolean;
    isActiveColor: 'green' | 'red'
}

const colors = {
    green: '#33cc95',
    red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25;

    background: ${(props) => props.isActive
        ? transparentize(0.8, colors[props.isActiveColor])
        : 'transparent'
    };

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.3s;

        &:hover{
            border-color: ${darken(0.2, '#d7d7d7')} ;//uma função da biblioteca polished que serve para escureçer a cor, que no caso foi em 20%
        }

        img{
            width: 20px;
            height: 20px;
        }

        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-tiltle);
        } 
`;