import { useState, useEffect } from "react";

const Formulario = () => {

  const [ nombre, setNombre ] = useState("");
  const [ propietario, setPropietario ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ fecha, setFecha ] = useState("");
  const [ sintomas, setSintomas ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando el Formulario")
  }

  return (

    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Anade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form onSubmit={ handleSubmit } 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5" action="">
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
          <input 
              id="mascota"
              type="text"
              placeholder="Nombre de la mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={ nombre } 
              onChange={ (e) => setNombre(e.target.value) }
            />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre del Propietario</label>
          <input 
              id="propietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={ propietario }
              onChange={ (e) => setPropietario(e.target.value) }  
            />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input 
              id="email"
              type="email"
              placeholder="Email contacto del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
          <input 
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={ fecha }
              onChange={ (e) => setFecha(e.target.value) }  
            />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
          <input 
              id="sintomas"
              type="text"
              placeholder="Describe los sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={ sintomas }
              onChange={ (e) => setSintomas(e.target.value) }  
            />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-all"
          value="Agregar Paciente" 
        />
      </form>
    </div>
  );
};

export default Formulario;
