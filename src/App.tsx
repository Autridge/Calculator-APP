import { useState } from "react";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center p-10 ">
      <p>Calculator App</p>
      <div className="grid grid-cols-4">
        <input
          className="col-span-4 display"
          type="text"
          disabled
          placeholder="0"
        />
        {/* level 1 */}
        <button className="num-btn">AC</button>
        <button className="num-btn">+/-</button>
        <button className="num-btn">%</button>
        <button className="opr-btn">/</button>

        {/* level 2 */}
        <button className="num-btn">7</button>
        <button className="num-btn">8</button>
        <button className="num-btn">9</button>
        <button className="opr-btn">x</button>

        {/* level 3 */}
        <button className="num-btn">4</button>
        <button className="num-btn">5</button>
        <button className="num-btn">6</button>
        <button className="opr-btn">-</button>

        {/* level 4 */}
        <button className="num-btn">1</button>
        <button className="num-btn">2</button>
        <button className="num-btn">3</button>
        <button className="opr-btn">+</button>

        {/* footer  */}
        <button className="col-span-2 num-btn">0</button>
        <button className="num-btn">.</button>
        <button className="opr-btn">=</button>
      </div>
    </div>
  );
}
