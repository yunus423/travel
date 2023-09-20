import React, { useEffect } from 'react'
import '../../Components/main/main.css'
import { GrLocation } from "react-icons/gr";
import { TbClipboardCheck } from "react-icons/tb";
import mrd from '../../assets/mardin.jpg'
import agrı from '../../assets/ağrı.jpg'
import bts from '../../assets/bitlis.jpg'
import db from '../../assets/diyarbakır.jpg'
import ga from '../../assets/gaziantep.jpg'
import hak from '../../assets/hakkari.jpg'
import su from '../../assets/şanlıurfaa.jpg'
import tunc from '../../assets/tunceli.jpg'
import van from '../../assets/van.jpg'
import ada from '../../assets/adana.jpg'
import ist from '../../assets/istanbul.jpg'
import hty from '../../assets/hatay.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {

  
 useEffect(()=>{
   
  Aos.init({duration:2000})
},[])

  const data=[
    {
      id:1,
      img:mrd,
      desTitle:"Taş evleri",
      location:'Artuklu,Mardin',
      grade:"cultural relax",
      fees:"700₺",
      description:"Kasımiye Medresesi, Mardin şehir merkezinin güneybatında, Mezopotamya Ovası'nı karşıdan gören bir yapıdır"
    },
    {
      id:2,
      img:agrı,
      desTitle:"Ağrı Dağı",
      location:'Ağrı ',
      grade:"cultural relax",
      fees:"600₺",
      description:"Ağrı Dağı, 5.137 metrelik rakımıyla, Türkiye'nin en yüksek dağıdır. Ağrı Dağı, Türkiye'nin doğu ucunda, İran'ın 16 kilometre batısında ve Ermenistan'ın 32 kilometre güneyindedir."

    },
    {
      id:3,
      img:bts,
      desTitle:"Tatvan Sahili",
      location:'Tatvan,Bitlis',
      grade:"cultural relax",
      fees:"400₺",
      description:"Tatvan ilçesinin Van Gölü kıyısında “Sahil Düzenleme Projesi” sonucunda geniş bir sahil şeridi oluşturulmuştur. Tatvan’ın mevcut sahil yolunun tamamına dolgu çalışmaları, ışıklandırma ve peyzaj düzenlemesi uygulanarak ilçeye kazandırılmıştır"

    },
    {
      id:4,
      img:db,
      desTitle:"on gözlü köprü",
      location:'Sur,Diyarbakır',
      grade:"cultural relax",
      fees:"700₺",
      description:"Dicle Köprüsü, Diyarbakır'ın Sur ilçesinde Dicle Nehri üzerinde yer alan tarihî bir köprüdür. On açıklığa sahip olduğu için yerel halkça On Gözlü Köprü olarak bilinirken eski Silvan yolu güzergâhında bulunduğundan bazı kaynaklarda ise Silvan Köprüsü olarak da geçer"

    },
    {
      id:5,
      img:ga,
      desTitle:"Gaziantep Kalesi",
      location:'Gaziantep',
      grade:"cultural relax",
      fees:"500₺",
      description:"Gaziantep Kalesi, Gaziantep'in merkezindeki bir tepeye kurulmuş olan kale. Ne zaman inşa edildiği bilinmemekle birlikte, Hititler döneminde gözlem amaçlı kullanıldığı bilinmektedir"

    },
    {
      id:6,
      img:hak,
      desTitle:"Hakkari Dağları",
      location:'Hakkari',
      grade:"cultural relax",
      fees:"300₺",
      description:"Hakkâri, Doğu Anadolu bölgemizin en doğusundaki Zap Vadisi’nin güney yamacında yer alıyor. Doğusunda İran, güneyinde Irak ile komşu. Yüksekova ilçesine uçak seferleri bulunuyor"

    },
    {
      id:7,
      img:su,
      desTitle:"Balıklı göl",
      location:'Şanlıurfa',
      grade:"cultural relax",
      fees:"700₺",
      description:"Balıklıgöl Şanlıurfa turizminin çekim alanıdır. Halil-ür Rahman Gölü'nün hemen güneyinde, Urfa Kalesi'nin önünde yer almakta olup, 150 metrekare alanı bulunan bir göldür."

    },
    {
      id:8,
      img:tunc,
      desTitle:"Munzur Çayı",
      location:'ovacık,Tunceli',
      grade:"cultural relax",
      fees:"600₺",
      description:"Munzur Çayı, Tunceli'nin Ovacık ilçesinde bulunan Munzur dağlarındaki gözelerden kaynağını alarak oluşan ve adını da Munzur dağlarından alan akarsu"

    },
    {
      id:9,
      img:van,
      desTitle:"Van Gölü",
      location:'Van',
      grade:"cultural relax",
      fees:"400₺",
      description:"Van Gölü, Van ve Bitlis illeri sınırları içerisinde bulunan Nemrut volkanik dağının patlaması sonucu, bölgedeki tektonik çöküntü alanının önünün kapanmasıyla oluşmuş bir volkanik set gölüdür."

    },
    {
      id:10,
      img:ada,
      desTitle:"sabancı cami",
      location:'Seyhan,Adana',
      grade:"cultural relax",
      fees:"700₺",
      description:"Sabancı Merkez Camii, Adana'nın Reşatbey semtinde, Merkez Park'ın güneyinde ve Seyhan Nehri'nin batı kıyısında 1998 yılında hizmete açılmış cami."

    },
    {
      id:11,
      img:ist,
      desTitle:"Galata kulesi",
      location:'istanbul',
      grade:"cultural relax",
      fees:"1400₺",
      description:"Galata Kulesi ya da müze olarak kullanılmaya başlaması sonrasındaki adıyla Galata Kulesi Müzesi, İstanbul'un Beyoğlu ilçesinde bulunan bir kuledir."

    },
    {
      id:12,
      img:hty,
      desTitle:"samandağ sahili",
      location:'samandağ,hatay',
      grade:"cultural relax",
      fees:"500₺",
      description:"Hatay Samandağ ilçesine bağlı sahil bandi Dünyanın ikinci en uzun sahilidir. Orası hep dalgalıdır açık deniz olduğu için denizden de çok çöpte gelmektedir"

    },

]
  
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title' data-aos='fade-right'>
          Most visited destionations
        </h3>
      </div>
      <div className='secContent grid'>
      {
        data.map((item)=>{

          return(

            <div key={item.id} className='singleDestination' data-Aos="fade-up">
              <div className='imageDiv'>
                <img src={item.img} alt='desTitle'/>
              </div>
              <div className='cardInfo'>
                <h4 className='destTitle'>{item.desTitle}</h4>
                <span className='contient flex'><GrLocation className='icon'/>
                 <span className='name'>{item.location}</span>
                </span>
              </div>
              <div className='fees flex'>
              <div className='grade'>
                <span>{item.grade}<small>+1</small></span>
              </div>
              <div className='price'>
                <h5>{item.fees}</h5>
              </div>
              </div>
              <div className='desc'>
                <p>{item.description}</p>
              </div>
         <button className='btn flex'>
                 DETAİLS <TbClipboardCheck className='icon'/>
         </button>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Main