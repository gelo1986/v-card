import React, { Component } from 'react';
import './App.css';
import {saveAs} from 'file-saver'

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
    let filename = 'v-card'
    let text = {name:'John',phone:'+79998887766'}
    let blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, filename+".vcf");
  }
  
  
  
}

export default App;


//contact format .vcf