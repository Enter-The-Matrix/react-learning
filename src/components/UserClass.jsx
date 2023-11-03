import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        console.log("Child Constructor");

        this.state ={
            count:0,
            count2:2
        }
        console.log(props);
    }

    componentDidMount(){
        console.log("Child did mount ");
    }
    
    render(){
        console.log("Child Render");
        const {name, location} = this.props
        const {count} = this.state
        return (
            <div className="user-card">
                <h1>count: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    })
                }}> Count +1 </button>
                <h2> Name: {name}   </h2>
                <h3> Location: {location} </h3>
                <h4> Contact: ashwanisajwan1@gmail.com </h4>
            </div>
        )
    }
}

export default UserClass;