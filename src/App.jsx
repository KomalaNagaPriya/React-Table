import React,{Component} from 'react'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            thead:[],
            tbody:[],
}
    }
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(x=>x.json()).then(x=>{ 
        this.setState({ thead:Object.keys(x[0]).slice(0,4)})
            this.setState({ tbody:x.slice(0,5)})
        })
}
render(){
    return(
        <table border={"2px"} id="table">
            <tr>
                {this.state.thead.map((x)=><th>{x}</th>)}
            </tr>
        {this.state.tbody.map((x)=>{
            return ( 
                <tr>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.username}</td>
                    <td>{x.email}</td>
                    </tr>)
                })}
        </table>
        )
          
        }
    }
