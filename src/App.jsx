import React, {useState, Fragment} from 'react'
import {AppMain, BlurFiltr, AppContainer, SearchContainer, SearchBar,
  SearchButtonLeft, SearchButtonRight, ResultContainer, IconButton} from './AppStyle';
import axios from 'axios';
import ico from './img/error.svg'; 

import ResultSearch from './IconResult';

const App = () => {
  const [visibleResult, setVisibleResult] = useState(false);
  const [postquery, setPostQuery] = useState({});
  const [getResponse, sentGetResponse] = useState([]);
  const [isResponse, setIsResponse] = useState(false);
  const [dataLength, setDataLength] = useState(0);

  function submit(e){
    e.preventDefault();
    destroyResult();

    let writequery = false;
    if(typeof postquery.newdata === 'object'){
      if(Object.values(postquery.newdata)[0] === ""){
        writequery = true;
      }
    };
    if(postquery.newdata !== undefined && writequery !== true){
      axios.post("/queryAndResponse", 
              postquery.newdata)
          .then((res)=>{
          sentGetResponse(res.data);
          setDataLength(res.data.length);
          setIsResponse(true);
        });
      setVisibleResult(true);
    } else {
      sentGetResponse([
        {
          desc: "What you search? About you think now?",
          title: "None query!",
          icon: ico,
          id: 0
        }
      ]);
      setIsResponse(true);
      setDataLength(0);
      setVisibleResult(true);
    }
  };

  const pressKey = (e) => {
    if(e.key === "Enter"){
      submit(e);
    }
  }

  const setQueryFromEnter = (e) => {
    const newdata = {};
    newdata[e.target.id] = e.target.value;
    setPostQuery({newdata});
  }

  const destroyResult = () => {
    sentGetResponse([]);
    setIsResponse(false);
    setVisibleResult(false);
  }

  return (
    <AppMain className="App">
      <BlurFiltr>
        <AppContainer >
          <SearchContainer>
            <SearchButtonLeft > o </SearchButtonLeft>
            <SearchBar type="text" id="searchquery" placeholder="Write Query:" onChange={(e)=>setQueryFromEnter(e)} onKeyPress={(e)=>pressKey(e)} />
            <SearchButtonRight onClick={(e)=>submit(e)} > S </SearchButtonRight>
          </SearchContainer>
          <Fragment>
          {isResponse?
            (<ResultContainer visibleResult={visibleResult}>
              {(getResponse !==[])?
                  getResponse.map((res)=>{
                    return (<ResultSearch key={res.id} id={res.id} src={res.icon} title={res.title} desc={res.desc} url={res.url} length={dataLength}/>)
                  }): setVisibleResult(false)
                }
            </ResultContainer>):
            (<ResultContainer isResponse visibleResult={visibleResult}>
              {(getResponse !==[])?
                  getResponse.map((res)=>{
                    return (<ResultSearch key={res.id} id={res.id} src={res.icon} title={res.title} desc={res.desc} length={dataLength}/>)
                  }): setVisibleResult(false)
                }
            </ResultContainer>)
          }
          </Fragment>
          {visibleResult? (<IconButton onClick={()=>destroyResult()}>X</IconButton>): null }
        </AppContainer>
      </BlurFiltr>
    </AppMain>
  )
}

export default App;