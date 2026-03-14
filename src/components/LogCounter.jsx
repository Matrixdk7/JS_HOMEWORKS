import React from 'react';
import {useState} from 'react'

const LogCounter = () => {
    const [log, setLog] = useState([0]);

    const positiveHandler = () => {
        setLog(prev => {

            const lastValue = prev[0] ?? 0;
            const newValue = lastValue + 1;
            return [newValue, ...prev];

        });
    }

    const negativeHandler = () => {
        setLog(prev => {

            const lastValue = prev[0] ?? 0;
            const newValue = lastValue - 1;
            return [newValue, ...prev];

        });
    }

    const removeHandler = (index) => {
        setLog(prev => prev.filter((_, i) => i !== index));
    }

    const logListRender = () => {
        return log.map((item, index) => (
             <button
                 key={index}
                 type="button"
                 className="list-group-item list-group-item-action"
                 onClick={() => removeHandler(index)}
             >
                 {item}
             </button>
        ));
    }

    return (
        <div className="w-50 mx-auto text-center mt-5">
            <div className="btn-group font-monospace mb-3" role="group">
                <button type="button" className="btn btn-outline-success" onClick={positiveHandler}>+</button>
                <button type="button" className="btn btn-outline-danger" onClick={negativeHandler}>-</button>
            </div>

            <ul className="list-group">
                {logListRender()}
            </ul>
        </div>
    );
};

export default LogCounter;