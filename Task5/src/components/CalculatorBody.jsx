import React from 'react'
import Button from './button';
function CalculatorBody({rows, show}) {
  return (
        <tbody>
            {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((item, index) => (
                        <td key={index} align='center'>
                            <Button
                                show={show}
                                value={item}                                    
                            />
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
  )
}

export default CalculatorBody;