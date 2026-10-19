import type { Allat } from "../types";

type AllatListaProps = {
  allatok: Allat[];
  eletkorNovelese: (id: number) => void;
  allatTorlese: (id: number) => void;
};

export default function AllatLista({
  allatok,
  eletkorNovelese,
  allatTorlese,
}: AllatListaProps) {
  return (
    <ul className="list-group mb-3">
      {allatok.map((allat) => (
        <li
          key={allat.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>
            {allat.nev} ({allat.kor} éves)
          </span>
          <div>
            <button
              className="btn btn-sm btn-secondary me-2"
              onClick={() => eletkorNovelese(allat.id)}
            >
              Kor +1
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => allatTorlese(allat.id)}
            >
              Törlés
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}