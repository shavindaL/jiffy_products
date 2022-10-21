import { useState } from "react";

const RawInsertForm = () => {
  const [fId, setFId] = useState('')
  const [currentDate, setCurrentDate] = useState('')
  const [rawMaterial, setRawMaterial] = useState('')
  const [noRawMaterial, setNoRawMaterial] = useState('')
  const [error, setError] = useState(null)

  // const handleSelect=(e)=>{
  //   console.log(e);
  //   setProducts(e)
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const factory = {fId, currentDate, rawMaterial, noRawMaterial}

    const response = await fetch('/api/factory', {
      method: 'POST',
      body: JSON.stringify(factory),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setFId('')
      setCurrentDate('')
      setRawMaterial('')
      setNoRawMaterial('')
      setError(null)
      console.log('New raw material data updated succefully.', json)
    }
  }

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Factory Management</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Factory</li>
            <li className="breadcrumb-item active">Raw Materials</li>
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
                <h5 className="card-title">Raw Materials Data Form</h5>

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
                      <label class="col-12 col-form-label" >Select a raw material:</label>
                      
                      <div class="col-sm-10">
                        <select class="form-select" aria-label="Default select example">
                          <option value="null">Select a material</option>
                          <option value="1">material 1</option>
                          <option value="2">material 2</option>
                          <option value="3">material 3</option>
                          <option value="4">material 4</option>
                        </select>                         
                      </div>
                  </div>

                  {/* <div className="col-12">
                    <label for="rawMaterial" className="form-label">Raw Material:</label>
                    <input type="text" className="form-control" id="product"
                      onChange={(e) => setRawMaterial(e.target.value)} value={rawMaterial} />
                  </div> */}

                  <br />

                  <div className="col-12">
                    <label for="noRawMaterial" className="form-label">Number of of Materials used:</label>
                    <input type="text" className="form-control" id="noRawMaterial"
                      onChange={(e) => setNoRawMaterial(e.target.value)} value={noRawMaterial} />
                  </div>

                  <div className="col-12">
                    <label for="inputCurrentDate" className="form-label">Date:</label>
                    <input type="Date" className="form-control" id="inputCurrentDate"
                      onChange={(e) => setCurrentDate(e.target.value)} value={currentDate} />
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

export default RawInsertForm 