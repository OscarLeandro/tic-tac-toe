import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [button3, setButton3] = useState("");
  const [button4, setButton4] = useState("");
  const [button5, setButton5] = useState("");
  const [button6, setButton6] = useState("");
  const [button7, setButton7] = useState("");
  const [button8, setButton8] = useState("");
  const [button9, setButton9] = useState("");

  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [winner, setWinner] = useState("");

const [disable, setDisable] = useState(false)

  // 1. Ver la forma de establecer si un player ganó
  // 2. Cuando un player gane, se muestre un Alert
  //3. Ver la forma de separar en componentes los botones
  //4 button reset

  function changePlayer(button) {
    if (button === "button1" && button1 !== "") return;
    if (button === "button2" && button2 !== "") return;
    if (button === "button3" && button3 !== "") return;
    if (button === "button4" && button4 !== "") return;
    if (button === "button5" && button5 !== "") return;
    if (button === "button6" && button6 !== "") return;
    if (button === "button7" && button7 !== "") return;
    if (button === "button8" && button8 !== "") return;
    if (button === "button9" && button9 !== "") return;

    button === "button1" && button1 == "" && setButton1(currentPlayer);
    button === "button2" && button2 == "" && setButton2(currentPlayer);
    button === "button3" && button3 == "" && setButton3(currentPlayer);
    button === "button4" && button4 == "" && setButton4(currentPlayer);
    button === "button5" && button5 == "" && setButton5(currentPlayer);
    button === "button6" && button6 == "" && setButton6(currentPlayer);
    button === "button7" && button7 == "" && setButton7(currentPlayer);
    button === "button8" && button8 == "" && setButton8(currentPlayer);
    button === "button9" && button9 == "" && setButton9(currentPlayer);

    currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X");
  }

  function onNewGame() {
    setButton1("");
    setButton2("");
    setButton3("");
    setButton4("");
    setButton5("");
    setButton6("");
    setButton7("");
    setButton8("");
    setButton9("");
    setDisable(false)
    
  }


  useEffect(() => {
    // OJO! QUE ESTO TAMBIÉN SE VA A RENDERIZAR POR PRIMERA VEZ
      const winAlert = () => {
    Swal.fire({
      title: `¡Felicidades!`,
      text: `¡El ganador es ${winner}!`,
      //icon: "success",
      confirmButtonText: "Reiniciar juego",
      showCancelButton: true,
      cancelButtonText: "Aceptar",
      cancelButtonColor: "green",
    }).then((result) => {
      if (result.isConfirmed) {

        setButton1("");
        setButton2("");
        setButton3("");
        setButton4("");
        setButton5("");
        setButton6("");
        setButton7("");
        setButton8("");
        setButton9("");
      }
      if (result.isDismissed) {
        button1 == '' && setDisable(true)
        button2 == '' && setDisable(true)
        button3 == '' && setDisable(true)
        button4 == '' && setDisable(true)
        button5 == '' && setDisable(true)
        button6 == '' && setDisable(true)
        button7 == '' && setDisable(true)
        button8 == '' && setDisable(true)
        button9 == '' && setDisable(true)

      

      }
    });
  };

    // CREAR UNA FORMA QUE NO ARROJE GANADOR LA PRIMERA VEZ QUE SE RENDERIZA
    //console.log('prevGanador',winner);
    setWinner(currentPlayer);
    if (button1 === button2 && button2 === button3 && button1 !== "") {
      currentPlayer === "X" ? setWinner("O") : setWinner("X");
      winAlert();
      return;
    }
    if (button1 === button5 && button5 == button9 && button1 !== "") {
      currentPlayer === "X" ? setWinner("O") : setWinner("X");
      winAlert();
      return;
    }
    if (button1 === button4 && button4 == button7 && button1 !== "") {
      currentPlayer === "X" ? setWinner("O") : setWinner("X");
      winAlert();
      return;
    }
    if (button2 === button5 && button5 == button8 && button2 !== "") {
      currentPlayer === "X" ? setWinner("O") : setWinner("X");
      winAlert();
      return;
    }
    if (button3 === button6 && button6 == button9 && button3 !== "") {
      currentPlayer === "X" ? setWinner("O") : setWinner("X");
      winAlert();
      return;
    }
    if (button3 === button5 && button5 == button7 && button3 !== "") {
      currentPlayer === "X" ? setWinner("O") : setWinner("X");
      winAlert();
      return;
    }
    if (button4 === button5 && button5 == button6 && button4 !== "") {
      currentPlayer === "X" ? setWinner("O") : setWinner("X");
      winAlert();
      return;
    }
    if (button7 === button8 && button8 == button9 && button7 !== "") {
      currentPlayer === "X" ? setWinner("O") : setWinner("X");
      winAlert();
      return;
    }
    // es que solamente ocurra lo de arriba si alguno de los valores siguientes cambia
  }, [winner,currentPlayer,button1,button2,button3,button4,button5,button6,button7,button8,button9,]);

  //console.log('Ganador es: ',winner)
  return (
    <div className="container-fluid h-screen mx-auto  bg-teal-500 ">
      <h1 className='text-center text-7xl font-bold mb-16'>Tic Tac Toe</h1>
      <div className="  bg-teal-500 border-teal-400 mt-4 mx-20   grid grid-cols-3   ">
        <button
          onClick={() => changePlayer("button1")}
          className=" text-white h-20 text-6xl  border-r-8 border-b-8 bg-teal-500  border-teal-800"
          disabled={disable}
        >
          {button1}
        </button>
        <button
          onClick={() => changePlayer("button2")}
          className="border-l-8 border-b-8 text-6xl border-r-8 text-white h-20  bg-teal-500  border-teal-800"
          disabled={disable}
        >
          {button2}
        </button>
        <button
          onClick={() => changePlayer("button3")}
          className="border-b-8 border-l-8 text-6xl text-white h-20  bg-teal-500  border-teal-800"
          disabled={disable}
        >
          {button3}
        </button>
        <button
          onClick={() => changePlayer("button4")}
          className="border-r-8 border-t-8 text-6xl border-b-8 text-white h-20  bg-teal-500  border-teal-800"
          disabled={disable}
        >
          {button4}
        </button>
        <button
          onClick={() => changePlayer("button5")}
          className="border-b-8 border-r-8 text-6xl border-t-8 border-l-8 text-white h-20  bg-teal-500  border-teal-800"
          disabled={disable}
        >
          {button5}
        </button>
        <button
          onClick={() => changePlayer("button6")}
          className="border-l-8 border-t-8 text-6xl border-b-8 text-white h-20  bg-teal-500  border-teal-800"
          disabled={disable}
        >
          {button6}
        </button>
        <button
          onClick={() => changePlayer("button7")}
          className="border-r-8 border-t-8 text-6xl  text-white h-20  bg-teal-500  border-teal-800"
          disabled={disable}
        >
          {button7}
        </button>
        <button
          onClick={() => changePlayer("button8")}
          className="border-l-8 border-t-8 text-6xl border-r-8 text-white h-20  bg-teal-500  border-teal-800"
          disabled={disable}
        >
          {button8}
        </button>
        <button
          onClick={() => changePlayer("button9")}
          className="border-l-8 border-t-8 text-6xl  text-white h-20  bg-teal-500  border-teal-800"
          disabled={disable}
        >
          {button9}
        </button>
      </div>
      <div className="container mx-auto mt-20">
        <button onClick={onNewGame} className="bg-teal-200 h-10 px-3 hover:bg-teal-100">Nuevo Juego</button>
      </div>

    </div>
      
  );
}
