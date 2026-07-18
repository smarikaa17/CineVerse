import { Check, LucideCheck, LucideCross, LucideDrone, LucideX, X } from 'lucide-react';
import React from 'react'

const ValidationRuleRow=({condition,Message})=>
  {
  return(
     <div className='flex items-center '>
    {condition?<Check color='green' size={15} />:<X color='red' size={15}/>}<p>{Message}</p>
      </div>
  )
}
const StrengthCalculator=(score)=>{
 switch (score){
  case 1:
   return {width:20,color:"red",text:"Weak password"}
  case 2:
   return {width:40,color:"red",text:"Weak password"}
  case 3:
   return {width:60,color:"orange",text:"Medium password"}
  case 4:
   return {width:80,color:"orange",text:"Medium password"}
  case 5:
  return {width:100,color:"#77ab59",text:"Strong password"}
  default:
      return { width: 0, color: "white",text:"Enter a password" };
}
}

const PasswordSrengthChecker = ({pass}) => {
    
    const hasLength= pass.length>=8;
    const hasNum= /[0-9]/.test(pass);
    const hasLowerCase=/[a-z]/.test(pass);
    const hasUpperCase=/[A-Z]/.test(pass);
    const hasSpecialChar=/[^A-Za-z0-9]/.test(pass)

 const validations = [
  hasLength,
  hasNum,
  hasLowerCase,
  hasUpperCase,
  hasSpecialChar,
];

const score = validations.filter(Boolean).length;

    const result=StrengthCalculator(score);

  return (
    <div className='flex flex-col'>
        <div className=' h-1 my-1 w-full bg-slate-200 rounded-md'> 
          <div style={{
            width:`${result?.width}%`,
            backgroundColor:result?.color
          }} className={`h-full rounded-md transition-[width] duration-500 ease-out`}></div>
        </div>
    <div className='p-2 my-4 w-full bg-[#3b3b68]'>
    
    <p><span style={{color:result?.color}}>{result?.text}</span>. Must contain:</p>
    <div className='text-sm p-2'>
    <ValidationRuleRow condition={hasNum} Message={"At least 1 number"}/>
    <ValidationRuleRow condition={hasLowerCase} Message={"At least 1 lowercase"}/>
    <ValidationRuleRow condition={hasUpperCase} Message={"At least 1 uppercase"}/>
    <ValidationRuleRow condition={hasSpecialChar} Message={"At least 1 special character"}/>
    <ValidationRuleRow condition={hasLength} Message={"At least 8 length characters"}/>
    </div>
    </div>
    </div>
  )
}

export default PasswordSrengthChecker