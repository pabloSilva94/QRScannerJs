import { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import { mobile } from "useful-pkg-react-felipe";
import "./App.css";
function App() {
  const [scanResultFile, setScanResultFile] = useState("");
  const qrRef = useRef(null);
  /* function handleQRcode(e) {
    setLink(e.target.value);
  } */
  const handlerErrorScanWebCam = (error) => {
    console.log(error);
  };
  const onScannerFile = (result) => {
    if (result) {
      if (result?.text.includes("http")) {
        window.location.assign(result.text);
      } else {
        setScanResultFile(result?.text);
      }
    }
  };

  const nextLine = () => {
    if (qrRef.current.id === 13) {
      qrRef.current.id.focus();
    }
  };

  return (
    <section id="principal">
      <h1>Escaneie com o seu {mobile() ? "celular 📱" : "pc 💻"} </h1>
      <div className="qr-code-reader">
        <input ref={qrRef} type={"text"} name="" placeholder="Digite ..." />
        <input id="qrRef" type={"text"} name="" placeholder="Digite ..." />
      </div>
      <a>{nextLine}</a>
    </section>
  );
}
export default App;
