import React from "react";
import './App.css';
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"http://localhost:7500/planetes")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;

        return (
        <div className = "App">
            <h1> Listes des planetes: </h1>  {
                items.map((item) => ( 
                  <div className="container">
                    
                <ul key = { item.id } >
                
                   <li> <img src={item.url}/></li>
                    <li>Name: { item.name }</li>
                    <li> date: { item.created_at } </li>
                   
                    </ul>
                    </div>
                ))
            }
        </div>
        
    );
  
}
}
   
export default App;