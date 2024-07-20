import { Component } from "react";

class Image extends Component{
    render(){
        return(
            <div>
                <img src={require('./OG-PK-02092023-1.avif')} alt="pspk image"/>
            </div>
        )
    }
}
export default Image