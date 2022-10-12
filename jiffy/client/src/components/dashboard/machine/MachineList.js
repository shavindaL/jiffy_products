import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Machine() {
  const navigate = useNavigate()
  const [machine, setMachine] = useState(null)
  const [factory, searchFactory] = useState('')
  const { mFactory } = useParams()

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

  // useEffect(() => {
  //   const fetchMachineByFId = async () => {
  //     const response = await fetch(`/api/machine/${mFactory}`)
  //     const json = await response.json()

  //     console.log(json)
  //     console.log(json[0])

  //     if (response.ok) {
  //       setMachine(json)
  //     }
  //   }

  //   fetchMachine()
  // }, [])

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

                <div class="row mb-3">
                  <label class="col-sm-2 col-form-label" >Select a factory:</label>
                  <br />

                  {/* <div class="col-sm-10">
                    <select class="form-select" aria-label="Default select example">
                      <option selected="">All factories</option>
                      <option value="1">FAC100</option>
                      <option value="2">FAC200</option>
                      <option value="3">FAC300</option>
                    </select>
                  </div> */}

                  <div className="col-4">
                    <div className="input-group mb-3">
                      {/* <input type="text" className="form-control" placeholder="Search" value={searchTerm} onChange={e => { setSearchTerm(e.target.value) }} /> */}
                      
                      <select className="form-select" onChange={e => searchFactory(e.target.value)}>
                        <option value="FAC100" selected>All factories</option>
                        <option value="FAC100">FAC100</option>
                        <option value="FAC200">FAC200</option>
                        <option value="FAC300">FAC300</option>
                      </select>
                      
                    </div>
                  </div>

                </div>

                {/* <!-- Default Table --> */}
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Machine ID</th>
                      <th scope="col">Product Created</th>
                      <th scope="col">Max. Running Hours per week</th>
                      <th scope="col">Factory ID</th>
                      <th scope="col">View</th>
                    </tr>
                  </thead>
                  <tbody>
                    {machine && machine.map((machine) => (
                      <tr key={machine._id}>
                        <th scope="row">{machine.mId}</th>
                        <td>{machine.product}</td>
                        <td>{machine.maxRunningHrs}</td>
                        <td>{machine.mFactory}</td>
                        <td><Link to={{ pathname: `/machine-details/${machine._id}` }}>View Machine Details</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <!-- End Default Table Example --> */}
              </div>
              
            </div>
            <button type="button" class="btn btn-outline-primary" onClick={() => navigate("/add-machine")}>Add New Machine</button>
          </div>
        </div>
      </section>

    </main>
  );
}


export default Machine;