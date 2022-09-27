import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function CustomerProfile() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(null)

  const { id } = useParams()
  //var customer = null
  const [customer, setCustomer] = useState(
    {
      email: "",
      lastLogin: "",
      name: "",
      password: "",
      phone: "",
      address: "",
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
            phone: `${json["phone"]}`,
            address: `${json["address"]}`,
            password: `${json["password"]}`,
            __v: 0,
            _id: `${json["_id"]}`
          })
          setName(json["name"])
          setEmail(json["email"])
          setAddress(json["address"])
          setPhone(json["phone"])
      } else {
        console.log("not ok")
      }

    }

    fetchCustomer()

  }, [setCustomer])

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:5000/api/users/' + id, {
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        address: address,
        phone: phone,
        email: email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      console.log(json.error)
    }

    if (response.ok) {
      console.log('User updated', json)
      window.location.reload();
    }
  }

  const handleDeleteSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:5000/api/users/' + id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      console.log(json.error)
    }

    if (response.ok) {
      console.log('User deleted', json)
      navigate("/customers")
    }
  }

  //console.log("Customer bn "+customer)

  return (
    <main id="main" className="main">

      <div className="pagetitle">
        <h1>Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to ={{pathname:`/dashboard/`}}>Home</Link></li>
            <li className="breadcrumb-item"><Link to ={{pathname:`/customers/`}}>Customers</Link></li>
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
                    <h5 className="card-title">Profile Details</h5>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label ">Full Name</div>
                      <div className="col-lg-9 col-md-8">{customer["name"]}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Address</div>
                      <div className="col-lg-9 col-md-8">{customer["address"]}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Phone</div>
                      <div className="col-lg-9 col-md-8">{customer["phone"]}</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Email</div>
                      <div className="col-lg-9 col-md-8">{customer["email"]}</div>
                    </div>

                  </div>

                  <div className="tab-pane fade profile-edit pt-3" id="profile-edit">

                    {/* <!-- Profile Edit Form --> */}
                    <form onSubmit={handleUpdateSubmit}>
                      {/* <div className="row mb-3">
                          <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                          <div className="col-md-8 col-lg-9">
                            <img src="assets/img/profile-img.jpg" alt="Profile" />
                            <div className="pt-2">
                              <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image"><i className="bi bi-upload"></i></a>
                              <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a>
                            </div>
                          </div>
                        </div> */}
                      {error &&
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                          {error}
                          <button type="button" className="btn" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      }

                      <div className="row mb-3">
                        <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="fullName" type="text" className="form-control" id="fullName"
                          onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="address" type="text" className="form-control" id="Address" 
                          onChange={(e) => setAddress(e.target.value)} value={address} />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="phone" type="text" className="form-control" id="Phone" 
                          onChange={(e) => setPhone(e.target.value)} value={phone} />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="email" type="email" className="form-control" id="Email" 
                           onChange={(e) => setEmail(e.target.value)} value={email} />
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
                    <form onSubmit={handleDeleteSubmit}>

                        <div className="row mb-3">
                          <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Delete Account</label>
                          <div className="col-md-8 col-lg-9">
                          <button type="submit" className="btn btn-primary">Delete Now</button>
                          </div>
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