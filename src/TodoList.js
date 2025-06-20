import React from 'react';

function TodoList() {
  return (
    <div className="sidebar sidebar-right sidebar-animate">
      <div className="sidebar-icon">
        <a href="#" className="text-end float-end text-dark fs-20" data-bs-toggle="sidebar-right" data-bs-target=".sidebar-right">
          <i className="fe fe-x"></i>
        </a>
      </div>
      <div className="sidebar-body">
        <h5>Todo</h5>
        <div className="d-flex p-3">
          <label className="ckbox">
            <input checked type="checkbox" />
            <span>Hangout With friends</span>
          </label>
          <span className="ms-auto">
            <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
            <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
          </span>
        </div>
        {/* ... (rest of the HTML code) */}
      </div>
    </div>
  );
}

export default TodoList;
