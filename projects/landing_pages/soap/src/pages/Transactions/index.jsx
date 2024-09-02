import { useState, useEffect } from 'react'
import { db } from '../../services/firebaseConnection'
import { getDocs, deleteDoc, doc, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './transactions.css'


export default function Transactions(){
    const [transactions, setTransactions] = useState([]);
    const price = 2.99
    var total = transactions.length * price

    useEffect(() => {
        fetchTransactions()
    }, [])

    async function fetchTransactions(){
        try {
            const purchaseRef = collection(db, 'purchases')
            const querySnapshot = await getDocs(purchaseRef)
            const transactionList = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            setTransactions(transactionList)
        } catch (error){
            console.log(error)
        }
           
}

    // deleteDoc
    async function deleteTransaction(id){
        try {
            const docRef = doc(db, 'purchases', id)
            await deleteDoc(docRef)
            // filter => create a new array with the elements that pass the thes implemented; it checks if the id of each transaction (t) does not match the id being deleted
            setTransactions(prevTransactions => prevTransactions.filter(t => t.id !== id));
            toast.success(`Transação do usuário ${transactions.find(t => t.id === id)?.name || 'indefinido'} deletada`);
        } catch (error) {
            toast.error(`Erro ao deletar transação do usuário ${transactions.name}`)
            console.error("Erro ao deletar transação:", error)
        }
    }   

    return(
                  <div className="container-dashboard">
                      <div className="container-style-dashboard">
                      <h1>Transações</h1>
          <div className="container-btn-dashboard">
              <Link to='/admin/dashboard' href='#' id='btn-outline-transactions'>Dashboard</Link>
              <a href='#' id='btn-transactions'>Transações</a>
          </div>
          <h2>Transações realizadas</h2>
                          <div className="container-purchase">
                            
                              {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                    <div key= {transaction.id} className="purchase">                                                              
                    <p className="purchase-name"><strong>Transação:</strong>{index + 1}</p>
                    <p className="purchase-name"><strong>Nome:</strong>{transaction.name}</p>
                    <p className="purchase-name"><strong>E-mail:</strong>{transaction.email}</p>
                    <p className="purchase-name"><strong>N° telefone:</strong>{transaction.phone}</p>
                    <p className="purchase-name"><strong>Produto:</strong>{transaction.product}</p>
                    <button onClick={() => deleteTransaction(transaction.id)}>Excluir</button>
                  </div>
        
                ))
            ) : (
                <p className="no-transactions">Nenhuma transação encontrada</p>
            )}
            
                          </div>

                          <p className='transactions-p'><strong>Total de transações:</strong> {transactions.length}</p>
                          <p className='transactions-p'><strong>Valor arrecadado:</strong> R${total.toFixed(2)}</p>
                      </div>
                  </div>
    )
}