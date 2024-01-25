import { Component } from "react"
import pfp from './assets/eu.jpg'

export default class Linktree extends Component {
  render() {
    return (
      <div className="linktree">
        <div className="headers">
          <h1>
            <img src={pfp} alt="Profile" />
          </h1>
          <p>João Zacchello</p>
        </div>
        <br />
        <div className="socials">
          <a href="https://www.zacchello.site/automatizacoes">
            <i className="fa-solid fa-briefcase"></i> Encomendar Automatização
          </a>
          <a href="https://github.com/xongs08">
            <i className="fa-brands fa-github"></i> Github
          </a>
          <a href="https://www.instagram.com/devzacchello">
            <i className="fa-brands fa-instagram"></i> Instagram
          </a>
          <a href="https://www.zacchello.site">
            <i className="fa-solid fa-circle-info"></i> Sobre Mim
          </a>
        </div>
      </div>
    )
  }
}
