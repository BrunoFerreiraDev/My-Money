import styled from "styled-components";

interface DefaultTheme {
    body: string;
    header: string;
    button: string;
    total: string;
    backgraounSemiDark: string;
}

export const Container = styled.div<{ theme: DefaultTheme }>`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--text-body);
            color: ${(props) => props.theme.fontColor};
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: red;
            border-radius: 0.25rem;
            
            background: ${(props) => props.theme.backgraounSemiDark};
            color: ${(props) => props.theme.fontColor};
            
            &:first-child{//quando a tag td for o primeiro filho aplica o css
                color: var(--text-title);
                color: ${(props) => props.theme.fontColor};
            }
            &.deposit{//quando td tiver a class deposit aplica o css
                color: var(--green);
            }
            
            &.withdraw{//quando td tiver a class deposit aplica o css
                color: var(--red);
            }
        }
    }
`;
