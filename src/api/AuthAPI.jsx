import { signInwWithEmailAndPassword ,createUserWithEmailAndPassword, getAuth    } from 'firebase/auth'

let auth =getAuth() 

export const LoginAPI = (email,password) => {
    try{
    let response = signInwWithEmailAndPassword(auth ,email ,password)
    return response ;
    } catch (err) {
       alert(err.errors.message);
    }
};
export const RegisterAPI = (email,password) => {
    try{
    let response = signInwWithEmailAndPassword(auth ,email ,password)
    return response ;
    } catch (err) {
       alert(err.errors.message);
    }
};