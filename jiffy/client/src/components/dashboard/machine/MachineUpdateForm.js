import { useState } from "react";

const MachineUpdateForm = () => {
  const [mId, setMId] = useState('')
  const [mName, setMName] = useState('')
  const [maxRunningHrs, setMaxRunningHrs] = useState('')
  const [product, setProducts] = useState('')
  const [mFactory, setMFactory] = useState('')
  const [installedDate, setInstalledDate] = useState('')
  const [error, setError] = useState(null)

  const handleSelect=(e)=>{
    console.log(e);
    setProducts(e)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const machine = {mId, mName, maxRunningHrs, product, mFactory, installedDate}

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
        <h1>Machine Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Machine</li>
            <li className="breadcrumb-item active">Update Machine Status</li>
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
                <h5 className="card-title">Data insert Form</h5>


                {error &&
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                }




                {/* <!-- Vertical Form --> */}
                <form className="row g-3" onSubmit={handleSubmit}>
                  
                  <div className="col-12">
                      <label class="col-12 col-form-label" >Select a factory:</label>
                      
                      <div class="col-sm-10">
                        <select class="form-select" aria-label="Default select example">
                          <option value="null">Select a Factory</option>
                          <option value="1">FAC100</option>
                          <option value="2">FAC200</option>
                          <option value="3">FAC300</option>
                          <option value="4">FAC400</option>
                        </select>                         
                      </div>
                  </div>
                  
                  <br />

                  <div className="col-12">
                      <label class="col-12 col-form-label" >Select a Machine:</label>
                      <br />
                      <div class="col-sm-10">
                        <select class="form-select" aria-label="Default select example">
                          <option value="null">Select a Factory</option>
                          <option value="1">MCN121</option>
                          <option value="2">MCN223</option>
                          <option value="3">MCN012</option>
                          <option value="4">MCN078</option>
                        </select>                         
                      </div>
                  </div>

                  <div className="col-12">
                    <label for="inputInstalledDate" className="form-label">Date:</label>
                    <input type="Date" className="form-control" id="inputInstalledDate"
                      onChange={(e) => setInstalledDate(e.target.value)} value={installedDate} />
                  </div>

                  <div className="col-12">
                    <label for="product" className="form-label">Product:</label>
                    <input type="text" className="form-control" id="product"
                      onChange={(e) => setProducts(e.target.value)} value={product} />
                  </div>

                  <div className="col-12">
                    <label for="product" className="form-label">Running Hours:</label>
                    <input type="text" className="form-control" id="product"
                      onChange={(e) => setProducts(e.target.value)} value={product} />
                  </div>

                  <div className="col-12">
                    <label for="product" className="form-label">Number of Products Completed:</label>
                    <input type="text" className="form-control" id="product"
                      onChange={(e) => setProducts(e.target.value)} value={product} />
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

export default MachineUpdateForm 