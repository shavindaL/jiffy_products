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
              <h5 className="card-title">All Factories</h5>

              <div class="row mb-3">
                  <label class="col-sm-2 col-form-label" >Select a factory:</label>
                  <br />
                  <div class="col-sm-10">
                    <select class="form-select" aria-label="Default select example">
                      <option selected="">Open this select menu</option>

                      {factory && factory.map((factory) => (
                        <tr key={factory._id}>
                      <option value="1">{factory.id}</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      </tr>
                    ))}
                    </select>
                  </div>
                </div>

              {/* <!-- Default Table --> */}
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Factory ID</th>
                    <th scope="col">Factory Name</th>
                    <th scope="col">Factory Location</th>
                    <th scope="col">View</th>
                  </tr>
                </thead>
                <tbody>
                    {factory && factory.map((factory) => (
                        <tr key={factory._id}>
                            <th scope="row">{factory.fId}</th>
                            <td>{factory.fName}</td>
                            <td>{factory.fLocation}</td>
                            <td><Link to ={{pathname:`/factory-details/${factory._id}`}}>View Factory Details</Link></td>
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