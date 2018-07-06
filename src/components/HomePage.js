import React, {Component} from "react";
import { Link } from 'react-router-dom'

class HomePage extends Component{
  render(){
    return(
      <div>
        <a href="/"><img src="http://www.tucanton.com/blog/wp-content/uploads/2016/02/tucanton_logo-1.png" className="mx-auto d-block my-5"/></a>
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-5">
              <a href="/clientes"><button type="button" className="btn btn-warning aux text-white">Clientes</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
