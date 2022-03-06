import React, {Component} from "react"
import "./App.css"
import pet from "./img/pets.png"
import dogs from "./img/dogs.png"
import cat from "./img/catss.png"
import thor from "./img/thor.jpg"
import spark from "./img/spark.jpg"
import nene from "./img/Nenê.jpeg"
import leleco from "./img/leleco.jpg"
import dinda from "./img/Dinda.jpg"
import nanda from "./img/Nanda.jpg"
import fuji from "./img/fuji.png"
import ster from "./img/Ster.jpg"
import mesclado from "./img/mesclado.jpg"
import fabio from "./img/cFabio.jpg"
import garfield from "./img/cGarfield.jpg"
import maria from "./img/cMaria.png"
import nando from "./img/cNando.jpg"
import riquinho from "./img/cRiquinho.png"
export default class App extends Component{

  state={
    check:true,
    checkg:true,
    listc:[],
    listg:[],
    dog:[
      {name:"Thor",age:4,photo:thor},
      {name:"Spark",age:3,photo:spark},
      {name:"Leleco",age:2,photo:leleco},
      {name:"Nenê",age:3,photo:nene},
      {name:"Dinda",age:4,photo:dinda},
      {name:"Nanda",age:3,photo:nanda},
      {name:"Fuji",age:4,photo:fuji},
      {name:"Ster",age:5,photo:ster},
      {name:"Mesclado",age:2,photo:mesclado}
      ],
      cat:[
        {name:"Fabio",age:2,photo:fabio},
        {name:"Garfield",age:3,photo:garfield},
        {name:"Maria",age:6,photo:maria},
        {name:"Nando",age:3,photo:nando},
        {name:"Riquinho",age:2,photo:riquinho},
        ]
  }

  dogList = ()=>{
    let {dog} = this.state
    let {check} = this.state
    if(check==true){
      this.setState({
        listc:dog.map((item)=>(
            <div className="pet-card">
              <div className="photo-map">
              <img src={item.photo}/>
              </div>
            <div className="about-pet">
            <h2 className="pet-name">{item.name}</h2>
            <h3 className="pet-age">{item.age} anos</h3>
            </div>
            <button className="button-adot">Adotar</button>
            </div>
        )),check:false
      })
    }else{
      this.setState({
        listc:[],
        check:true
      })
    }
    
  }

  catList = ()=>{
    let {cat,checkg} = this.state
    if(checkg == true){
      this.setState({
        listg:cat.map((item)=>(
          <div className="pet-card">
                <div className="photo-map">
                <img src={item.photo}/>
                </div>
              <div className="about-pet">
              <h2 className="pet-name">{item.name}</h2>
              <h3 className="pet-age">{item.age} anos</h3>
              </div>
              <button className="button-adot">Adotar</button>
              </div>
        )),checkg:false
      })
    }else{
      this.setState({
        listg:[],
        checkg:true
      })
    }
   
  }
  render(){
    
    let{dogList, catList}=this

    return(
      <div>
        <header className="top" id="top">
          <div className="logo">
          <h1>PetAdot</h1>
          </div>
          <nav className="top-menu">
            <ul className="nav-list">
              <li>
                <a href="#top">Início</a>
              </li>
              <li>
              <a href="#adot">Adoção</a>
              </li>
              <li>
              <a href="#end">Endereço</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section class="about">
            <div class="about-content">
              <div class="about-text">
                <h2 className="about-title">Adote um amigo</h2>
                <p className="about-paragraph">Somos uma ONG que tem como objetivo ajudar animais em 
                situação de rua a encontrar um novo lar. Adotando um amigo você irá conhecer o significado de amar e ser amado, de maneira incondicional.</p>
                <p className="about-paragraph">Adote um amigo, ou venha fazer parte de nosso time. Fazendo parte
                do nosso time de voluntários você estará contribuindo para melhoria de vida de diversos animais. Mais do que receber, é saber ajudar.</p>
                <div className="buttons">
                  <a href="#adot"><button className="button-about">Adotar</button></a>
                  <button className="button-about">Ser voluntário</button>
                </div>
               </div>
              <div className="about-img">
                 <img className="img-pet" src={pet}/>
              </div>
            </div>
          </section>
          <section className="pet-section"  id="adot">
            <div className="pet-dog">
              <div className="pet-content">
              <img className="dog-img" src={dogs}/>
              <button onClick={dogList} className="button-pet">Ver cachorros</button>
              </div>
            </div>
            <div className="pet-map">
              <div className="pet-map-content">
              {this.state.listc} 
               </div>
              </div>
            <div className="pet-cat">
              <div className="pet-content">
              <button className="button-pet" onClick={catList}>Ver gatos</button>
              <img className="cat-img" src={cat}/>
              </div>
            </div>
            <div className="pet-map">
              <div className="pet-map-content">
              {this.state.listg} 
               </div>
             
              </div>
          </section>

          <section className="meet"  id="end">
            <div className="meet-content">
              <h2 className="meet-title">Onde nos encontrar</h2>
              <iframe className="map"src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d349.89256131461246!2d-60.022611340709645!3d-2.0490049321317305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x927205f49df220f5%3A0xe505cbf825c16028!2sTancredo%20Neves%2C%20Pres.%20Figueiredo%20-%20AM%2C%2069735-000!3m2!1d-2.0475165!2d-60.0194427!5e0!3m2!1spt-BR!2sbr!4v1646270551958!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </section>
        </main>
        <footer>
         
          <h2>Site desenvolvido por Luken</h2>
        </footer>
      </div>
    )
  }
}