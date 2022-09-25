import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function Customers() {
    const [customers, setCustomers] = useState(null)

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch(`/api/users`)
            const json = await response.json()
            console.log(json)
            console.log(json[0])
            if (response.ok) {
                setCustomers(json)
            }
        }

        fetchCustomers()
    }, [])

    return (
        <main id="main" className="main">

    <div className="pagetitle">
      <h1>General Tables</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item">Tables</li>
          <li className="breadcrumb-item active">General</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section className="section">
      <div className="row">
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Default Table</h5>

              {/* <!-- Default Table --> */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                    {customers && customers.map((customer) => (
                        <tr key={customer._id}>
                            <th scope="row">{customer._id}</th>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td><Link to ={{pathname:`/customer/${customer._id}`}}>View Profile</Link></td>
                        </tr>
                    ))}
                </tbody>
              </table>
              {/* <!-- End Default Table Example --> */}
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
    );
}

export default Customers;