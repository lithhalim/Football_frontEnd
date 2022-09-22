import React, { useEffect, useState } from 'react';
import {BrowserRouter,Route,Routes } from "react-router-dom"
import Header from './combonants/header/header';
import News_bar from './combonants/news-bar/News-bar';
import Scores_conteiner from './combonants/scores/scores/Scores';
import Side_bar from './combonants/side-bar/side_bar';
import "./style-app/style.scss";
import { store } from "./redux/store/store";
import { Provider } from 'react-redux';
import { format } from 'fecha';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { AllData_Provider } from './context-api/All_News'; 
import axios from 'axios';
import News_Page from './combonants/News/News_Page/news_Page';
import { Two_Plear_DataProvider } from './context-api/Select_Two_Plear';
import Two_Element_Select from './combonants/two-element-page/Two_Element_Select';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Home_News from './combonants/home_news/Home_News';

const queryClient = new QueryClient()



function App() {
    const [AllData,setdata]=useState<any>();
    const [isLoading,setisLoading]=useState<any>(true);
    const [selectCountry,setselectCountry]=useState<any>( false)
    const [DataSpecificCountry,setDataSpecificCountry]=useState<any>(false)




    //Use To Save The Time And Get All Time Have
    let dateNow= format(new Date(), 'YYYY-MM-DD '); 
    const [New_Date,setNew_Date]=useState({day:(dateNow.split("-")[2]),month:dateNow.split("-")[1]})
 

    useEffect(()=>{
      const{day,month}=New_Date
       axios.get(`https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${process.env.REACT_APP_API}&from=2022-${month}-${day}&to=2022-${month}-${day}`).then((data)=>{
        setdata(data)
        setisLoading(false)

       })
    },[New_Date])

    let Get_date=(data:any)=>{
      setNew_Date(data)
    }
    

    //Filter Data Depend On Specific Country To Use
    let country=['England',"Spain","Italy","France","Portugal","Netherlands","Germany","Russia","Brazil","Ukraine","Algeria","Argentina","Belgium","Czech Republic","Egypt","Europe","Greece","Jordan","Saudi Arabia","Sweden","Turkey","Uruguay","USA"];
    let DataUse:any=[];
    if(AllData!==undefined){
      country.forEach((x)=>{
       let FilterData= AllData.data.result.filter((data:any)=>x==(data.country_name))
       DataUse.push(FilterData.slice(0,4))
      })
    }


    //show just the country select at the scoure 
    const Select_Country_Child=(data:any)=>{
      setselectCountry(`football ${data}`)
      let DataFilter=DataUse.filter((TargetData:any,i:any)=>{
        if(TargetData.length>0){
          if(TargetData[0].country_name==data){
            return TargetData
          }
        }
      })
      setDataSpecificCountry(DataFilter)
      }
  
    
  return (
    <Provider store={store}>
        <Two_Plear_DataProvider>
            <AllData_Provider>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<> <Header/>{DataUse.length>0&&isLoading==false?<div className='container-element'> <Side_bar DataUse={DataUse}  Select_Country_Child={Select_Country_Child}/> <Scores_conteiner DataUse={DataUse} Get_date={Get_date}/> <News_bar selectCountry="football"/></div>:<div style={{position:"absolute",left:"50%",top:"50%"}}>    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">      <CircularProgress color="inherit"  style={{width:"60px"}}/></Stack></div>}</>  }/>
                            <Route path="/selectcountry" element={<> <Header/>{DataUse.length>0&&isLoading==false?<div className='container-element'> <Side_bar DataUse={DataUse}  Select_Country_Child={Select_Country_Child}/> <Scores_conteiner DataUse={DataSpecificCountry} Get_date={Get_date}/> <News_bar selectCountry={selectCountry}/></div>:<div style={{position:"absolute",left:"50%",top:"50%"}}>    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">      <CircularProgress color="inherit"  style={{width:"60px"}}/></Stack></div>}</>  }/>
                            <Route path="/newsPage" element={<> <Header/> <News_Page/></>  }/>
                            <Route path="/allNews" element={<> <Header/><Home_News/> </>  }/>
                            <Route path="/TwoplearPgae" element={<> <Header/> <Two_Element_Select/></>  }/>
                        </Routes>
                    </BrowserRouter>
                </QueryClientProvider>
            </AllData_Provider>
          </Two_Plear_DataProvider>
    </Provider>


  );
}

export default App;
