


const [Question, setQuestions] = useState(QuestionApi);
const [ activeIndex, setActiveIndex] = useState(null); 

const showAnswer = (index)=>{
  setActiveIndex(index)
  // sethideshow(true)
}

const hideAnswer=(curEle,index)=>{
}

return (
      <div className='box'>
      <h1><u>React Interviw Questions</u></h1>
      <div>
      
      <div> 
        {Question.map((curEle,index)=>{
            return(<div className='adjustbox' key={index}>

            <p className='add' onClick={()=>showAnswer(index) } onDoubleClick={hideAnswer(curEle,index)}key={index} id={index}
             >+</p>
            <h5> {curEle.Question}</h5>

            { activeIndex===index ? <p>{curEle.Answer}</p>: "" } 


            </div>)
            // Ternary Operator conditin ? true : false 
             // && (the logical AND) operator returns TRUE if both conditions are TRUE...otherwise False
      })}
      </div>
      </div>
     </div>
)