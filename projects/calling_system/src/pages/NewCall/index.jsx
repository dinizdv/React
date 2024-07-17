import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { db } from '../../services/firebaseConnection'
import { collection, getDoc, getDocs, doc, addDoc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useNavigate, useParams, userNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import Title from '../../components/Title'
import './newCall.css'

const listRef = collection(db, 'customers')

export default function NewCall(){
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const [customers, setCustomers] = useState([])
    const [loadCustomer, setLoadCustomer] = useState(true)
    const [customerSelected, setCustomerSelected] = useState(0)
    const [complement, setComplement] = useState('')
    const [subject, setSubject] = useState('Support')
    const [status, setStatus] = useState('Opened')
    const [idCustomer, setIdCustomer] = useState(false)

    useEffect(() => {
        async function loadCustomers(){
            const querySnapshot = await getDocs(listRef) // all docs (customers collection)
            .then((snapshot) => {
                let list = []
                snapshot.forEach((doc) => {
                    list.push({
                        id: doc.id,
                        companyName: doc.data().companyName
                    })
                })

                if (snapshot.docs.size === 0){
                    toast.error('No companies found')
                    setLoadCustomer(false)
                    return
                }

                setCustomers(list)
                setLoadCustomer(false)
          
                if(id){
                    loadId(list)
                }
            })  
            .catch((error) => {
                toast.error('Error ', error)
                setLoadCustomer(false)
            })
        }

        loadCustomers()
    }, [id])

    // /newCall/id
    async function loadId(list){
        const docRef = doc(db, 'calls', id)
        await getDoc(docRef)
        .then((snapshot) => {
            setSubject(snapshot.data().subject)
            setStatus(snapshot.data().status)
            setComplement(snapshot.data().complement)

            // select
            let index = list.findIndex(item => item.id === snapshot.data().clientId)
            setCustomerSelected(index)
            setIdCustomer(true) // you can edit
        })
        .catch((error) => {
            console.log(error)
            setIdCustomer(false)
        })
    }

    function handleOptionChange(e){
        setStatus(e.target.value)
    }

    function handleChangeSelect(e){
        setSubject(e.target.value)
        console.log(e.target.value)
    }

    function handleChangeCustomer(e){
        setCustomerSelected(e.target.value)
        console.log(customers[e.target.value].companyName)
    }

    async function handleRegister(e){
        e.preventDefault()

        // can you edit?
        if (idCustomer){
            // edit call
            const docRef = doc(db, 'calls', id)
            await updateDoc(docRef, {
                client: customers[customerSelected].companyName,
                clientId: customers[customerSelected].id,
                subject: subject,
                complement: complement,
                status: status,
                userId: user.uid // who registered
            })
            .then(() => {
                toast.success(`${customers[customerSelected].companyName} call edited successfully`)
                setCustomerSelected(0)
                setComplement('')
                navigate('/dashboard')
            })
            .catch((error) => {
                toast.error('Error ', error)
            })
            return
        }
        

        // register a new call
        await addDoc(collection(db, 'calls'), {
            created: new Date(),
            client: customers[customerSelected].companyName,
            clientId: customers[customerSelected].id,
            subject: subject,
            complement: complement,
            status: status,
            userId: user.uid // who registered
        })
        .then(() => {
            toast.success('Call registered')
            setComplement('')
            setCustomerSelected(0)
        })
        .catch((error) => {
            toast.error('Error ', error)
        })
    }

    return(
        <div>
            <Header/>

            <div className="content">
                <Title name={id ? 'Edit call' : 'New call'}>
                    {id ? <i class="fa-solid fa-pencil"></i> : <i class="fa-solid fa-plus"></i>}
                </Title>

                <div className="container-profile">
                    <form className="form-profile" onSubmit={handleRegister}>
                        <label>Clients</label>
                        {
                            loadCustomer ? (
                                <input type="text" disabled='true' value={'Loading...'} />
                            ) : (
                                <select value={customerSelected} onChange={handleChangeCustomer}>
                                    <option value='' disabled selected>Select an company</option>
                                    {customers.map((client, index) => {
                                        return(
                                            <option key={index} value={index}>
                                                {client.companyName}
                                            </option>
                                        )
                                    })}
                                </select>
                            )
                        }

                        <label>Subject</label>
                        <select value={subject} className="select-form" onChange={handleChangeSelect}>
                            <option value='Support'>Support</option>
                            <option value='Finance'>Finance</option>
                            <option value='Technical visit'>Technical visit</option>
                        </select>   

                        <label>Status</label>
                        <div className="status">
                            <div className="container-spanInput">
                                <input type="radio" name="radio" value='Opened'
                                onChange={handleOptionChange}
                                checked={ status === 'Opened' }
                                />
                                <span>Opened</span>
                            </div>

                            <div className="container-spanInput">
                                <input type="radio" name="radio" value='Progress'
                                onChange={handleOptionChange}
                                checked={ status === 'Progress' }
                                />
                                <span>In progress</span>
                            </div>
                            <div className="container-spanInput">
                                <input type="radio" name="radio" value='Served'
                                onChange={handleOptionChange}
                                checked={ status === 'Served' }
                                />
                                <span>Served</span>
                            </div>
                        </div>

                        <label htmlFor="">Complement</label>
                        <textarea name="" id="" placeholder='Describes your problem (optional).'
                        value={complement}
                        onChange={(e) => setComplement(e.target.value)}
                        />

                        <button type="submit" className='btn-save'>Register</button>
                        </form>
                </div>
            </div>
        </div>
    )
}