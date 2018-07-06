import React, {Component} from "react";

class ViewClient extends Component{
  render(){
    return(
      <div>
        <a href="/"><img src="http://www.tucanton.com/blog/wp-content/uploads/2016/02/tucanton_logo-1.png" className="mx-auto d-block my-5"/></a>
        <div className="container my-5">
          <div className="btn-group">
            <button type="button" className="btn btn-warning dropdown-toggle text-white aux" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Equipos
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Equipo Uno</a>
              <a className="dropdown-item" href="#">Equipo Dos</a>
              <a className="dropdown-item" href="#">Equipo Tres</a>
            </div>
          </div>
          <div className="btn-group mx-5">
            <button type="button" className="btn btn-warning dropdown-toggle text-white aux" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Usuarios
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Harland</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ViewClient;
