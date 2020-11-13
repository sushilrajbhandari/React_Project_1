import React, { Component } from "react";
//import './CSS/myStyles.css'


class Header extends Component {
  constructor() {
    super();

    this.state = {
      title: "News Applications",
      keyword: "User Inputs",
    };
  }

handleChange= (event)=>{
    console.log(event)
    console.log(event.target.value)
    this.setState({
        keyword:event.target.value ? event.target.value : " User Inputs"
    })
}

  render() {
    const myStyle = {
      header: {
        backgroundColor: "teal",
      },
      logo: {
        fontSize: "30px",
        textAlign: "center",
        color: "#fff",
      },
    };
    return (
      <>
        <header style={myStyle.header}>
          <div style={myStyle.logo}>{this.state.title}</div>
          <center>
            <input type="text" onChange={this.handleChange}/>
            <p style={{ color: "white" }}>{this.state.keyword}</p>
          </center>
          <hr />
        </header>
        
      </>
    );
  }
}
export default Header;

// const Header = () =>{
//     return (
//         <>
//             <center>
//                 <h2>Sushil App</h2>
//             </center>
//             <hr/>
//         </>
//     )
// }

// export default Header;
