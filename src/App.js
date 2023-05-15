import palavras from "./palavras";
import Jogo from "./Jogo";
import Letras from "./Letras";
import { useState } from "react";


export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let [palavra, setPalavra] = useState('');
  let [erros, setErros] = useState(0);
  let [letrasClicadas, setLetrasClicadas] = useState('');
  let [palavraArray, setPalavraArray] = useState([]);
  let [arrayUnderline, setArrayUnderline] = useState([]);
  let [statusJogo, setStatusJogo] = useState('preto');
  let [jogoInicio, setJogoInicio] = useState(false);

  function escolhePalavra() {
    setStatusJogo('preto')
    setJogoInicio(true);
    setLetrasClicadas('');
    setErros(0);
    palavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavra);
    palavraArray = palavra.split('');
    setPalavraArray(palavraArray);
    arrayUnderline = Array(palavra.length).fill('_');
    setArrayUnderline(arrayUnderline);
  }

  function tentativaLetra(letra) {

    let letrasTentadas = [...letrasClicadas];
    letrasTentadas.push(letra);
    setLetrasClicadas(letrasTentadas);
    if (palavraArray.includes(letra)) {
      const semUnderline = [...arrayUnderline];
      for(let i = 0; i < palavraArray.length; i++) {
        if(palavraArray[i] === letra) {
          semUnderline[i] = letra;
        }
      }
      setArrayUnderline(semUnderline);
      const underlineString = (semUnderline.toString()).replace(/[,]/g, '');
      console.log(underlineString)
      if(underlineString === palavra) {
        setStatusJogo('verde');
        setJogoInicio(false)
      }
    } else {
      erros++;
      setErros(erros);
      if(erros === 6) {
        setLetrasClicadas(alfabeto);
        setArrayUnderline(palavraArray);
        setStatusJogo('vermelho');
      }
    } 

    
  }

  return (
    <div className="principal">
      <Jogo 
        erros={erros}
        forca={`forca${erros}`}
        palavraUnderline={arrayUnderline}
        corPalavra={statusJogo}
        escolherPalavra={escolhePalavra}
      />
      <div className="teclado">
        <div className="tecla">{alfabeto.map((letra, index) => <Letras key={index} 
        className={letrasClicadas.includes(letra) ? "nao-clicado" : "clicado"} letra={letra} disabled={jogoInicio === false ? true : false}
        clicou={!letrasClicadas.includes(letra) ? tentativaLetra : ''}/>)}</div>
      </div>
    </div>

  )
}


