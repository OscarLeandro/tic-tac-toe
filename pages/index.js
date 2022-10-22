import { useEffect, useState } from "react";

export default function Home() {

  const [button1, setButton1] = useState('')
  const [button2, setButton2] = useState('')
  const [button3, setButton3] = useState('')
  const [button4, setButton4] = useState('')
  const [button5, setButton5] = useState('')
  const [button6, setButton6] = useState('')
  const [button7, setButton7] = useState('')
  const [button8, setButton8] = useState('')
  const [button9, setButton9] = useState('')

  const [currentPlayer, setCurrentPlayer] = useState('X')

  const [winner, setWinner] = useState('')



  // 1. Ver la forma de establecer si un player ganó
  // 2. Cuando un player gane, se muestre un Alert
  //3. Ver la forma de separar en componentes los botones
  //4 button reset

  function changePlayer(button){

    if( button === 'button1' && button1 !== '') return
    if( button === 'button2' && button2 !== '') return
    if( button === 'button3' && button3 !== '') return
    if( button === 'button4' && button4 !== '') return
    if( button === 'button5' && button5 !== '') return
    if( button === 'button6' && button6 !== '') return
    if( button === 'button7' && button7 !== '') return
    if( button === 'button8' && button8 !== '') return
    if( button === 'button9' && button9 !== '') return
    
    button === 'button1' && button1 == '' && setButton1(currentPlayer)
    button === 'button2' && button2 == '' && setButton2(currentPlayer)
    button === 'button3' && button3 == '' && setButton3(currentPlayer)
    button === 'button4' && button4 == '' && setButton4(currentPlayer)
    button === 'button5' && button5 == '' && setButton5(currentPlayer)
    button === 'button6' && button6 == '' && setButton6(currentPlayer)
    button === 'button7' && button7 == '' && setButton7(currentPlayer)
    button === 'button8' && button8 == '' && setButton8(currentPlayer)
    button === 'button9' && button9 == '' && setButton9(currentPlayer)



    currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
    
  }


  useEffect(() => {
    // OJO! QUE ESTO TAMBIÉN SE VA A RENDERIZAR POR PRIMERA VEZ
    
    // CREAR UNA FORMA QUE NO ARROJE GANADOR LA PRIMERA VEZ QUE SE RENDERIZA

      
      button1 === button2 && button1 !== '' && button2 !== '' &&  button2 == button3 &&  button3 !== '' && setWinner(currentPlayer)
      button1 === button5 && button1 !== '' && button5 !== '' &&   button5 == button9 &&  button9 !== '' && setWinner(currentPlayer)
      button1 === button4 && button1 !== '' && button4 !== '' &&  button4 == button7 && button7 !== '' && setWinner(currentPlayer)

      button2 === button5 && button2 !== '' && button5 !== '' &&  button5 == button8 && button8 !== '' && setWinner(currentPlayer)
      
      button3 === button6 && button3 !== '' && button6 !== '' && button6 == button9 && button9 !== '' && setWinner(currentPlayer)
      button3 === button5 && button3 !== '' && button5 !== '' && button5 == button7 && button7 !== ''  && setWinner(currentPlayer)

      button4 === button5 && button4 !== '' && button5 !== '' && button5 == button6 &&  button6 !== '' && setWinner(currentPlayer)

      button7 === button8 && button7 !== '' && button8 !== '' && button8 == button9 && button9 !== '' && setWinner(currentPlayer)

      console.log(winner);
      if(winner == ''){
        console.log('vacio');
      }else if(winner == 'X'){
        console.log('Tiene al ganador X');
      }else if(winner == 'O'){
        console.log('Tiene al ganador O');
      }
    // es que solamente ocurra lo de arriba si alguno de los valores siguientes cambia
    }, [winner, currentPlayer,button1,button2,button3,button4,button5,button6,button7,button8,button9])

    console.log('Ganador es: ',winner)
  return (
    <>
    
    <div className="container disabled mx-auto grid grid-cols-3 gap-4">
      <button onClick={() => changePlayer('button1')} className="border text-white h-20 rounded bg-green-700 hover:bg-green-500 border-zinc-900" disabled={button1}>{button1}</button>
      <button onClick={() => changePlayer('button2')} className="border text-white h-20 rounded bg-green-700 hover:bg-green-500 border-zinc-900" disabled={button2}>{button2}</button>
      <button onClick={() => changePlayer('button3')} className="border text-white h-20 rounded bg-green-700 hover:bg-green-500 border-zinc-900" disabled={button3}>{button3}</button>
      <button onClick={() => changePlayer('button4')} className="border text-white h-20 rounded bg-green-700 hover:bg-green-500 border-zinc-900" disabled={button4}>{button4}</button>
      <button onClick={() => changePlayer('button5')} className="border text-white h-20 rounded bg-green-700 hover:bg-green-500 border-zinc-900" disabled={button5}>{button5}</button>
      <button onClick={() => changePlayer('button6')} className="border text-white h-20 rounded bg-green-700 hover:bg-green-500 border-zinc-900" disabled={button6}>{button6}</button>
      <button onClick={() => changePlayer('button7')} className="border text-white h-20 rounded bg-green-700 hover:bg-green-500 border-zinc-900" disabled={button7}>{button7}</button>
      <button onClick={() => changePlayer('button8')} className="border text-white h-20 rounded bg-green-700 hover:bg-green-500 border-zinc-900" disabled={button8}>{button8}</button>
      <button onClick={() => changePlayer('button9')} className="border text-white h-20 rounded bg-green-700 hover:bg-green-500 border-zinc-900" disabled={button9}>{button9}</button>
    </div>

  <div>
    <h1>
      el ganador es:  { winner}

    </h1>
  </div>

    </>
  );
}
