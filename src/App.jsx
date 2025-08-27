import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      setContacts(res.data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className='p-6 text-center'>Loading...</div>
  if (error) return <div className='p-6 text-center text-red-400'>Error: {error}</div>

  return (
    <>
      <div className='min-h-screen bg-gray-100 p-6'>
        <h1 className='text-3xl font-bold text-center mb-10 sm:mb-6'>Contacts</h1>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {contacts.map((contact) => (
            <div key={contact.id} className='bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition'>
              <h2 className='text-xl font-semibold mb-2'>{contact.name}</h2>
              <p className='text-gray-600'>{contact.email}</p>
              <p className='text-gray-600'>{contact.phone}</p>
              <p className='text-gray-600'>{contact.company.name}</p>
              <p className='text-gray-600'>{contact.address.city}</p>
              <a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer" className='text-blue-500 underline mt-2 inline-block'>{contact.website}</a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
