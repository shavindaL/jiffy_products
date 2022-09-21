import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function FactoryDetails() {
  const { fId } = useParams()
  //var factory = null
  const [factory, setFactory] = useState(
    {
      fId: "",
      fName: "",
      fLocation: "",
      NumOfMachines: "",
      NumOfEmployees: "",
      NumOfVehicles: "",
      createdDate: "",
      __v: 0,
      _id: ""
    })
  useEffect(() => {
    const fetchFactory = async () => {
      // fetch(`/api/users/${id}`)
      // .then(res => res.json)
      // .then(data => setFactory(data))
      const response = await fetch(`/api/factory/${id}`)
      const json = await response.json()
      //console.log(json["name"])
      if (response.ok) {
        //console.log("json "+json["name"])
        setFactory(
          {
            fId: `${json["fId"]}`,
            fName: `${json["fName"]}`,
            fLocation: `${json["fLocation"]}`,
            NumOfMachines: `${json["NumOfMachines"]}`,
            NumOfEmployees: `${json["NumOfEmployees"]}`,
            NumOfVehicles: `${json["NumOfVehicles"]}`,
            __v: 0,
            _id: `${json["_id"]}`
          })
      } else{
        console.log("not ok")
      }
       
    }

    fetchFactory()
    
  }, [setFactory])

  //console.log("Factory bn "+factory)

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Factory</li>
            <li className="breadcrumb-item active">Details</li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Page Title --> */}
      
        <section className="section profile">
          <div className="row">
            <div className="col-xl-8">

              <div className="card">
                <div className="card-body pt-3">
                  {/* <!-- Bordered Tabs --> */}
                  <ul className="nav nav-tabs nav-tabs-bordered">

                    <li className="nav-item">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#factory-overview">Overview</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#factory-edit">Edit Factory</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#factory-settings">Settings</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#factory-change-password">Change Password</button>
                    </li>

                  </ul>
                  <div className="tab-content pt-2">

                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                      <h5 className="card-title">About</h5>
                      <p className="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>

                      <h5 className="card-title">Factory Details</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">Factory ID</div>
                        <div className="col-lg-9 col-md-8">{factory["fId"]}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">Factory Name</div>
                        <div className="col-lg-9 col-md-8">{factory["fName"]}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Factory Location</div>
                        <div className="col-lg-9 col-md-8">{factory["fLocation"]}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Factory Location</div>
                        <div className="col-lg-9 col-md-8">{factory["fLocation"]}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Factory Location</div>
                        <div className="col-lg-9 col-md-8">{factory["fLocation"]}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Factory Location</div>
                        <div className="col-lg-9 col-md-8">{factory["fLocation"]}</div>
                      </div>

                    </div>

                    <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                      {/* <!-- Profile Edit Form --> */}
                      <form>

                        <div className="row mb-3">
                          <label for="fId" className="col-md-4 col-lg-3 col-form-label">Factory ID</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="fId" type="text" className="form-control" id="fId" value="Kevin Anderson" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="fName" className="col-md-4 col-lg-3 col-form-label">Factory Name</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="fName" type="text" className="form-control" id="fName" value="Kevin Anderson" />
                          </div>
                        </div>
                      
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Save Changes</button>
                        </div>
                      </form>
                      {/* <!-- End Profile Edit Form --> */}

                    </div>

                    <div className="tab-pane fade pt-3" id="profile-settings">

                      {/* <!-- Settings Form --> */}
                      <form>

                        <div className="row mb-3">
                          <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                          <div className="col-md-8 col-lg-9">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="changesMade" checked />
                              <label className="form-check-label" for="changesMade">
                                Changes made to your account
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="newProducts" checked />
                              <label className="form-check-label" for="newProducts">
                                Information on new products and services
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="proOffers" />
                              <label className="form-check-label" for="proOffers">
                                Marketing and promo offers
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="securityNotify" checked disabled />
                              <label className="form-check-label" for="securityNotify">
                                Security alerts
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Save Changes</button>
                        </div>
                      </form>
                      {/* <!-- End settings Form --> */}

                    </div>

                  </div>
                  {/* <!-- End Bordered Tabs --> */}

                </div>
              </div>

            </div>

          </div>
        </section>
      


    </main>
  );
}

export default FactoryProfile;