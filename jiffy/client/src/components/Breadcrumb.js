import React from 'react';

var path = ''
if(window.location.pathname=='/account'){
    path = 'Account'
}

function Breadcrumb() {
    return(
        <div className="ltn__breadcrumb-area ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image plr--9---">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                        <div className="section-title-area ltn__section-title-2">
                            <br/><br/><br/><br/>
                            <h1 className="section-title white-color">{path}</h1>
                        </div>
                        <div className="ltn__breadcrumb-list">
                            <ul>
                                <li><a href="http://localhost:3000/">Home</a></li>
                                <li>{path}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Breadcrumb;