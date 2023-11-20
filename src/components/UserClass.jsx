import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props)
        // console.log("Child Constructor");

        this.state ={
            userInfo:{
                name:"Dummy",
                location:"default",
                avatar_url:""
            }
        }
        // console.log(props);
    }
    
     async componentDidMount(){
        // console.log("Child did mount ");
        const data = await fetch("https://api.github.com/users/Enter-The-Matrix")
        const json = await data.json()
        console.log(json);

        this.setState({
            userInfo:json
        })
    }

    render(){
        // console.log("Child Render");
        // const {name, location} = this.props
        const {name, location,avatar_url}=this.state.userInfo
        return (
            <div className="user-card">
                <img className="w-24" src={avatar_url} alt="" />
                <div>
                <h2> Name: {name}   </h2>
                <h3> Location: {location} </h3>
                <h4> Contact: ashwanisajwan1@gmail.com </h4>
                </div>
            </div>
        )
    }
}

export default UserClass;