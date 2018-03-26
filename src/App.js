import React, { PureComponent } from 'react';
import './App.css'
import {saveAs} from 'file-saver'
import vCard from 'simple-vcard'



let Card= {
  displayName : "Illin Nikita",
  phone : "+79260606060",
  email : "illinnikita@gmail.com",
  address1 : "Москва, ул.Москвоская 2а",
  title : "Ильин Никита"
};
class App extends PureComponent {1
  state={
    Show:'flex',
    Msg:'none',
    lang:{
      add:`ДОБАВИТЬ`,
      add2:`в контакты`,
      call:`ПОЗВОНИТЬ`,
      me:`мне`,
      mess:`НАПИСАТЬ`,
      card:`CardFace CardFaceRu`,
      lch:`langChange flagEn`,
    },
    rus:null
  }
  render() {
    return (
      <div className="App">
        <div className={this.state.lang.lch} onClick={this.Lang}></div>
        <div className ={this.state.lang.card} ></div>
        <div className='CardBack'></div>
        <div className='Controls'  style={{display:this.state.Show}}>
          <div className='wbut AddContact'onClick={this.down}>
          <div className="svg add">
            
          </div>
          <div className='svg_text'>
            {this.state.lang.add}<br/>{this.state.lang.add2}
          </div>
          </div>

          <a href="tel:+79153602266" className='wbut Phn'>
            <div className='svg phone'>
              
            </div>
            <div className='svg_text'>
              {this.state.lang.call}<br/>{this.state.lang.me}
            </div>
          </a>
          <div className='wbut Msg' onClick={this.msg}>
            <div className='svg write'>
              
            </div>
            <div className='svg_text'>
              {this.state.lang.mess}<br/>{this.state.lang.me}
            </div>
          </div>
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
    return window.open('mailto:nikita.ilin@sms-online.com','_self');
  }
  close=()=>{
    this.setState({Show:'flex',Msg:'none'});
  }
  down=()=>{
  const result = () =>vCard.toVCard(Card);
    let filename = 'vCard'
    let text = result();
    let blob = new Blob([text], {type: "text/x-vCard"});
    saveAs(blob,'vcard.vcf');
    
  }
  ch=()=>{
    this.state.rus?this.setState({
      lang:{
        add:`ДОБАВИТЬ`,
        add2:`в контакты`,
        call:`ПОЗВОНИТЬ`,
        me:`мне`,
        mess:`НАПИСАТЬ`,
        card:`CardFace CardFaceRu`,
        lch:`langChange flagEn`,
      }
    }):this.setState({
      lang:{
        add:`ADD`,
        add2:`me`,
        call:`CALL`,
        me:`me`,
        mess:`WRITE`,
        card:`CardFace CardFaceEn`,
        lch:`langChange flagRu`,
      },
      
    })
  } 
  Lang=()=>{
    this.setState({rus:!this.state.rus})
    return this.ch();
  }
  
}

export default App;


//changed charset of vcf and c-type
