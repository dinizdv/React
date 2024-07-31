import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import './results.css';

const listRef = collection(db, 'users');

export default function Results() {
    const [results, setResults] = useState([]);
    const [topThree, setTopThree] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadResults() {
            const q = query(listRef, orderBy('total', 'desc'));
            const querySnapshot = await getDocs(q);
            setResults([]);
            await updateState(querySnapshot); // update
            setLoading(false);
        }
        loadResults();
        return () => {};
    }, [results]);

    async function updateState(querySnapshot) {
        const isCollectionEmpty = querySnapshot.size === 0;
        if (!isCollectionEmpty) {
            let list = [];
            querySnapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    name: doc.data().name,
                    total: doc.data().total
                });
            });

            // fill the three first positions
            setTopThree(list.slice(0, 3));

            // add to results
            setResults(results => [...results, ...list.slice(3)]); // add current from 3 onwards
        } 
    }

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table>
                    <thead>
                        <div className='tr-ranking'>
                            <td className='ranking'>Ranking de classificação</td>
                        </div>
                        <tr>
                            <th scope="col">Posição</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topThree.map((item, index) => (
                            <tr key={index}>
                                <td data-label='position'>{index + 1}</td> {/* 0 + 1 */}
                                <td data-label='name'>{item.name}</td>
                                <td data-label='total'>{item.total}</td>
                            </tr>
                        ))}
                        {results.map((item, index) => (
                            <tr key={index + topThree.length}>
                                <td data-label='position'>{index + 4}</td>
                                <td data-label='name'>{item.name}</td>
                                <td data-label='total'>{item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
                        <div className="container-btn-again">
                            <Link to='/draw' className='btn-link'>Sortear novamente</Link>
                        </div>
        </div>
    );
}
