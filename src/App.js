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
      mess:`НАПИСАТЬ`
    },
    rus:null
  }
  render() {
    return (
      <div className="App">
        <div className='langChange card-body' onClick={this.Lang}>RUS | EN</div>
        <div className='CardFace'></div>
        <div className='CardBack'></div>
        <div className='Controls'  style={{display:this.state.Show}}>
          <div className='wbut AddContact'onClick={this.down}>
          <div className="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M436 160c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20V48c0-26.51-21.49-48-48-48H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h20c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20v-64h20c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-20v-64h20zm-74 304H54a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v404a6 6 0 0 1-6 6zM128 208c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80zm208 133.477V360c0 13.255-10.745 24-24 24H104c-13.255 0-24-10.745-24-24v-18.523c0-22.026 14.99-41.225 36.358-46.567l35.657-8.914c29.101 20.932 74.509 26.945 111.97 0l35.657 8.914C321.01 300.252 336 319.452 336 341.477z"/></svg>
          </div>
          <div className='svg_text'>
            {this.state.lang.add}<br/>{this.state.lang.add2}
          </div>
          </div>

          <a href="tel:+79153602266" className='wbut Phn'>
            <div className='svg'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"/></svg>
            </div>
            <div className='svg_text'>
              {this.state.lang.call}<br/>{this.state.lang.me}
            </div>
          </a>
          <div className='wbut Msg' onClick={this.msg}>
            <div className='svg'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"/></svg>
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
    return window.open('mailto:nikita.ilin@sms-online.com');
  }
  close=()=>{
    this.setState({Show:'flex',Msg:'none'});
  }
  down=()=>{
  const result = vCard.toVCard(Card);
    console.log(result)
    let filename = 'TEST'
    let text = result;
    let blob = new Blob([text], {type: "vCard;charset=utf-8"});
    saveAs(blob, filename+".vcf");
  }
  ch=()=>{
    this.state.rus?this.setState({
      lang:{
        add:`ДОБАВИТЬ`,
        add2:`в контакты`,
        call:`ПОЗВОНИТЬ`,
        me:`мне`,
        mess:`НАПИСАТЬ`
      }
    }):this.setState({
      lang:{
        add:`ADD`,
        add2:`to contacts`,
        call:`CALL`,
        me:`me`,
        mess:`WRITE`,
      }
    })
  } 
  Lang=()=>{
    this.setState({rus:!this.state.rus})
    return this.ch();
  }
  
}

export default App;


//contact format .vcf