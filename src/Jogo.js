import React from "react"
import forca0 from './assets/forca0.png'
import forca1 from './assets/forca1.png'
import forca2 from './assets/forca2.png'
import forca3 from './assets/forca3.png'
import forca4 from './assets/forca4.png'
import forca5 from './assets/forca5.png'
import forca6 from './assets/forca6.png'

export default function Jogo(props) {
    const erros = props.erros;
    const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const escolherPalavra = props.escolherPalavra;
    const corPalavra = props.corPalavra;
    const palavraUnderline = props.palavraUnderline;
    return (
        <>
            <div className="corpo">
                <div className="esquerda">
                    <img src={forca[erros]} data-test="game-image" alt="imagem-forca" className="forca"></img>
                </div>
                <div className="direita">
                    <button className="botao-escolher" onClick={escolherPalavra} data-test="choose-word">Escolher Palavra</button>
                    <div className={corPalavra} data-test="word" >{palavraUnderline}</div>
                </div>
            </div>
        </>
    )

    
}