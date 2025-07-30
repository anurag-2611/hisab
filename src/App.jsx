import React, { useState, useEffect } from "react";

export const App = () => {
  const [Name, setName] = useState("");
  const [Amount, setAmount] = useState("");
  const [value, setvalue] = useState(0);
  const [alertMsg, setAlertMsg] = useState("");

  // Use lazy initialization to load from localStorage first
  const [anurag, setanurag] = useState(() => {
    const data = localStorage.getItem("hisabData");
    return data ? JSON.parse(data).anurag ?? 100 : 100;
  });
  const [atharva, setatharva] = useState(() => {
    const data = localStorage.getItem("hisabData");
    return data ? JSON.parse(data).atharva ?? 0 : 0;
  });
  const [anshul, setanshul] = useState(() => {
    const data = localStorage.getItem("hisabData");
    return data ? JSON.parse(data).anshul ?? 60 : 60;
  });
  const [arpita, setarpita] = useState(() => {
    const data = localStorage.getItem("hisabData");
    return data ? JSON.parse(data).arpita ?? 0 : 0;
  });
  const [sahil, setsahil] = useState(() => {
    const data = localStorage.getItem("hisabData");
    return data ? JSON.parse(data).sahil ?? 20 : 20;
  });
  const [vipul, setvipul] = useState(() => {
    const data = localStorage.getItem("hisabData");
    return data ? JSON.parse(data).vipul ?? 0 : 0;
  });

  // Remove useEffect for loading, now handled by lazy initialization

  // Save values to localStorage whenever any changes
  useEffect(() => {
    localStorage.setItem(
      "hisabData",
      JSON.stringify({ anurag, atharva, anshul, arpita, sahil, vipul })
    );
  }, [anurag, atharva, anshul, arpita, sahil, vipul]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-500 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-18 text-center">
        Welcome to Hisab
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAlertMsg("");
          // Only update value for the matching name
          switch (Name) {
            case "Anurag":
              setanurag((val) => val + Number(Amount));
              break;
            case "Atharva":
              setatharva((val) => val + Number(Amount));
              break;
            case "Anshul":
              setanshul((val) => val + Number(Amount));
              break;
            case "Arpita":
              setarpita((val) => val + Number(Amount));
              break;
            case "Sahil":
              setsahil((val) => val + Number(Amount));
              break;
            case "Vipul":
              setvipul((val) => val + Number(Amount));
              break;
            default:
              setAlertMsg("Name not recognized. Please enter a valid name.");
              break;
          }
        }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6"
        action=""
      >
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the name"
          className="border border-blue-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all "
        />
        <input
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Enter the amount"
          className="border border-blue-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 rounded-lg transition-colors duration-200 shadow"
        >
          Add
        </button>
      </form>

      {alertMsg && (
        <div className="w-full max-w-md mx-auto mt-6 mb-[-1rem]">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow text-center font-semibold animate-fadein">
            {alertMsg}
          </div>
        </div>
      )}
      <div className="mt-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <ul className="flex flex-col gap-4">
          <li className="bg-blue-100 text-blue-700 font-semibold rounded-lg px-4 py-2 shadow hover:bg-blue-200 transition-colors duration-200">
            Anurag = {anurag}
          </li>
          <li className="bg-blue-100 text-blue-700 font-semibold rounded-lg px-4 py-2 shadow hover:bg-blue-200 transition-colors duration-200">
            Atharva = {atharva}
          </li>
          <li className="bg-blue-100 text-blue-700 font-semibold rounded-lg px-4 py-2 shadow hover:bg-blue-200 transition-colors duration-200">
            Anshul = {anshul}
          </li>
          <li className="bg-blue-100 text-blue-700 font-semibold rounded-lg px-4 py-2 shadow hover:bg-blue-200 transition-colors duration-200">
            Sahil = {sahil}
          </li>
          <li className="bg-blue-100 text-blue-700 font-semibold rounded-lg px-4 py-2 shadow hover:bg-blue-200 transition-colors duration-200">
            Vipul = {vipul}
          </li>
          <li className="bg-blue-100 text-blue-700 font-semibold rounded-lg px-4 py-2 shadow hover:bg-blue-200 transition-colors duration-200">
            Arpita = {arpita}
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-black mt-10">
          Total Amount: {anurag + atharva + anshul + arpita + sahil + vipul}
        </h2>
      </div>
    </div>
  );
};
