
const Pacientes = () => {
  return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre del Propietario:{" "}
          <span className="font-normal normal-case">Antonio</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:{" "}
          <span className="font-normal normal-case">antonio@academlo.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Alta: <span className="font-normal normal-case">18/01/2023</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas:{" "}
          <span className="font-normal normal-case">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            distinctio praesentium exercitationem, et suscipit harum cupiditate
            enim quam numquam ducimus aliquid, magnam, voluptatem eum tempora
            architecto. Nostrum corrupti itaque eos!
          </span>
        </p>
      </div>
  )
}

export default Pacientes