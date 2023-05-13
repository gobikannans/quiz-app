import {useContext,createContext,useState} from "react"

const final_answers=[];
const answers=["VLOOKUP","=SUM(A3,A6)","Use the Round() function","Cell", "665218" ]



export const AppContext=createContext(null)

 const AppContextProvider=({children})=>{

    const[question,setQuestion]=useState(0)
    const[val,setVal]=useState("")
    const [mark,setMark]=useState(0)
    const [time,setTime]=useState({min:0,sec:0})
    const [intervalId,setIntervalId]=useState()
    const [resTime,setResTime]=useState(0)

    var updatedMin =time.min,updatedSec=time.sec;

    const startTimer=()=>{
        run();
        setIntervalId(setInterval(run,1000));
    }

    const run=()=>{
        if(updatedSec===60){
        updatedMin++;
        updatedSec=0
    }if(updatedSec===1){
        final_answers.push(val)
        clearInterval(intervalId)
        setResTime(updatedSec)
    }
    updatedSec ++;
    return setTime({sec:updatedSec,min:updatedMin})
    }

    const calMark=()=>{
        if(final_answers.includes(answers[question])){
            setMark(prev=>prev+1)
        }
    }


    const nextQuestion=()=>{
        if(val==="" || val===final_answers[final_answers.length-1]){
             alert("Please select the answer");
             return
        }
        final_answers.push(val)
        calMark()
        setQuestion(prev=>prev+1)
    }



    const onRadioChange=(event)=>{
        setVal(event.target.value)
    }

    const submit=()=>{
        final_answers.push(val)
        clearInterval(intervalId)
        calMark();
       

    }

    return(
    <AppContext.Provider value={{question,nextQuestion,val,onRadioChange,submit,mark,startTimer,time,intervalId,resTime}}>
        {children}
    </AppContext.Provider>

    )
    
}

export const UseAppContext=()=>{
    const {question,nextQuestion,val,onRadioChange,submit,mark,startTimer,time,intervalId,resTime}=useContext(AppContext)
    return{question,nextQuestion,val,onRadioChange,submit,mark,startTimer,time,intervalId,resTime};
}

export default AppContextProvider
