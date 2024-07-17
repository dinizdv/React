import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth"
import Header from "../../components/Header"
import './dashboard.css'
import Title from '../../components/Title'
import { Link } from "react-router-dom"
import { collection, getDocs, orderBy, limit, startAfter, query } from 'firebase/firestore'
import { db } from "../../services/firebaseConnection"
import { format } from 'date-fns'
import Modal from "../../components/Modal"

const listRef = collection(db, 'calls')

export default function Dashboard(){
    const [calls, setCalls] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)
    const [loading, setLoading] = useState(true)
    const [lastDocs, setLastDocs] = useState()
    const [loadingMore, setLoadingMore] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [detail, setDetail] = useState()
    // const { logout } = useContext(AuthContext)

    // async function handleLogout(){
    //     await logout()
    // }

    useEffect(() => {
        async function loadCalls() {
            const q = query(listRef, orderBy('created', 'desc'), limit(5));
            const querySnapshot = await getDocs(q);
            setCalls([]); // cleaning the state before update (because old data can be duplicated, and we want to render only the most recent data)
            await updateState(querySnapshot);
            setLoading(false);
        }
    
        loadCalls();
    
        return () => {};
    }, []);
    

    async function updateState(querySnapshot){
        const isCollectionEmpty = querySnapshot.size === 0

        if (!isCollectionEmpty){
            let list = []
            querySnapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    subject: doc.data().subject,
                    client: doc.data().client,
                    clientId: doc.data().clientId,
                    created: doc.data().created,
                    createdFormat: format(doc.data().created.toDate(), 'dd/MM/yyyy'),
                    status: doc.data().status,
                    complement: doc.data().complement
                })
            })

            // get last doc
            const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]

            setCalls(calls => [...calls, ...list]) // current calls '[]' => create a new array with: ...current calls + list (new calls){two arrays in one array}
            setLastDocs(lastDoc)

        } else {
            setIsEmpty(true)
        }

        setLoadingMore(false)
    }

    async function handleMore(){
        setLoadingMore(true)

        const q = query(listRef, orderBy('created', 'desc'), startAfter(lastDocs), limit(5))
        const querySnapshot = await getDocs(q) // current docs + docs 
        await updateState(querySnapshot)
    }

    function toggleModal(item){ // item: object
        setShowModal(!showModal) // false to true or true to false
        setDetail(item)
    }

    if (loading){
        return(
            <>
            <Header/>
            <div className="content">
            <Title name="Calling System">
                    <i class="fa-solid fa-comment-dots"></i>
                </Title>
                <div className="container-profile dashboard">
                    <span className='searchingCalls'>Searching calls...</span>
                </div>
            </div>
            </>
        )
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Calling System">
                    <i class="fa-solid fa-comment-dots"></i>
                </Title>
            <>
            {calls.length === 0 ? (
                <div className='container-notFound'>
                <div className="container dashboard">
                    <span className='noCallsFound'>No calls found. Create a new!</span>
                
                           <Link to='/newCall' className="newCall newCallNoFound">
                               <i class="fa-solid fa-plus"></i>
                               New call
                           </Link>
                       </div>
</div>               
            ) : (
                <>
                <div className="container-newCall">
                    
                        <Link to='/newCall' className="newCall">
                        <i class="fa-solid fa-plus"></i>
                        New call
                                    </Link>
                </div>

                <table>
                <thead>
                    <tr>
                        <th scope="col">client</th>
                        <th scope="col">subject</th>
                        <th scope="col">status</th>
                        <th scope="col">registration</th>
                        <th scope="col">search/edit</th>
                    </tr>
                </thead>
                <tbody>
                    {calls.map((item, index) => {
                        return(
                            <tr key={index}>
                            <td data-label='Client'>{item.client}</td>
                            <td data-label='Subject'>{item.subject}</td>
                            <td data-label='Status'>
                                <span className="badge" style={{backgroundColor: item.status === 'Opened' ? '#00b570' : '#9b9b9b'}}>
                                    {item.status}
                                </span>
                            </td>
                            <td data-label='Registration'>{item.createdFormat}</td>
                            <td data-label=''>  
                                <Link className='action' id='search' onClick={ () => toggleModal (item)}>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </Link>
                                <Link to={`/newCall/${item.id}`} className='action' id='edit'>
                                    <i class="fa-solid fa-pencil"></i>
                                </Link>
                            </td>
                        </tr>
    
                        )
                    })}
                </tbody>
            </table>                

            {loadingMore && <span className='span-searchMore'>Searching more calls...</span>}
            {!loadingMore && !isEmpty && <button onClick={handleMore} className='btn-searchMore'>Search more calls</button>}
            </>
            )}

            </>
            {/* <button onClick={handleLogout}>Logout</button> */}
            </div>

            {/* if === true */}
            {showModal && (
                <Modal
                    content={detail}
                    close={() => setShowModal(!showModal)} // false to true or true to false
                />
            )}
        </div>
    )
}