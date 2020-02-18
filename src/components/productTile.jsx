import React from "react";

export default function productTile(addCount) {
    return (
        <div className="col-md-4 col-lg-3 col-sm-12">
            <div className="card mb-3" style={{ "maxWidth": "540px", "color": "red" }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://via.placeholder.com/150" className="card-img" width="100%" height="100%" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" id="#first-title">Product title</h5>
                            <div>
                                <button
                                    className="btn btn-primary add-btn"
                                    onClick={() => {
                                        addCount()
                                    }}
                                >
                                    add
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}