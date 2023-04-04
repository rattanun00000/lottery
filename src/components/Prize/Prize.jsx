import React, { useState, useEffect } from 'react';
import './Prize.scss';

const Prize = () => {
  const [number, setNumber] = useState('-');
  const [lessThanNumber, setLessThanNumber] = useState('-');
  const [moreThanNumber, setMoreThanNumber] = useState('-');
  const [otherNumber1, setOtherNumber1] = useState('-');
  const [otherNumber2, setOtherNumber2] = useState('-');
  const [otherNumber3, setOtherNumber3] = useState('-');
  const [number2, setNumber2] = useState('-');
  const [checkNumber, setCheckNumber] = useState('Goodluck');
  const [inputNumber, setInputNumber] = useState('');
  const generateNumber = () => {
    //รางวัลที่ 1
    const randomNumber = Math.floor(Math.random() * 1000);
    setNumber(randomNumber.toString().padStart(3, '0'));

    //รางวัลเลขข้างเคียงรางวัลที่ 1
    setLessThanNumber((randomNumber - 1).toString().padStart(3, '0'));
    setMoreThanNumber((randomNumber + 1).toString().padStart(3, '0'));

    //รางวัลเลขท้าย 2 ตัว
    const randomNumber20 = Math.floor(Math.random() * 100);
    setNumber2(randomNumber20.toString().padStart(2, '0'));

    //รางวัลที่ 2 ตัวที่1
    let randomNumber1 = Math.floor(Math.random() * 1000);
    while (
      randomNumber1 === parseInt(number) ||
      randomNumber1 === parseInt(lessThanNumber) ||
      randomNumber1 === parseInt(moreThanNumber)
    ) {
      randomNumber1 = Math.floor(Math.random() * 1000);
    }
    setOtherNumber1(randomNumber1.toString().padStart(3, '0'));

    //รางวัลที่ 2 ตัวที่2
    let randomNumber2 = Math.floor(Math.random() * 1000);
    while (
      randomNumber2 === parseInt(number) ||
      randomNumber2 === parseInt(lessThanNumber) ||
      randomNumber2 === parseInt(moreThanNumber) ||
      randomNumber2 === otherNumber1
    ) {
      randomNumber2 = Math.floor(Math.random() * 1000);
    }
    setOtherNumber2(randomNumber2.toString().padStart(3, '0'));

    //รางวัลที่ 2 ตัวที่3
    let randomNumber3 = Math.floor(Math.random() * 1000);
    while (
      randomNumber3 === parseInt(number) ||
      randomNumber3 === parseInt(lessThanNumber) ||
      randomNumber3 === otherNumber1 ||
      randomNumber3 === otherNumber2
    ) {
      randomNumber3 = Math.floor(Math.random() * 1000);
    }
    setOtherNumber3(randomNumber3.toString().padStart(3, '0'));
  };

  //ตรวจรางวัล
  const handleInput = () => {
    if (inputNumber === number && inputNumber.slice(1) === number2) {
      setCheckNumber(
        `ยินดีด้วยเลข ${inputNumber} ถูกรางวัลที่ 1 และถูกรางวัลเลขท้าย 2 ตัว`
      );
    } else if (
      (inputNumber === lessThanNumber && inputNumber.slice(1) === number2) ||
      (inputNumber === moreThanNumber && inputNumber.slice(1) === number2)
    ) {
      setCheckNumber(
        `ยินดีด้วยเลข ${inputNumber} ถูกรางวัลเลขข้างเคียงรางวัลที่ 1 และถูกรางวัลเลขท้าย 2 ตัว`
      );
    } else if (
      (inputNumber === otherNumber1 && inputNumber.slice(1) === number2) ||
      (inputNumber === otherNumber2 && inputNumber.slice(1) === number2) ||
      (inputNumber === otherNumber3 && inputNumber.slice(1) === number2)
    ) {
      setCheckNumber(
        `ยินดีด้วยเลข ${inputNumber} ถูกรางวัลที่ 2 และถูกรางวัลเลขท้าย 2 ตัว`
      );
    } else if (inputNumber === number) {
      setCheckNumber(`ยินดีด้วยเลข ${inputNumber} ถูกรางวัลที่ 1`);
    } else if (
      inputNumber === lessThanNumber ||
      inputNumber === moreThanNumber
    ) {
      setCheckNumber(
        `ยินดีด้วยเลข ${inputNumber} ถูกรางวัลเลขข้างเคียงรางวัลที่ 1`
      );
    } else if (
      inputNumber === otherNumber1 ||
      inputNumber === otherNumber2 ||
      inputNumber === otherNumber3
    ) {
      setCheckNumber(`ยินดีด้วยเลข ${inputNumber} ถูกรางวัลที่ 2`);
    } else if (inputNumber.slice(1) === number2) {
      setCheckNumber(`ยินดีด้วยเลข ${inputNumber} ถูกรางวัลเลขท้าย 2 ตัว`);
    } else if (inputNumber === '') {
      setCheckNumber('ขอให้ท่านโชคดี');
    } else {
      setCheckNumber('เสียใจด้วยคุณไม่ถูกรางวัล');
    }
  };

  const handleInputChange = (e) => {
    setInputNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputNumber === '') {
      alert('โปรดกรอกเลขล็อตเตอรี่ของคุณ');
    }
    handleInput();
  };

  return (
    <div className="prize">
      <div className="prizeRandom">
        <div className="title">ผลการออกรางวัลล็อตเตอรี่ Diversition</div>

        <div className="prizeTable">
          <div className="prizeTableL">
            <div className="prizeName">รางวัลที่1</div>
            <div className="prizeName">รางวัลเลขข้างเคียงรางวัลที่ 1</div>
            <div className="prizeTableL3">
              <div className="prizeName">รางวัลที่ 2</div>
              <div className="prizeNumber">{otherNumber1}</div>
            </div>
            <div className="prizeName">รางวัลเลขท้าย 2 ตัว</div>
          </div>
          <div className="prizeTableR">
            <div className="prizeNumber">{number}</div>
            <div className="prizeTableR2">
              <div className="prizeNumber">{lessThanNumber}</div>
              <div className="prizeNumber">{moreThanNumber}</div>
            </div>
            <div className="prizeTableR3">
              <div className="prizeNumber">{otherNumber2}</div>
              <div className="prizeNumber">{otherNumber3}</div>
            </div>
            <div className="prizeNumber">{number2}</div>
          </div>
        </div>

        <button onClick={generateNumber} className="button-29">
          ดำเนินการสุ่มรางวัล
        </button>
      </div>
      <div className="inputContainer">
        <div className="inputTitle">ตรวจรางวัลล็อตเตอรี่ Diversition</div>
        <div className="inputInfo">{checkNumber}</div>

        <form onSubmit={handleSubmit}>
          <div className="inputLine">
            <input
              type="text"
              maxLength="3"
              minLength="3"
              value={inputNumber}
              onChange={handleInputChange}
              placeholder="กรอกเลขล็อตเตอรี่ของคุณที่นี่..."
            />
          </div>
          <div className="buttonCheck">
            <button type="submit">ตรวจรางวัล</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Prize;
