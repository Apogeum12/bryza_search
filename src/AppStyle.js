import styled, {css} from 'styled-components';
import ico from './img/logo.png';
import pic_mob from './img/pic_mob.png';
import pic_tabl from './img/pic_tabl.png';
import pic_desktop from './img/pic_desktop.jpg';

export const AppMain = styled.div`
	display: block;
	width: 100vw;
	height: 100vh;
	background-color: #464646;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	background-attachment: fixed;
	overflow: hidden;

    @media screen and (max-width: 526px) {
		background-image: url(${pic_mob});
    }
    @media screen and (min-width: 527px) and (max-width: 941px) {
        background-image: url(${pic_tabl});
    }
    @media screen and (min-width: 942px) {
        background-image: url(${pic_desktop});
    }
`;
export const BlurFiltr = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(20px);
`;




export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 2em;
    
    width: 40vw;
    height: auto;
    margin: 0 auto;
    padding: 0.25em 0;
    border-radius: 6%;

    @media screen and (max-width: 526px){
        width: 94vw;
        padding: 0.05em 0;
    }
    @media screen and (min-width: 527px) and (max-width: 941px){
        width: 90vw;
        padding: 0.1em 0;
    }
    @media screen and (min-width: 942px) and (max-width: 1641px){
        width: 60vw;
        padding: 0.2em 0;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;

    width: 80%;
    margin: 0 auto;
    @media screen and (max-width: 941px){
        width: 70%;
    }
`;
export const ResultContainer = styled(AppContainer)`
    display: ${({set_display})=>set_display};
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 0.8em;
    justify-content: center;
    max-height: 82vh;
    overflow-x: hidden;
    overflow-y: scroll;
    
    // --- Set Splash Screen when load results --- //
    ${({ isResponse })=> 
            isResponse && css`
                height: 55vh;
                background-size: 12%;
                background-image: url(${ico});
                background-repeat: no-repeat;
                background-position: center center;
                animation: logo 2.4s infinite ease-out;
                animation-direction: alternate;
                will-change: animation-size;
                @keyframes logo{
                        0%{background-size: 10%;}
                        25%{background-size: 12%;}
                        50%{background-size: 14%;}
                        75%{background-size: 12%;}
                        100%{background-size: 10%;}
                    }

                @media screen and (max-width: 526px){
                    height: 75vh;
                    background-size: 18%;
                    @keyframes logo{
                        0%{background-size: 15%;}
                        25%{background-size: 17%;}
                        50%{background-size: 18%;}
                        75%{background-size: 17%;}
                        100%{background-size: 15%;}
                    }
                }
                @media screen and (min-width: 527px) and (max-width: 941px){
                    height: 75vh;
                    background-size: 15%;
                    @keyframes logo{
                        0%{background-size: 13%;}
                        25%{background-size: 15%;}
                        50%{background-size: 16%;}
                        75%{background-size: 15%;}
                        100%{background-size: 13%;}
                    }
                }
                @media screen and (min-width: 942px) and (max-width: 1641px){
                    height: 60vh;
                    background-size: 13%;
                    @keyframes logo{
                        0%{background-size: 11%;}
                        25%{background-size: 13%;}
                        50%{background-size: 15%;}
                        75%{background-size: 13%;}
                        100%{background-size: 11%;}
                    }
                }
            `
    }

    background-color: rgba(0,0,0,0.1);
    border-radius: 4%;
    
    // Scroll Bar settings
    &::-webkit-scrollbar{
        width: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    @media screen and (max-width: 526px){
        display: ${({set_display})=>set_display};
        flex-direction: column;
        flex-wrap: nowrap;
        max-height: 82vh;
        overflow-y: scroll;
    }
    @media screen and (min-width: 527px) and (max-width: 941px){
        padding: 0.1em 0;
        max-height: 60vh;
        overflow-y: scroll;
    }
`;
ResultContainer.defaultProps = {
    set_display: props => props.visibleResult? 'inline-flex': 'none',
    set_margin: props => props.visibleResult? '0.15em 0': '1.05em 0',
}

export const SearchBar = styled.input`
    width: 93%;
    height: 1.4em;
    font-size: 1.2em;
    border-top: none;
    border-right: none;
    padding: 0 0.5em;
    outline: none;
    border-left: 1px solid snow;
    border-bottom: 1px solid snow;
    border-radius: 0;
    box-shadow: 0em 0.05em 0.1em 0em #0f0f0f;
    text-align: center;
    /* Setting colors and others */
    &:hover{
        box-shadow: 0em 0.1em 0.2em 0em #0f0f0f;
    }
    &:active{
        box-shadow: 0em 0.15em 0.25em 0em #0f0f0f;
    }
    &::placeholder{
        text-align: center;
    }
    @media screen and (max-width: 526px){
        width: 80%;

        &::placeholder{
            font-size: 0.8em;
        }
    }
    @media screen and (min-width: 527px) and (max-width: 941px){
        &::placeholder{
            font-size: 0.8em;
        }
    }
`;
export const SearchButtonLeft = styled.button`
    width: 10%;
    height: 1.4em;
    font-size: 1.2em;
    padding: 0 0.25em;

    background-color: rgba(18, 4, 2, 0.24);
    border: none;
    border-radius: 20% 0 0 20%;
    box-shadow: 0.1em 0.05em 0.2em 0em #0f0f0f;

    text-align: center;
    outline: none;
    cursor: pointer;
    &:hover{
        box-shadow: 0.15em 0.1em 0.25em 0em #0f0f0f;
        background-color: rgba(18, 4, 2, 0.64);
        color: rgba(226, 58, 40, 0.54);
    }
    &:active{
        box-shadow: 0.2em 0.2em 0.25em 0em #0f0f0f;
    }
    @media screen and (max-width: 526px){
        width: 20%;
    }
    @media screen and (min-width: 527px) and (max-width: 941px){
        width: 12%;
    }
`;
export const SearchButtonRight = styled(SearchButtonLeft)`
    border-radius: 0 20% 20% 0%;
    box-shadow: 0.1em 0.05em 0.1em 0em #0f0f0f;

    &:hover{
        box-shadow: 0.1em 0.1em 0.2em 0em #0f0f0f;
    }
    &:active{
        box-shadow: 0.1em 0.1em 0.25em 0em #0f0f0f;
    }
`;
export const IconButton = styled.button`
    // TODO:
    width: 8%;
    height: 10%;
    border-radius: 25%;
    border: none;
    cursor: pointer;
    background-color: rgba(18, 4, 2, 0.64);
    padding: 0.25em 0;
    z-index: 10;

    &:hover{
        background-color: rgba(18, 4, 2, 0.84);
        color: rgba(226, 58, 40, 0.84);
    }

    @media screen and (max-width: 526px){
        width: 16%;
        height: 32%;
        padding: 0.6em 0.3em;
    }
`;