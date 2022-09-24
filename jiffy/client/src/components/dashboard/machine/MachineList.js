import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function Machine() {
    const [machine, setMachine] = useState(null)

    useEffect(() => {
        const fetchMachine = async () => {
            const response = await fetch(`/api/machine`)
            const json = await response.json()
            console.log(json)
            console.log(json[0])
            if (response.ok) {
                setMachine(json)
            }
        }

        fetchMachine()
    }, [])

    return (
        <main id="main" className="main">

    <div className="pagetitle">
      <h1>Machine Management</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item">Machine</li>
          <li className="breadcrumb-item active">View Machine</li>
        </ol>
      </nav>
    </div>
    {/* <!-- End Page Title --> */}

    <section className="section">
      <div className="row">
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">All Machines</h5>

              {/* <!-- Default Table --> */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Machine ID</th>
                    <th scope="col">Machine Name</th>
                    <th scope="col">Product Created</th>
                    <th scope="col">View</th>
                  </tr>
                </thead>
                <tbody>
                    {machine && machine.map((machine) => (
                        <tr key={machine._id}>
                            <th scope="row">{machine.mId}</th>
                            <td>{machine.mName}</td>
                            <td>{machine.product}</td>
                            <td><Link to ={{pathname:`/machine-details/${machine._id}`}}>View Machine Details</Link></td>
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

export default Machine;