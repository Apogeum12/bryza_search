import React, {useState ,memo, Fragment} from 'react';
import  {Result, IconResult, TitleResult,
    ResultPriev, IconResultPriev, DescResultPiev,
    TitleResultPriev, GoToWebsite, ToWebsite,
    DescResultDescPiev} from './IconResultStyle';
import icoGo from './img/globe.svg'; 

const ResultSearch = (props) => {
    const [isClick, setIsClick] = useState(false);
    const marginFirstPriev = String((props.length * 58).toFixed(0));
    const marginFirst = String((props.length * 54).toFixed(0));

    return (
        <Fragment>
            {(isClick)? 
                (<ResultPriev id={props.id} onClick={()=>setIsClick(false)} marginFirstPriev={marginFirstPriev}>
                    <IconResultPriev src={props.src} decoding="sync" crossorigin="anonymous" referrerpolicy="no-referrer"/>
                    <DescResultPiev>
                        <TitleResultPriev>{props.title}</TitleResultPriev>
                        <DescResultDescPiev> {props.desc}</DescResultDescPiev>
                    </DescResultPiev>
                    <GoToWebsite href={props.url} target="_blank" rel="noopener noreferrer">
                        <ToWebsite src={icoGo} alt="GoToWebsite"/>
                    </GoToWebsite>
                </ResultPriev>):
                (<Result id={props.id} className="ResultSearch" onClick={()=>setIsClick(true)} marginFirst={marginFirst}>
                    <IconResult src={props.src} decoding="sync" crossorigin="anonymous" referrerpolicy="no-referrer"/>
                    <TitleResult>{props.title}</TitleResult>
                </Result>)
            }
        </Fragment>
    )
}
export default memo(ResultSearch);