import { useState } from "react";

const MachineStatsForm = () => {
  const [mId, setMId] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [product, setProducts] = useState('')
  const [completedProducts, setCompletedProducts] = useState('')
  const [ranHrs, setRanHrs] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const machineStats = { mId, currentDate, product, completedProducts, ranHrs }

    const response = await fetch('/api/machineStats', {
      method: 'POST',
      body: JSON.stringify(machineStats),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setMId('')
      setCurrentDate('')
      setProducts('')
      setCompletedProducts('')
      setRanHrs('')
      setError(null)
      console.log('New products updated succefully.', json)
    }
  }

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Factory Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Machine</li>
            <li className="breadcrumb-item active">Machine Stats</li>
          </ol>
        </nav>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-5">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Machine Status Insert Form</h5>

                {error &&
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                }

                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleSubmit}>

                  <div className="col-12">
                    <label for="inputCurrentDate" className="form-label">Date:</label>
                    <input type="Date" className="form-control" id="inputCurrentDate"
                      onChange={(e) => setCurrentDate(e.target.value)} value={currentDate} />
                  </div>

{/* SELECT FAC */}
                  {/* <div className="col-12">
                    <label class="col-12 col-form-label" >Select a Factory:</label>

                    <div class="col-sm-10">

                      <select className="form-select" onChange={e => setFactoryFilter(e.target.value)}>
                        <option value={null} selected>Select a factory</option>
                        {factories.map(factory => (
                          <option key={factory.fId} value={factory.fId}>{factory.fId}</option>
                        ))}

                      </select>

                    </div>
                  </div> */}

                  <div className="col-12">
                    <label class="col-12 col-form-label" >Select a factory:</label>

                      <select class="form-select" aria-label="Default select example">
                        <option value="null">Select a Factory</option>
                        <option value="1">FAC100</option>
                        <option value="2">FAC200</option>
                        <option value="3">FAC300</option>
                        <option value="4">FAC400</option>
                      </select>
                  </div>
                  <br />


{/* SELECT MACHINE */}
                  {/* <div className="col-12">
                    <label class="col-12 col-form-label" >Select a Machine:</label>
                    <br />
                    <div class="col-sm-10">

                      <select className="form-select" onChange={e => setMachineFilter(e.target.value)}>
                        <option value={null} selected>Select a machine</option>
                        {machines.map(machine => (
                          <option key={machine.mId} value={machine.mId}>{machine.mId}</option>
                        ))}

                      </select>

                    </div>
                  </div> */}

                  <div className="col-12">
                    <label class="col-12 col-form-label" >Select a machine:</label>

                      <select class="form-select" aria-label="Default select example">
                        <option value="null">Select a Machine</option>
                        <option value="1">FAC100</option>
                        <option value="2">FAC200</option>
                        <option value="3">FAC300</option>
                        <option value="4">FAC400</option>
                      </select>
                  </div>
                  <br />

{/* SELECT PRODUCT */}
                  {/* <div className="col-12">
                    <label for="product" className="form-label">Product:</label>

                    {machines && machines.map((machine) => (
                      <input key={machine._id} type="text" className="form-control" id="product"
                        value={machine.product} disabled />
                    ))}

                  </div> */}

                   <div className="col-12">
                    <label for="product" className="form-label">Product:</label>

                      <input  type="text" className="form-control" id="product"
                        disabled />

                  </div>

                  <div className="col-12">
                    <label for="ranHrs" className="form-label">Ran Hours for the Day:</label>
                    <input type="text" className="form-control" id="ranHrs"
                      onChange={(e) => setRanHrs(e.target.value)} value={ranHrs} />
                  </div>

                  <div className="col-12">
                    <label for="completedProducts" className="form-label">Number of Products Completed:</label>
                    <input type="text" className="form-control" id="completedProducts"
                      onChange={(e) => setCompletedProducts(e.target.value)} value={completedProducts} />
                  </div>

                  <div className="text-center">
                    <button type="reset" className="btn btn-secondary" style={{ margin: "20px" }}>Reset</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
                {/* <!-- Vertical Form --> */}

              </div>
            </div>


          </div>
          <div className="col-lg-4">
          </div>
        </div>
      </section>

    </main>
  )
}

export default MachineStatsForm 