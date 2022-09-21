import { useState } from "react";

const MachineAddForm = () => {
  const [mId, setMId] = useState('')
  const [mName, setMName] = useState('')
  const [maxRunningHrs, setMaxRunningHrs] = useState('')
  const [products, setProducts] = useState('')
  const [mFactory, setMFactory] = useState('')
  const [installedDate, setInstalledDate] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const machine = {mId, mName, maxRunningHrs, products, mFactory, installedDate}

    const response = await fetch('/api/machine', {
      method: 'POST',
      body: JSON.stringify(machine),
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
      setMName('')
      setMaxRunningHrs('')
      setProducts('')
      setMFactory('')
      setInstalledDate('')
      setError(null)
      console.log('New Machine was added succefully.', json)
    }
  }

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Add Machines</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item active">General</li>
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
                <h5 className="card-title">Machine Add Form</h5>


                {error &&
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                }




                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleSubmit}>
                  
                  <div className="col-12">
                    <label for="inputMID" className="form-label">Machine ID:</label>
                    <input type="text" className="form-control" id="inputMID"
                      onChange={(e) => setMId(e.target.value)} value={mId} />
                  </div>

                  <div className="col-12">
                    <label for="inputMName" className="form-label">Machine Name:</label>
                    <input type="text" className="form-control" id="inputMName"
                      onChange={(e) => setMName(e.target.value)} value={mName} />
                  </div>

                  <div className="col-12">
                    <label for="inputMaxRunningHrs" className="form-label">Maximum Running Hours:</label>
                    <input type="Number" className="form-control" id="inputMaxRunningHrs"
                      onChange={(e) => setMaxRunningHrs(e.target.value)} value={maxRunningHrs} />
                  </div>
                  
                  <div className="col-12">
                    <label for="inputProducts" className="form-label">Products Created using the Machine:</label>
                    <input type="text" className="form-control" id="inputProducts"
                      onChange={(e) => setProducts(e.target.value)} value={products} />
                  </div>

                  <div className="col-12">
                    <label for="inputMFactory" className="form-label">Factory ID which this Machine belongs:</label>
                    <input type="text" className="form-control" id="inputMFactory"
                      onChange={(e) => setMFactory(e.target.value)} value={mFactory} />
                  </div>

                  <div className="col-12">
                    <label for="inputInstalledDate" className="form-label">Installed Date:</label>
                    <input type="Date" className="form-control" id="inputInstalledDate"
                      onChange={(e) => setInstalledDate(e.target.value)} value={installedDate} />
                  </div>

                  <div className="text-center">
                    <button type="reset" className="btn btn-secondary">Reset</button>
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

export default MachineAddForm 