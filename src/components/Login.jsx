import React, { useState } from "react";
import ImageProfile from '../assets/loginvector.jpeg'
import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase)


const Login = () =>{

    const[registrando, setRegistrando] = useState(false)

    const functAutenticacion = async(e) => {

        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registrando){

            try {

                await createUserWithEmailAndPassword(auth, correo, contraseña)
                
            } catch (error) {

                alert("Asegurese que la contraseña tenga mas de 8 caracteres")
                
            }
            
        }
        else{
            try {

                await signInWithEmailAndPassword(auth,correo,contraseña) 

            } catch (error) {

                alert("El correo o la contraseña son incorrectos")
            }
            
        }

    }

    return(
      
            <div className="padre">
                <div className="card card-body">
                    <img src={ImageProfile} alt="" className="estilo-profile"/>
                    <form onSubmit={functAutenticacion}>
                        <input type="text" placeholder='Ingresar Email'className="cajatexto" id='email' />
                        <input type='password' placeholder="Ingresar contraseña" className="cajatexto" id='password'/>
                        <button className="btn-form">{registrando ? "Registrate" : "Inicia sesion" }</button>
                    </form>
                    <h4 className="texto">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"} <button className="btn-switch" onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "Registrate"}</button></h4>

                </div>
            </div>
    )
}

export default Login