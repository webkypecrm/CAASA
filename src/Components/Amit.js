import React from 'react'

const Amit = () => {
  return (
    <>
    <div className="sidebar sidebar-right sidebar-animate">
        <div className="sidebar-icon">
          <a href="#" className="text-end float-end text-dark fs-20" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right"><i className="fe fe-x" /></a>
        </div>
        <div className="sidebar-body">
          <h5>Todo</h5>
          <div className="d-flex p-3">
            <label className="ckbox"><input defaultChecked type="checkbox" /><span>Hangout With friends</span></label>
            <span className="ms-auto">
              <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Edit" />
              <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Delete" />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox"><input type="checkbox" /><span>Prepare for presentation</span></label>
            <span className="ms-auto">
              <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Edit" />
              <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Delete" />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox"><input type="checkbox" /><span>Prepare for presentation</span></label>
            <span className="ms-auto">
              <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Edit" />
              <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Delete" />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox"><input defaultChecked type="checkbox" /><span>System Updated</span></label>
            <span className="ms-auto">
              <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Edit" />
              <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Delete" />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox"><input type="checkbox" /><span>Do something more</span></label>
            <span className="ms-auto">
              <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Edit" />
              <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Delete" />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox"><input type="checkbox" /><span>System Updated</span></label>
            <span className="ms-auto">
              <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Edit" />
              <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Delete" />
            </span>
          </div>
          <div className="d-flex p-3 border-top">
            <label className="ckbox"><input type="checkbox" /><span>Find an Idea</span></label>
            <span className="ms-auto">
              <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Edit" />
              <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Delete" />
            </span>
          </div>
          <div className="d-flex p-3 border-top mb-0">
            <label className="ckbox"><input type="checkbox" /><span>Project review</span></label>
            <span className="ms-auto">
              <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Edit" />
              <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title data-bs-placement="top" data-bs-original-title="Delete" />
            </span>
          </div>
          <h5>Overview</h5>
          <div className="p-4">
            <div className="main-traffic-detail-item">
              <div>
                <span>Founder &amp; CEO</span> <span>24</span>
              </div>
              <div className="progress">
                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={20} className="progress-bar progress-bar-xs wd-20p" role="progressbar" />
              </div>{/* progress */}
            </div>
            <div className="main-traffic-detail-item">
              <div>
                <span>UX Designer</span> <span>1</span>
              </div>
              <div className="progress">
                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={15} className="progress-bar progress-bar-xs bg-secondary wd-15p" role="progressbar" />
              </div>{/* progress */}
            </div>
            <div className="main-traffic-detail-item">
              <div>
                <span>Recruitment</span> <span>87</span>
              </div>
              <div className="progress">
                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={45} className="progress-bar progress-bar-xs bg-success wd-45p" role="progressbar" />
              </div>{/* progress */}
            </div>
            <div className="main-traffic-detail-item">
              <div>
                <span>Software Engineer</span> <span>32</span>
              </div>
              <div className="progress">
                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar progress-bar-xs bg-info wd-25p" role="progressbar" />
              </div>{/* progress */}
            </div>
            <div className="main-traffic-detail-item">
              <div>
                <span>Project Manager</span> <span>32</span>
              </div>
              <div className="progress">
                <div aria-valuemax={100} aria-valuemin={0} aria-valuenow={25} className="progress-bar progress-bar-xs bg-danger wd-25p" role="progressbar" />
              </div>{/* progress */}
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar */}
    </>
  )
}

export default Amit