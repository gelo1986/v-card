import React, { PureComponent } from 'react';
import './App.css'
import {saveAs} from 'file-saver'
import vCard from 'simple-vcard'



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
class App extends PureComponent {1
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
    card:CardRu,
    rus:null
  }
  render() {
    return (
      <div className="App">
        <div className={this.state.lang.lch} onClick={this.Lang}></div>
        <div className ={this.state.lang.card}></div>
        
        <div className='Controls'  style={{display:this.state.Show}}>
          <div className='wbut AddContact'onClick={this.down}>
          <div className="svg add">
            
          </div>
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
    console.log(this.state.card)
    return this.state.card
  }
  down=()=>{
  const result = vCard.toVCard(this.getCard());
  console.log(result)
    let blob = new Blob([result], {'Content-Type':'text/vcard; name="vCard.vcf"','Content-Disposition': 'inline; filename="vCard.vcf"'});
    console.log(blob)
    return saveAs(blob,'vCard.vcf');
    
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
      card:CardRu
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
      card:CardEng
      
    })
  } 
  Lang=()=>{
    this.setState({rus:!this.state.rus})
    console.log(this.state.card)
    return this.ch();
  }
  
}

export default App;

