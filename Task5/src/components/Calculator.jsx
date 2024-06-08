import React, { useState } from 'react';
import CalculatorBody from './CalculatorBody.jsx';

function Calculator() {

    const [inpval,setInput] = useState("");

    const rows = [
        ['1', '2', '3', '/'],
        ['4', '5', '6', '*'],
        ['7', '8', '9', '-'],
        ['0', '.', '+', '=']
    ];

    function show(num) {
        if(num==='=') 
            evaluate_exp();
        else {
            if(inpval==='Enter valid expression')
            {
                setInput(num);
            }
            else if(inpval==='Infinity' || inpval==='NaN') {
                setInput(num);
            }
            else 
                setInput(prevInput => prevInput + num);
        }
    }

    function ac() {
        setInput("");
    }

    function evaluate_exp() {
        try {
            if(inpval!=="") {
                const result = eval(inpval);
                console.log('Result:', result);
                if(result === Infinity) {
                    setInput("Infinity");
                }
                else if(isNaN(result)) {
                    setInput('NaN');
                }
                else {
                    setInput(result.toString());
                }
            }
            else {
                setInput("Enter valid expression");
            }
        }
        catch {
            setInput("Enter valid expression");
        }
    }

    function handleChange(event) {
        if(inpval==='Enter valid expression')
        {
            var inp = event.target.value;
            inp = inpval.substring(22,23);
            setInput(inp);
        }
        else 
        {
            setInput(event.target.value);
        }

    }

  return (
    <div className='main'>
        <table border = "20px" cellPadding = "5px" cellSpacing = "5px">
            <caption>
                <h1>SIMPLE CALCULATOR</h1>
            </caption>
            <thead>
            <tr>
                <td colSpan="3" className="b">
                    <input type="text" style = {{fontSize: "25px"}} id="t" value={inpval} onChange={handleChange} autoFocus />
                </td>
                <td>
                    <button className = "b" onClick={() => ac()}>AC</button>
                </td>
            </tr>
            </thead>
            <>
                <CalculatorBody 
                    rows={rows}
                    show={show}
                />
            </>
        </table>
    </div>
  )
}

export default Calculator;