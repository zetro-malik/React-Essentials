import React, { useState,useReducer,useEffect } from "react";



const init_data = {
    isLoading: false,
    data:"",
    isError:false,
}

const ApiReducer = (state,action)=>{
    switch(action.type){
        case  "LOADING":
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        case  "SUCCESS":
                return {
                    ...state,
                    isLoading:false,
                    data:action.payload
                }
        case  "ERROR":
                    return {
                        ...state,
                        isLoading:false,
                        isError:true
                    }
        default :
        return state;
            
    }
}



const UseReducerApiExample = () => {
    
    const [state,dispatch] = useReducer(ApiReducer, init_data);

    useEffect(()=>{
        APIcall();
    },[])


    const APIcall = async () => {
        dispatch({type:"LOADING"})
        try {
          
            let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            res = await res.json()
            dispatch({type:"SUCCESS",payload:res["title"].toString()})
        } catch {
            dispatch({type:"ERROR"})

        }
    }

    return (
        <>
        <div>

            <button onClick={APIcall}>fetch data</button>
            {
                state.isLoading
                    ? <h1>Loading...</h1>
                    : state.isError
                        ? <h1>Error occurred</h1>
                        : <h3>{state.data}</h3>
            }
        </div>
        </>
    );

}

export default UseReducerApiExample;