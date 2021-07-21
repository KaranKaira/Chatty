import React , {useContext,useState,useEffect} from 'react';
import { useHistory } from 'react-router';

import {auth} from '../firebase'

const AuthContext = React.createContext();

export const useAuth = ()=>useContext(AuthContext)
export const AuthProvider = ({children})=>{
        const [loading,setLoading] = useState(true)
        const [user,setUser] = useState(null)
        const history = useHistory()

        useEffect(()=>{
            auth.onAuthStateChanged((user)=>{
                setUser(user)
                setLoading(false)  
                //? only when we have a user then only we go to chats 
                if(user)  history.push('/chats') 
            })
        },[user,history])
        
        //! this value object needed when working wiht auth context
        const value = {user}

        return (
            <AuthContext.Provider value = {value}>
                {!loading && children}
                 
            </AuthContext.Provider>
        )
}