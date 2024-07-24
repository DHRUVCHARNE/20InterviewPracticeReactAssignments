import React, { useState } from "react";
import "./styles.css";
import QRCode from "react-qr-code";
function QRCodeGen() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQRCode = async () => {
    setQrCode(input);
  };

  return (
    <div className="qr-layout">
      <h1>QR Code Generator</h1>
      <input
        className="qr-input"
        type="text"
        name="qr"
        placeholder="Enter Value Here"
        onClick={(e) => setInput(e.target.value)}
      />
      <button
        className="qr-button "
        onClick={handleGenerateQRCode}
        disabled={input && input.trim() !== "" ? false : true}
      >
        Generate
      </button>
      <div className="qr">
        <QRCode id="qr-val" value={qrCode} size={400} />
      </div>
    </div>
  );
}

export default QRCodeGen;
