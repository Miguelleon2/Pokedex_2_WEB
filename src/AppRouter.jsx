import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from './credenciales';
import { Navigation } from './components/Navigation';
import Login from './components/Login';
import { HomePage, PokemonPage, SearchPage } from './pages';

const auth = getAuth(appFirebase);

export const AppRouter = () => {
    
	const [usuario, setUsuario] = useState(null)

    onAuthStateChanged(auth,(usuarioFirebase) => {
        if (usuarioFirebase){
			
            setUsuario(usuarioFirebase)
        }
        else{
            setUsuario(null)
        }
    })

    return (
        <Routes>
            {usuario ? (
                <Route path='/' element={<Navigation />}>
                    <Route index element={<HomePage />} />
                    <Route path='pokemon/:id' element={<PokemonPage />} />
                    <Route path='search' element={<SearchPage />} />
                </Route>
            ) : (
                <Route path="*" element={<Login />} />
            )}
            <Route path='*' element={<Navigate to={usuario ? '/' : '/login'} />} />
        </Routes>
    );
};
