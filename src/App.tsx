import { useState } from "react";

export default function App() {
  const [currInput, setCurrInput] = useState<string>("");
  const [prevInput, setPrevInput] = useState<string>("");
  const [selectedOp, setselectedOp] = useState<string>("");

  function handleDigitInput(e: React.MouseEvent<HTMLButtonElement>) {
    const value = e?.currentTarget.value;
    console.log(value);

    setCurrInput((prev) => {
      return `${prev}${value}`;
    });
  }

  return (
    <div className="flex flex-col items-center justify-center p-10 ">
      <p className="text-2xl mb-3 uppercase font-bold">Calculator App</p>
      <div className="grid grid-cols-4">
        <input
          className="col-span-4 display"
          type="text"
          disabled
          placeholder="0"
          value={currInput ?? 0}
        />
        {/* level 1 */}
        <button className="num-btn">AC</button>
        <button className="num-btn">+/-</button>
        <button className="num-btn">%</button>
        <button className="opr-btn">/</button>

        {/* level 2 */}
        <button className="num-btn" value={7} onClick={handleDigitInput}>
          7
        </button>
        <button value={8} onClick={handleDigitInput} className="num-btn">
          8
        </button>
        <button value={9} onClick={handleDigitInput} className="num-btn">
          9
        </button>
        <button className="opr-btn">x</button>

        {/* level 3 */}
        <button value={4} onClick={handleDigitInput} className="num-btn">
          4
        </button>
        <button value={5} onClick={handleDigitInput} className="num-btn">
          5
        </button>
        <button value={6} onClick={handleDigitInput} className="num-btn">
          6
        </button>
        <button className="opr-btn">-</button>

        {/* level 4 */}
        <button value={1} onClick={handleDigitInput} className="num-btn">
          1
        </button>
        <button value={2} onClick={handleDigitInput} className="num-btn">
          2
        </button>
        <button value={3} onClick={handleDigitInput} className="num-btn">
          3
        </button>
        <button onClick={handleDigitInput} className="opr-btn">
          +
        </button>

        {/* footer  */}
        <button
          value={0}
          onClick={handleDigitInput}
          className="col-span-2 num-btn"
        >
          0
        </button>
        <button className="num-btn">.</button>
        <button className="opr-btn">=</button>
      </div>
    </div>
  );
}
