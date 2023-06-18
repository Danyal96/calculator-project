import { useState } from 'react'
import { evaluate } from 'mathjs'
import './Calculator.css'

function Calculator(){

    const operytors = ['+' , '*' , '/' , '-']

    let [result,setResult] = useState('')
    let [hasdot, setHasdDot] = useState(false)

    const changechartor = (text)=>{
        if(text==='×') return '*'
        if(text==='÷') return '/'
        return text
    }

    const clickhandler = (event)=>{
        let input = changechartor(event.target.innerText)
        if(input === '.'){
            if(hasdot===true) return
            else setHasdDot(true)
        }

        if(operytors.includes(input)){
            setHasdDot(false)
        }

        setResult(result+input)
    }

    const clearbtn = ()=>{
        setResult('')
        setHasdDot(false)
    }

    const deletebtn = ()=>{
        if(result.endsWith('.'))
        setHasdDot(false)
        setResult(result.slice(0,-1))
    }

    const equalbtn = ()=>{
        setResult(String(evaluate(result)))
        if(result.includes('.')){
        setHasdDot(true)
    }else{
        setHasdDot(false)
    }
    }
    
    return(
        <div className="container">
            <div className="screen">{result}</div>
            <div className="buttons">
                <button onClick={clearbtn} className='color twocol'>Clear</button>
                <button onClick={deletebtn} className='color'>C</button>
                <button onClick={clickhandler} className='color'>÷</button>
                <button onClick={clickhandler}>7</button>
                <button onClick={clickhandler}>8</button>
                <button onClick={clickhandler}>9</button>
                <button onClick={clickhandler} className='color'>×</button>
                <button onClick={clickhandler}>4</button>
                <button onClick={clickhandler}>5</button>
                <button onClick={clickhandler}>6</button>
                <button onClick={clickhandler}className='color'>-</button>
                <button onClick={clickhandler}>1</button>
                <button onClick={clickhandler}>2</button>
                <button onClick={clickhandler}>3</button>
                <button onClick={clickhandler} className='color'>+</button>
                <button onClick={clickhandler}>0</button>
                <button onClick={clickhandler}>.</button>
                <button onClick={equalbtn} className='color twocol'>=</button>
            </div>
        </div>
    )
}

export default Calculator