import React, { PureComponent } from 'react';
import './App.css'
import vCard from 'simple-vcard'
import * as FileSaver from 'file-saver'
import * as vc_en from './VCF/vCard_en.vcf'
import * as vc_ru from './VCF/vCard_ru.vcf'



let CardEng= {
  displayName : "Illin Nikita",
  phone : "+421919313156",
  email : "illinnikita@sms-online.com",
  address1 : "80-154, Gustava Zemgala, Riga, 1039, Latvia",
  title : "Ilin Nikita"
};
let CardRu={
  displayName : "Ильин Никита",
  phone : "+79153602266",
  email : "nikita.ilin@sms-online.com",
  address1 : "Москва,Маршала Рыбалко 2 к.6",
  title : "Ильин Никита"
}
class App extends PureComponent {
  state={
    Show:'flex',
    Msg:'none',
    lang:{
      add:`Добавить`,
      call:`Позвонить`,
      mess:`Написать`,
      card:`CardFace CardFaceRu`,
      lch:`langChange flagEn`,
      tgm:'Telegram',
        wha:'WhatsApp',
        vbr:'Viber',
        msg:'Mail'
    },
    
    card:vc_ru,
    rus:null
  }
  render() {
    return (
      <div className="App">
        <div className={this.state.lang.lch} onClick={this.Lang}></div>
        <div className ={this.state.lang.card}></div>
        
        <div className='Controls'  style={{display:this.state.Show}}>
          <div className='wbut AddContact'onClick={this.down}>
          <a className="svg add" href={`${this.state.card}`} download>
            
          </a>
          <div className='svg_text'>
            {this.state.lang.add}
          </div>
          </div>

          <a href="tel:+79153602266" className='wbut Phn'>
            <div className='svg phone'>
              
            </div>
            <div className='svg_text'>
              {this.state.lang.call}
            </div>
          </a>
          <div className='wbut Msg' onClick={this.msg}>
            <div className='svg write'>
              
            </div>
            <div className='svg_text'>
              {this.state.lang.mess}
            </div>
          </div>
        </div>
        <div className='Messages' style={{display:this.state.Msg}}>
          <div className='next'>
                <a className='msges Tgm' title="Telegram" href="tg://resolve?domain=nickname">
                <p className='msgesText'>{this.state.lang.tgm}</p>
              </a>
              <a className='msges Vbr' title="Viber" href="viber://chat?number=+79153602266">
                <p className='msgesText'>{this.state.lang.vbr}</p>
              </a>
              <a className='msges Whp' title="WhatsApp" href="whatsapp://send?phone=+79153602266">
                <p className='msgesText'>{this.state.lang.wha}</p>
              </a>
              
                <div className='msges Mail' onClick={this.sendMail}>
                <p className='msgesText'>{this.state.lang.msg}</p>
              </div>
              <div className='close' onClick={this.close}/>
          </div>
          
        </div>
        
      </div>
    );
  }
  msg=()=>{
    this.setState({Show:'none',Msg:'flex'});
  }
  sendMail=()=>{
    return window.open(`mailto:${this.state.card.email}`,'_self');
  }
  close=()=>{
    this.setState({Show:'flex',Msg:'none'});
  }
  getCard=()=>{
    return this.state.card
  }
  
  ch=()=>{
    this.state.rus?this.setState({
      lang:{
        add:`Добавить`,
        call:`Позвонить`,
        mess:`Написать`,
        card:`CardFace CardFaceRu`,
        lch:`langChange flagEn`,
        tgm:'Telegram',
        wha:'WhatsApp',
        vbr:'Viber',
        msg:'Mail'
        
      },
      card:vc_ru
    }):this.setState({
      lang:{
        add:`Add`,
        call:`Call`,
        mess:`Write`,
        card:`CardFace CardFaceEn`,
        lch:`langChange flagRu`,
        tgm:'Telegram',
        wha:'WhatsApp',
        vbr:'Viber',
        msg:'Mail'
      },
      card:vc_en
      
    })
  } 
  Lang=()=>{
    this.setState({rus:!this.state.rus})
    console.log(this.state.card)
    return this.ch();
  }
  
}

export default App;

