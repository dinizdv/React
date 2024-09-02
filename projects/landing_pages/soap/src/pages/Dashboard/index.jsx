import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { toast } from 'react-toastify';
import './dashboard.css';

export default function Dashboard() {
  const [data, setData] = useState({
    product: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const purchasesRef = collection(db, 'purchases');

      const res = await addDoc(purchasesRef, {
        product: data.product,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      toast.success('Dados salvos com sucesso');
      setData({ product: '', name: '', email: '', phone: '' });
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      toast.error('Erro ao enviar dados');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="container-dashboard">

      <div className="container-style-dashboard">
          <h1>Dashboard</h1>
          <div className="container-btn-dashboard">
              <a href='#' id='btn-dashboard'>Dashboard</a>
              <Link to='/admin/dashboard/transactions' id='btn-outline-dashboard'>Transações</Link>
          </div>
          <h2>Adicionar compra</h2>
          <form onSubmit={handleSubmit}>
          <label htmlFor="product">Produto:</label>
            <input
              type="tel"
              id="product"
              name="product"
              value={data.product}
              onChange={handleChange}
            />
            
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          
            <label htmlFor="phone">Número de telefone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
            <button type="submit">Salvar</button>
          </form>
      </div>
    </div>
  );
}   