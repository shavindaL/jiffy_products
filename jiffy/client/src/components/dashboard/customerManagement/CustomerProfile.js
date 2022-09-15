import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CustomerProfile() {
  const { id } = useParams()
  //var customer = null
  const [customer, setCustomer] = useState(
    {
      email: "",
      lastLogin: "",
      name: "hi",
      password: "",
      __v: 0,
      _id: ""
    })
  useEffect(() => {
    const fetchCustomer = async () => {
      // fetch(`/api/users/${id}`)
      // .then(res => res.json)
      // .then(data => setCustomer(data))
      const response = await fetch(`/api/users/${id}`)
      const json = await response.json()
      //console.log(json["name"])
      if (response.ok) {
        //console.log("json "+json["name"])
        setCustomer(
          {
            email: `${json["email"]}`,
            lastLogin: `${json["lastLogin"]}`,
            name: `${json["name"]}`,
            password: `${json["password"]}`,
            __v: 0,
            _id: `${json["_id"]}`
          })
      } else{
        console.log("not ok")
      }
       
    }

    fetchCustomer()
    
  }, [setCustomer])

  //console.log("Customer bn "+customer)

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Users</li>
            <li className="breadcrumb-item active">Profile</li>
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
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-settings">Settings</button>
                    </li>

                    <li className="nav-item">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
                    </li>

                  </ul>
                  <div className="tab-content pt-2">

                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                      <h5 className="card-title">About</h5>
                      <p className="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>

                      <h5 className="card-title">Profile Details</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label ">Full Name</div>
                        <div className="col-lg-9 col-md-8">{customer["name"]}</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Company</div>
                        <div className="col-lg-9 col-md-8">Lueilwitz, Wisoky and Leuschke</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Job</div>
                        <div className="col-lg-9 col-md-8">Web Designer</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Country</div>
                        <div className="col-lg-9 col-md-8">USA</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Address</div>
                        <div className="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Phone</div>
                        <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Email</div>
                        <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
                      </div>

                    </div>

                    <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                      {/* <!-- Profile Edit Form --> */}
                      <form>
                        <div className="row mb-3">
                          <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                          <div className="col-md-8 col-lg-9">
                            <img src="assets/img/profile-img.jpg" alt="Profile" />
                            <div className="pt-2">
                              <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload"></i></a>
                              <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="fullName" type="text" className="form-control" id="fullName" value="Kevin Anderson" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                          <div className="col-md-8 col-lg-9">
                            <textarea name="about" className="form-control" id="about" style={{ height: '100px' }}>Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" id="company" value="Lueilwitz, Wisoky and Leuschke" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="job" type="text" className="form-control" id="Job" value="Web Designer" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="country" type="text" className="form-control" id="Country" value="USA" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="address" type="text" className="form-control" id="Address" value="A108 Adam Street, New York, NY 535022" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="phone" type="text" className="form-control" id="Phone" value="(436) 486-3538 x29071" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="email" type="email" className="form-control" id="Email" value="k.anderson@example.com" />
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

                    <div className="tab-pane fade pt-3" id="profile-change-password">
                      {/* <!-- Change Password Form --> */}
                      <form>

                        <div className="row mb-3">
                          <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="password" type="password" className="form-control" id="currentPassword" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="newpassword" type="password" className="form-control" id="newPassword" />
                          </div>
                        </div>

                        <div className="row mb-3">
                          <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                          <div className="col-md-8 col-lg-9">
                            <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">Change Password</button>
                        </div>
                      </form>
                      {/* <!-- End Change Password Form --> */}

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

export default CustomerProfile;