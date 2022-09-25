import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

function CustomerAccount() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState(null)
    
    const [user, setUser] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("user");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

    console.log("User log "+ user)
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
            const response = await fetch(`/api/users/${user.id}`)
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

        const response = await fetch('http://localhost:5000/api/users/' + user.id, {
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
    //var customer = null



    return (
        <div class="liton__wishlist-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        {/* <!-- PRODUCT TAB AREA START --> */}
                        <div class="ltn__product-tab-area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="ltn__tab-menu-list mb-50">
                                            <div class="nav">
                                                <a class="active show" data-toggle="tab" href="#liton_tab_1_1">Dashboard <i class="fas fa-home"></i></a>
                                                <a data-toggle="tab" href="#liton_tab_1_3">Orders <i class="fas fa-file-alt"></i></a>
                                                <a data-toggle="tab" href="#liton_tab_1_4">Payment Method <i class="fas fa-map-marker-alt"></i></a>
                                                <a data-toggle="tab" href="#liton_tab_1_5">Account Details <i class="fas fa-user"></i></a>
                                                <a href="login.html">Logout <i class="fas fa-sign-out-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="tab-content">
                                            <div class="tab-pane fade active show" id="liton_tab_1_1">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <p>Hello <strong>{name}</strong></p>
                                                    <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span>, and <span>edit your account details</span>.</p>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_3">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <div class="table-responsive">
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>Order ID</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Carsafe - Car Service PSD Template</td>
                                                                    <td>Nov 22, 2020</td>
                                                                    <td>Pendin</td>
                                                                    <td><a href="#"><i class="far fa-arrow-to-bottom mr-1"></i> View Order</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Carsafe - Car Service HTML Template</td>
                                                                    <td>Nov 10, 2020</td>
                                                                    <td>Completed</td>
                                                                    <td><a href="#"><i class="far fa-arrow-to-bottom mr-1"></i> View Order</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_4">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <p>The following addresses will be used on the checkout page by default.</p>
                                                    <div class="row">
                                                        <div class="col-md-6 col-12 learts-mb-30">
                                                            <h4>Billing Address <small><a href="#">edit</a></small></h4>
                                                            <address>
                                                                <p><strong>Alex Tuntuni</strong></p>
                                                                <p>1355 Market St, Suite 900 <br />
                                                                    San Francisco, CA 94103</p>
                                                                <p>Mobile: (123) 456-7890</p>
                                                            </address>
                                                        </div>
                                                        <div class="col-md-6 col-12 learts-mb-30">
                                                            <h4>Shipping Address <small><a href="#">edit</a></small></h4>
                                                            <address>
                                                                <p><strong>Alex Tuntuni</strong></p>
                                                                <p>1355 Market St, Suite 900 <br />
                                                                    San Francisco, CA 94103</p>
                                                                <p>Mobile: (123) 456-7890</p>
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="liton_tab_1_5">
                                                <div class="ltn__myaccount-tab-content-inner">
                                                    <p>The following addresses will be used on the checkout page by default.</p>
                                                    <div class="ltn__form-box">
                                                        <form onSubmit={handleUpdateSubmit}>
                                                            <div class="row mb-50">
                                                                <div class="col-md-6">
                                                                    <label>Name:</label>
                                                                    <input type="text" name="ltn__name"
                                                                        onChange={(e) => setName(e.target.value)} value={name} />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label>Email:</label>
                                                                    <input type="email" name="ltn__email"
                                                                        onChange={(e) => setEmail(e.target.value)} value={email} />
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <label>Phone:</label>
                                                                    <input type="text" name="ltn__phone"
                                                                        onChange={(e) => setPhone(e.target.value)} value={phone} />
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <label>Address:</label>
                                                                    <input type="text" name="ltn__email"
                                                                        onChange={(e) => setAddress(e.target.value)} value={address} />
                                                                </div>
                                                            </div>
                                                            {/* <fieldset>
                                                                <legend>Password change</legend>
                                                                <div class="row">
                                                                    <div class="col-md-12">
                                                                        <label>Current password (leave blank to leave unchanged):</label>
                                                                        <input type="password" name="ltn__name" />
                                                                        <label>New password (leave blank to leave unchanged):</label>
                                                                        <input type="password" name="ltn__lastname" />
                                                                        <label>Confirm new password:</label>
                                                                        <input type="password" name="ltn__lastname" />
                                                                    </div>
                                                                </div>
                                                            </fieldset> */}
                                                            <div class="btn-wrapper">
                                                                <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- PRODUCT TAB AREA END --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CustomerAccount;