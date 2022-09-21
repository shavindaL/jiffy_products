import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function Factory() {
    const [factory, setFactory] = useState(null)

    useEffect(() => {
        const fetchFactory = async () => {
            const response = await fetch(`/api/factory`)
            const json = await response.json()
            console.log(json)
            console.log(json[0])
            if (response.ok) {
                setFactory(json)
            }
        }

        fetchFactory()
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
                    <th scope="col">Factory ID:</th>
                    <th scope="col">Factory Name:</th>
                    <th scope="col">Factory Location:</th>
                    <th scope="col">Number Of Machines:</th>
                    <th scope="col">Number Of Emplyees:</th>
                    <th scope="col">Number Of Vehicles:</th>
                    <th scope="col">Date Created</th>
                  </tr>
                </thead>
                <tbody>
                    {factory && factory.map((factory) => (
                        <tr key={factory._id}>
                            <th scope="row">{factory._id}</th>
                            <td>{factory.fID}</td>
                            <td>{factory.fName}</td>
                            <td>28</td>
                            <td><Link to ={{pathname:`/factory/${factory._id}`}}>View Factory Details</Link></td>
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

export default Factory;