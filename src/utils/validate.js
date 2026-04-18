export const checkValidData=(email,password)=>{

const isEmailValid= /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
const isPswValid= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)

if(!isEmailValid) return "Email ID is not valid"
if(!isPswValid) return "Enter a Strong Password of length greater than 7"

return null
}