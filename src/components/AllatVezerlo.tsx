type AllatVezerloProps = {
  allatHozzaadasa: () => void;
};

export default function AllatVezerlo({ allatHozzaadasa }: AllatVezerloProps) {
  return (
    <div>
      <button className="btn btn-primary" onClick={allatHozzaadasa}>
        Új állat felvétele (Luna)
      </button>
    </div>
  );
}