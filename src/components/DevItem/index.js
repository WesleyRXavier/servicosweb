import React from 'react';
import './style.css';

function ProfItem({prof}){

    return (
        <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/24877046?s=460&v=4"
                alt="wesley Xavier"
              />
              <div className="user-info">
                <strong>{prof.name}</strong>
                <span>{prof.servicos.join(', ')}</span>
              </div>
            </header>
            <p>Email:{prof.email}<br/>Telefone:{prof.telefone}  </p>
            <a href="https://github.com/WesleyRXavier">Ver Perfil</a>
          </li>
    );
}
export default ProfItem;