import React, { Component } from 'react';
import './App.css';
import {saveAs} from 'file-saver'
import vCard from 'simple-vcard'
var jCard = {
  id : 'dfcc7456-8f56-11e7-bc32-d76e3ad96585'
  , displayName : 'Steve Baker'
  , phone : '555-555-5555'
  , email : 'steve-baker@notreal.com'
  , address1 : 'Street Address 1'
  , address2 : 'Street Address 2'
  , city : 'LA'
  , region : 'CA'
  , postalCode : '30303'
  , country : 'US'
  , company : 'Steve\'s Company'
  , title : "Manager"
};
var result = vCard.toVCard(jCard);
class App extends Component {
  state={
    Show:'flex',
    Msg:'none'
  }
  render() {
    return (
      <div className="App">
        <div className='CardFace'></div>
        <div className='CardBack'></div>
        <div className='Controls'  style={{display:this.state.Show}}>
          <div className='wbut AddContact'onClick={this.down}/>

          <a href="tel:+79153602266" className='wbut Phn'/>
          <div className='wbut Msg' onClick={this.msg}/>
        </div>
        <div className='Messages' style={{display:this.state.Msg}}>
          <a className='msges Tgm' title="Telegram" href="tg://resolve?domain=nickname"/>
          <a className='msges Whp' title="WhatsApp" href="whatsapp://send?phone=+79153602266"/>
          <a className='msges Vbr' title="Viber" href="viber://chat?number=+79153602266"/>
          <div className='msges Mail' onClick={this.sendMail}/>
          <div className='close' onClick={this.close}/>
        </div>
        
      </div>
    );
  }
  msg=()=>{
    this.setState({Show:'none',Msg:'flex'});
  }
  sendMail=()=>{
    return window.open('mailto:nikita.ilin@sms-online.com');
  }
  close=()=>{
    this.setState({Show:'flex',Msg:'none'});
  }
  down=()=>{
    let filename = 'TEST'
    let text = result;
    let blob = new Blob([text], {type: "vCard;charset=utf-8"});
    saveAs(blob, filename+".vcf");
  }
  
  
  
}

export default App;


//contact format .vcf