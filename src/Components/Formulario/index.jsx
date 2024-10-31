import { useState } from "react"
const Formulario = () => {
 let [materiaA, setMateriaA] = useState(0);
 let [materiaB, setMateriaB] = useState(0);
 let [materiaC, setMateriaC] = useState(0);
 let [nome, setNome] = useState('')
 const alteraNome = (evento) => {
 setNome(estadoAnterior => {
 console.log(estadoAnterior)
 return evento.target.value;
 })
 }
 const renderizaResultado = () => {
 const soma = materiaA + materiaB + materiaC
 const media = soma / 3;
 console.log(soma)
 console.log(media)
 if (media >= 7) {
 return (
 <p>Olá {nome}, você foi aprovado</p>
 )
 } else {
 return (
 <p>
 Olá {nome}, você foi reprovado
 </p>
 )
 }
 }
 return (
 <form action="">
 <input type="text" placeholder="Seu nome " onChange={alteraNome}/>
 <input type="number" min={0} max={10} placeholder="Nota matéria A"
onChange={evento => setMateriaA(parseInt(evento.target.value))} />
 <input type="number" min={0} max={10} placeholder="Nota matéria B"
onChange={evento => setMateriaB(parseInt(evento.target.value))} />
<input type="number" min={0} max={10} placeholder="Nota matéria C"
onChange={evento => setMateriaC(parseInt(evento.target.value))} />
 {renderizaResultado()}
 </form>
 )
}
export default Formulario