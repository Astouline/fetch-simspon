import  React  from  'react';

const  GenerateSimpson = ({ selectQuote }) => {
    return (
        <div  className="GenerateSimpson">
        <button  onClick={selectQuote}>quotes</button>
        </div>
    );
};

export  default  GenerateSimpson;