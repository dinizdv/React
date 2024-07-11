import { useState } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import { db } from '../../services/firebaseConnection'
import { addDoc, collection } from 'firebase/firestore'
import { toast } from 'react-toastify'
import './customers.css'

export default function Customers(){
    const [name, setName] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [address, setAddress] = useState('')
    
    async function handleRegister(e){
        e.preventDefault()
        if (name !== '' && cnpj !== '' && address !== ''){
            await addDoc(collection(db, 'customers'),{
                companyName: name,
                cnpj: cnpj,
                address: address
            })
            .then(() => {
                toast.success(`${name} company successfully registered`)
                setName('')
                setCnpj('')
                setAddress('')    
            })
            .catch((e) => {
                toast.error(`Error: ${e}`)
            })
        } else {
            toast.error('Fill in all form fields')
        }
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Clients">
                    <i className="icons-sidebar fa-solid fa-users"></i>
                </Title>

                <div className="container-profile">
                    <form className="form-profile form-company" onSubmit={handleRegister}>
                        <label>Company name</label>
                        <input type="text" placeholder='Type name on here' value={name} onChange={(e) => setName(e.target.value)}/>

                        <label>National Register of Legal Entities (CNPJ)</label>
                        <input type="text" placeholder='Type CNPJ on here' value={cnpj} onChange={(e) => setCnpj(e.target.value)}/>

                        <label>Company address</label>
                        <input type="text" placeholder='Type address on here' value={address} onChange={(e) => setAddress(e.target.value)}/>
                        
                        <button type="submit" className="btn-save">Save data</button>
                    </form>
                </div>
            </div>
        </div>
    )
}