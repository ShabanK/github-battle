import React from 'react';

const lang = ["ALL", "Javascript", "CSS", "Java","Python","Ruby"]

class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedLanguage: "ALL"
        }
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(selectedLanguage){
        this.setState({
            selectedLanguage
        })
    }
    
    render(){
        return(
            <ul className="flex-center">
                {lang.map((loop)=>(
                    <li key={loop}>
                        <button
                            style={loop === this.state.selectedLanguage?{color: "red"}: null }
                            className="btn-clear nav-link"
                            onClick={()=>this.updateLanguage(loop)}
                            >
                            {loop}
                        </button>
                    </li>))}
            </ul>
        )
    }
}

export default Popular;