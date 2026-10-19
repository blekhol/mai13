import { useState } from "react";
import AllatLista from "./components/AllatLista";
import AllatVezerlo from "./components/AllatVezerlo";
import type { Allat } from "./types";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [allatok, setAllatok] = useState<Allat[]>([
    { id: 1, nev: "Bodri", kor: 4 },
    { id: 2, nev: "Cirmi", kor: 2 },
    { id: 3, nev: "Morzsi", kor: 7 },
  ]);

  const allatHozzaadasa = () => {
    const ujAllat: Allat = { id: Date.now(), nev: "Luna", kor: 1 };
    setAllatok((elozoAllatok) => [...elozoAllatok, ujAllat]);
  };

  const eletkorNovelese = (id: number) => {
    setAllatok((elozoAllatok) =>
      elozoAllatok.map((allat) =>
        allat.id === id ? { ...allat, kor: allat.kor + 1 } : allat
      )
    );
  };

  const allatTorlese = (id: number) => {
    setAllatok((elozoAllatok) =>
      elozoAllatok.filter((allat) => allat.id !== id)
    );
  };

  return (
    <div className="container mt-4">
      <h1>Állatmenhely nyilvántartás</h1>
      <AllatLista
        allatok={allatok}
        eletkorNovelese={eletkorNovelese}
        allatTorlese={allatTorlese}
      />
      <AllatVezerlo allatHozzaadasa={allatHozzaadasa} />
    </div>
  );
}