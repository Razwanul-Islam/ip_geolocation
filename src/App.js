import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';
// const gkey='AIzaSyC7vF7D2V2OUj_d48rpcm6Ryw4sdHtdKJo';
 
class App extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  state={
    ip:'',
    details:{},
    center:{}
  }
 componentDidMount(){
fetch('https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91'+this.state.ip).
then((res)=>res.json()).
then((data)=>this.setState({details:data,ip:data.IPv4}))
this.setState({
  center:{lat: this.state.details.latitude,
      lng: this.state.details.longitude}
})
 }

 onChange=(e)=>{
    this.setState({ip:e.value})
 }
  render() {
    return (
      <div className="App">
       <header>
         <form className='inline'>
           <input className='form-control' onChange={this.onChange} value={this.state.ip}/>
           <button className='submit'>Submit</button>
         </form>
       </header>
       <div className='main'>
         {/* {"country_code":"BD","country_name":"Bangladesh","city":"Dhaka","postal":"1219","latitude":23.7518,"longitude":90.4254,"IPv4":"42.0.5.243","state":"Dhaka"} */}
         <table>
           <tr><td>Country Code</td> <td>{this.state.details.country_code}</td></tr>
           <tr><td>Country Name</td> <td>{this.state.details.country_name}</td></tr>
           <tr><td>State</td> <td>{this.state.details.state}</td></tr>
           <tr><td>City</td> <td>{this.state.details.city}</td></tr>
           <tr><td>Postal / Zip</td> <td>{this.state.details.postal}</td></tr>
           <tr><td>Latitude</td> <td>{this.state.details.latitude}</td></tr>
           <tr><td>Longitude</td> <td>{this.state.details.longitude}</td></tr>
           <tr><td>IP Address</td> <td>{this.state.details.IPv4}</td></tr>
           
           
  
         </table>
         <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC7vF7D2V2OUj_d48rpcm6Ryw4sdHtdKJo' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
       </div>
      </div>
    );
  }
}

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);


export default App;
