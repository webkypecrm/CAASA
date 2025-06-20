import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';

export default function OwnershipAdd() {
    return (

        <div className="page">
            <TopHeader />
            <Prince />

            <div className="container">
                <h1>Add Ownership</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="ownershipName" className="form-label">Ownership Name</label>
                        <input type="text" className="form-control" id="ownershipName" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ownershipType" className="form-label">Ownership Type</label>
                        <input type="text" className="form-control" id="ownershipType" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Ownership</button>
                </form>
            </div>
        </div>
    )
}