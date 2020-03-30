import React, {useState}  from 'react';
import { Link, useHistory } from 'react-router-dom' ;

import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './styles.css';
import api from '../../services/api';

export default function NewIncidents() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const token = localStorage.getItem('token');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {title, description, value};

        try{
            await api.post('incidents', data, {
                headers: {
                    token_authorization: token,
                }
            })

            history.push('/profile')
        }catch(err){
            alert('Não foi possivel cadastrar o caso, tente novamente.');
        }
    }

    return (
        <div className="new-incidents-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamento para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041" />
                        Voltar para Home
                    </ Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    
                    <input placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}