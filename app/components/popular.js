import React from 'react';

const lang = ["ALL", "Javascript", "CSS", "Java","Python","Ruby"]

class Popular extends React.Component{
    render(){
        return(
            <ul className="flex-center">
                {lang.map((loop)=>(<li key={loop}><button className="btn-clear nav-link">{loop}</button></li>))}
            </ul>
        )
    }
}

export default Popular;