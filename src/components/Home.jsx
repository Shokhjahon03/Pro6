
import { Fragment, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
// import Auth from './Auth';
import {createContext} from 'react';
import Tuth from './Tuth';

export let ValuContext=createContext()

export default function Home() {
   
    // .......................................
  
    let[error,setError]=useState(true)
    let [values,setValues]=useState([])
    let oneInp=useRef()
    let twoInp=useRef()
    let telInp=useRef()
    let handalSubmit=(event)=>{
        event.preventDefault()
        if(oneInp.current.value!=='' && twoInp.current.value!=='' && telInp.current.value!=='' && telInp.current.value.length>12){
             setValues((prev)=>{
                return [...prev,{
                    names:oneInp.current.value,
                    lavozim:twoInp.current.value,
                    tel:telInp.current.value,
                    id:uuidv4()
                }]
            })
            console.log(values);
            setError(true)
        }else{
            setError(false)
        }
        
    }
    let handalButtun=(id)=>{
        let filterValue=values.filter((ev)=>{
            return ev.id !== id
        })
        setValues(filterValue)
    }
    
    let handalEdit=(id)=>{
        let x=document.querySelector('#n')
        let y=document.querySelector('#l')
        let z=document.querySelector('#t')
        let fValue=values.filter((ev)=>{
            return ev.id === id
        })
        let filterValue=values.filter((ev)=>{
            return ev.id !== id
        })
        setValues(filterValue)
        x.value=fValue.map((e)=>(
            e.names
        ))
        y.value=fValue.map((e)=>(
            e.lavozim
        ))
        z.value=fValue.map((e)=>(
            e.tel
        ))
    }
   
  return (
    
     <ValuContext.Provider value={values}>
        {/* <Tuth/> */}
     <div className="hero mt-[120px]">
        <div className="container">
            <div className="forms  flex justify-between  pt-[50px] relative">
                <form id='for' className='form w-[40%] flex flex-col items-start pl-[20px] gap-[50px]'>
                    <input id='n' ref={oneInp}   className=' w-full' type="text" placeholder='Xodim ismini va familyasini kiriting iltimos'/>
                    <input id='l' ref={twoInp}  className=' w-full' type="text"  placeholder='Xodim lavozimini kriting'/>
                    <input id='t' ref={telInp} defaultValue={ `(+998)-`} className=' w-full' type="tel" placeholder='Tel nomer : (+998) 94 -987-65-25' />
                    <button onClick={handalSubmit} className="cssbuttons-io">
                    <span
                        ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                            fill="currentColor"
                        ></path>
                        </svg>
                        ADD
                        </span>
                    </button>
                    <p className={error ? ' hidden':'text-red-600 block'}>Tel nomer 12ta raqamdan kam bo'ldi yoki ism va lavozim kiritilmadi</p>
                    
                </form>
                <span className=' w-[1px] h-[300px] inline-block border border-sky-950'></span>
                <div className='w-[40%]  border-2 p-5 '>
                    <h2 className=' text-center pt-[20px]'>{`Qo'shilgn ishchilar`}</h2>
                    {values.map((e,index)=>(
                        <div key={index} className='mal w-full pt-[10px] pl-[10px] flex flex-col gap-3 ' id={e.id}>
                            <p>{e.names}</p>
                            <p>{e.lavozim}</p>
                            <a href={`tel:${e.tel}`}>{e.tel}</a>
                            <div className=' w-full flex items-center justify-around'>
                            <button onClick={()=>handalEdit(e.id)} className="button">
                                <svg className="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#ff342b" stroke-linecap="round" stroke-width="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg>
                                <span className="lable">Edit</span>
                                </button>
                                <button onClick={()=>handalButtun(e.id)} className="button">
                                <svg className="svg-icon" fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#ff342b" stroke-linecap="round" stroke-width="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg>
                                <span className="lable">Dalete</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
       </div>
     </ValuContext.Provider>
  )
}
