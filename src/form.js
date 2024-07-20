import { Component } from "react";

 class Form extends Component{
    render(){
        return(
            <>
             <form>
                <label>Enter your name:
                  <input type="text" />
                 </label><br/><br/>
                 <label>Enter your email:
                  <input type="Email" />
                 </label><br/><br/>
                 <label>Enter your password:
                  <input type="password" />
                 </label>
    </form>
            </>
        )
    }
 }
 export default Form