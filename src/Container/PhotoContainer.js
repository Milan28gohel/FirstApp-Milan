import React, { Component } from "react";
import {connect} from "react-redux";
import {getPhoto} from "../Action";
import Photoitem from "../Component/Photoitem";


class PhotoContainer extends Component{
    
    componentDidMount (){
        console.log('called')
        const {getPhoto} = this.props;
        getPhoto();
    }

    render(){
        const {error,isLoading,photo}=this.props;
        console.log(photo)
        return(
            <div>
            {error && <div>{error}</div>}
            {
                !isLoading?
                <table>
                    <thead>
                        <tr>
                            <th>albumId</th>
                            <th>id</th>
                            <th>title</th>
                            <th>url</th>
                            <th>thumbnailUrl</th>
                        </tr>
                    </thead>
                    <tbody>
                        {photo && photo.length !== 0 && photo.map((photo, index) => <Photoitem data={photo} key={index}/> )}
                    </tbody>
                </table>
              :
              <div className="loader"></div>
            }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    photo: state.photoData.photo,
    isLoading: state.photoData.isLoading,
    error: state.photoData.error,
  });
  const mapDispatchToProps = {
    getPhoto
  };
  export default connect(mapStateToProps,mapDispatchToProps)(PhotoContainer);