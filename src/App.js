import React, {Component} from "react"
import "./App.css"
import pet from "./img/pets.png"
export default class App extends Component{
  render(){
    return(
      <div>
        <header className="top">
          <div className="logo">
          <h1>PetAdot</h1>
          </div>
          <nav className="top-menu">
            <ul className="nav-list">
              <li>
                <a href="#">Início</a>
              </li>
              <li>
              <a href="#">Adoção</a>
              </li>
              <li>
              <a href="#">Endereço</a>
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
                  <button className="button-about">Adotar</button>
                  <button className="button-about">Ser voluntário</button>
                </div>
               </div>
              <div className="about-img">
                <img className="img-pet" src={pet}/>
              </div>


            </div>

          </section>
        </main>
        <footer>
        </footer>
      </div>
    )
  }
}