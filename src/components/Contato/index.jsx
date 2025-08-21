import React, { useState } from 'react';
import axios from 'axios';
import './Contato.css';

const Contato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            await axios.post('/api/contato', formData);
            setStatus('Mensagem enviada com sucesso!');
            setFormData({ nome: '', email: '', mensagem: '' });
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            setStatus('Erro ao enviar a mensagem. Tente novamente.');
        }
    };

    return (
        <section className="contact-section" id='contato'>
            <div className="container">
                <div className='contact-title'>
                </div>
                <div className="contact-content">
                    <div className="map-container">
                    <h2 style={{textAlign: 'end'}}>LOCALIZAÇÃO</h2>
                    <div className="bar"></div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.5441180146186!2d-48.316376523956095!3d-22.105220609718025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b89bd3f8cfa53b%3A0x7e3ed82914fe2162!2sFazzio%20Madeiras!5e0!3m2!1spt-BR!2sbr!4v1755692302612!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização da Fazzio Madeiras"
                        ></iframe>
                    </div>
                    <div>
                        <h2 style={{textAlign: 'start'}}>CONTATO</h2>
                        <div className="bar"></div>
                        <div className="contact-form-container">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="nome">Nome</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefone">Telefone</label>
                                        <input
                                            type="tel"
                                            id="telefone"
                                            name="telefone"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        value={formData.mensagem}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-row" style={{ alignItems: 'center' }}>
                                    <p>13 + 7 = </p>
                                    <input type="text" style={{ width: 'auto' }} />
                                    <button type="submit" className="btn btn-primary">
                                        Enviar
                                    </button>
                                </div>
                                {status && <p className="form-status">{status}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contato;