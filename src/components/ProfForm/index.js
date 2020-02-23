import React, { useState, useEffect } from "react";
import './style.css';

function ProfForm({ onSubmit }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servicos, setServicos] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        setLatitude(20.3222);
        setLongitude(-40.3381);
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      name,
      email,
      telefone,
      cpf,
      servicos,
      latitude,
      longitude
    });
    setName("");
    setEmail("");
    setCpf("");
    setTelefone("");
    //setLatitude('');
    //setLongitude('');
    setServicos("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="cpf">CPF: </label>
        <input
          type="text"
          name="cpf"
          id="cpf"
          required
          value={cpf}
          onChange={e => setCpf(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="telefone">Telefone: </label>
        <input
          type="text"
          name="telefone"
          id="Telefone"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="servicos">Serviços:</label>
        <input
          type="text"
          name="servicos"
          id="servicos"
          required
          value={servicos}
          onChange={e => setServicos(e.target.value)}
        />
      </div>
      <div className="input-block" hidden>
        <label htmlFor="latitude">Latitude:</label>
        <input
          type="text"
          name="latitude"
          id="latitude"
          value={latitude}
          onChange={e => setLatitude(e.target.value)}
          required
        />
      </div>
      <div className="input-block" hidden>
        <label htmlFor="longitude">Longitude:</label>
        <input
          type="text"
          name="longitude"
          id="longitude"
          value={longitude}
          onChange={e => setLongitude(e.target.value)}
          required
        />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}
export default ProfForm;
