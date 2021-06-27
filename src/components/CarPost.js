import Axios from 'axios';
import React from 'react';

class CarPost extends React.Component{

    state = {
        error : null,
        isLoaded : false,
        items : []
    }

    componentDidMount(){
        Axios.get("http://localhost:8080/api/v1/car")
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    items : result.data
                });
            },
            (error) => {
                this.setState({
                    isLoaded : true,
                    error
                });
            }
        )
    }

    render(){

        const {error, isLoaded, items} = this.state;


        if(error){
            return(
                <div className="alert alert-danger" role="alert">
                    ERROR : {error.message}
                </div>
            )
        } else if(!isLoaded){
            return(
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="row">
                <div className="col-md-10 offset-md-1">

                    {items.map(item => (
                        <div key={item.id} className="card my-card">
                                <div className="card-body">
                                    <h5 className="card-title">{item.model}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{item.brand}</h6>
                                       Year : {item.year}
                                </div>
                        </div>
                    ))}
                </div>
                </div>
            )
        }
    }

}

export default CarPost;
