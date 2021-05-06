import styled from 'styled-components';

export const Result = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: unwrap;

    width: 33%;
    min-height: 80px;
    align-items: center;

    padding: 0.25em 0.5em;
    margin: 0.25em 0;
    background-color: rgba(224,4,224,0.06);
    border-radius: 12%;

    cursor: pointer;
    &:hover{
        box-shadow: 2px 2px 10px 2px rgba(124,124,124,0.8);
    }

    @media screen and (max-width: 526px){
        width: 90%;
        padding: 0.1em 0.2em;
        margin-top: ${({set_margin})=>set_margin}px;
    }
    @media screen and (min-width: 527px) and (max-width: 941px){
        padding: 0.55em 0.5em;
    }
`;
Result.defaultProps = {
    set_margin: props=>(props.id===0)? props.marginFirst: '0',
}

// --- Priev --- //
export const ResultPriev = styled(Result)`
    align-items: center;
    width: 96%;
    min-height: 150px;
    padding: 0.2em 0;
    background-color: rgba(224,48,24,0.18);
    border-radius: 6%;
    cursor: pointer;
    @media screen and (max-width: 526px){
        margin-top: ${({set_marginPriev})=>set_marginPriev}px;
    }
`;
ResultPriev.defaultProps = {
    set_marginPriev: props=>(props.id===0)? props.marginFirstPriev: '0',
}
export const DescResultPiev = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: unwrap;
    align-items: center;
    text-align: inherit;
    font-size: 0.92em;

    width: 70%;
    height: 100%;
    max-height: 150px;
    padding: 0.55em 0;
    overflow-x: hidden;
    overflow-y: scroll;
        // Scroll Bar settings
        &::-webkit-scrollbar{
        width: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`;
export const DescResultDescPiev = styled.p`
    padding: 0.25em 0.15em;
    font-weight: 300;
    min-height: 92%;
    font-size: xx-small;
    @media screen and (min-width: 941px){
        font-size: x-small;
    }
`;
export const IconResult = styled.img`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 32%;
    height: 72px;
    padding: 0.5em 0.5em;
    overflow: hidden;

    @media screen and (max-width: 526px){
        height: 64px;
    }
    @media screen and (min-width: 527px) and (max-width: 941px){
        width: 35%;
    }
    @media screen and (min-width: 942px) and (max-width: 1641px){
        width: 26%;
        height: 48px;
    }
`;
// --- Priev --- //
export const IconResultPriev = styled(IconResult)`
    justify-content: center;
    align-items: center;
    width: 12%;
    height: 84px;
    padding: 0.85em 0.85em;
    @media screen and (max-width: 526px){
        width: 21%;
        height: 72px;
    }
`;
export const TitleResult = styled.p`
    display:flex;
    align-items: center;
    width: 68%;
    height: 64px;
    padding: 0.25em 0.25em;

    font-size: xx-small;
    text-align: center;
    overflow: hidden;

    @media screen and (max-width: 526px){
        min-width: 80%;
        font-size: revert;
        text-align: initial;
    }
    @media screen and (min-width: 527px) and (max-width: 941px){
        width: 65%;
        text-align: center;
    }
    @media screen and (min-width: 942px) and (max-width: 1641px){
        width: 74%;
    }
`;
// --- Priev --- //
export const TitleResultPriev = styled(TitleResult)`
    justify-content: center;
    width: 100%;
    height: 8%;
    padding: 0.2em 0em;
    font-size: small;
`;
export const GoToWebsite = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: 25%;
    text-decoration: none;
    font-size: 1.2em;
`;
export const ToWebsite = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    &:hover{
        transform: scaleX(1.15) scaleY(1.15);
    }
`;