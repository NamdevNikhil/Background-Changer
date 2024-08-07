import { useState } from 'react'

function App() {
  const [color, setColor] = useState("#80A4ED");

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0
      px-2">

        <div className="flex felx-wrap justify-center gap-3 shadow-lg
        bg-white px-3 py-2 rounded-2xl">

          <button className="outline-none px-4 py-1 rounded-full text shadow-lg"
            onClick={() => setColor("red")}
            style={{backgroundColor: "red"}}>Red
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("blue")}
            style={{backgroundColor: "blue"}}>Blue
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("green")}
            style={{backgroundColor: "green"}}>Green
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("olive")}
            style={{backgroundColor: "olive"}}>Olive
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("tomato")}
            style={{backgroundColor: "tomato"}}>Tomato
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("aqua")}
            style={{backgroundColor: "aqua"}}>Aqua
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("coral")}
            style={{backgroundColor: "coral"}}>Coral
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("brown")}
            style={{backgroundColor: "brown"}}>Brown
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("pink")}
            style={{backgroundColor: "pink"}}>Pink
          </button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => setColor("orange")}
            style={{backgroundColor: "orange"}}>Orange
          </button>

        </div>

      </div>
      
    </div>
  );
}

export default App;
