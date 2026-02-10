const CardResumo = ({ titulo, valor, icone }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm font-medium">{titulo}</p>
        <h3 className="text-2xl font-bold text-gray-800">{valor}</h3>
      </div>
      <div className="text-blue-500 text-3xl">
        {icone}
      </div>
    </div>
  );
};

export default CardResumo;