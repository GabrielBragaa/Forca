export default function Letras(props) {
    const className = props.className;
    const letra = props.letra;
    const disabled = props.disabled;
    const clicou = props.clicou;
    return (
        <button className={className} onClick={() => clicou(letra)} disabled={disabled} data-test='letter'>{letra.toUpperCase()}</button>
    )
}