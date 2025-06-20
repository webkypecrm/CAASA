import React, { useState, useEffect } from "react";
import '../assets/plugins/fullcalendar/fullcalendar.css'
import '../assets/plugins/select2/css/select2.min.css'
import '../assets/css/style.css'
import TopHeader from '../Components/TopHeader';
import Prince from '../Components/Prince';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);


const Calendars = () => {

    const [events, setEvents] = useState([
        {
            title: "Conference",
            description: "Team meeting",
            location: "Conference Room 1",
            participants: "John, Jane",
            start: new Date(2024, 11, 24, 12, 0),
            end
                : new Date(2024, 11, 25, 3, 0),
        },
        {
            title: "Party",
            description: "Team meeting",
            location: "Conference Room 1",
            participants: "John, Jane",
            start: new Date(2024, 10, 20, 18, 0),
            end
                : new Date(2024, 10, 20, 20, 0),
        },
    ]);

    const [showModal, setShowModal] = useState(false);

    const [newEvent, setNewEvent] = useState({
        start: null,
        end: null,
        title: "",
        description: "",
        location: "",
        participants: "",
    });


    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showModal]);

    // Handle date slot selection
    const handleSelectSlot = ({ start, end }) => {
        setNewEvent({ start, end, title: "", description: "", location: "", participants: "" });
        setShowModal(true);
    };

    // Handle title input submission
    const handleAddEvent = () => {
        if (newEvent.title.trim() !== "") {
            setEvents((prevEvents) => [...prevEvents, newEvent]);
            setShowModal(false);
        } else {
            alert("Please enter a valid title!");
        }
    };



    return (
        <>

            <div className="page">
                <TopHeader />

                <div style={{ position: "relative", zIndex: 10 }}>
                    <Prince />
                </div>


                <div className="main-content pt-0">
                    <div className="main-container container-fluid">
                        <div className="inner-body">
                            {/* Page Header */}
                            <div className="page-header">
                                <div>
                                    <h2 className="main-content-title tx-24 mg-b-5">Calendar</h2>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Apps</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Calendar
                                        </li>
                                    </ol>
                                </div>
                                <div className="d-flex">
                                    <div className="justify-content-center">
                                        <button
                                            type="button"
                                            className="btn btn-white btn-icon-text my-2 me-2"
                                        >
                                            <i className="fe fe-download me-2" /> Import
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-white btn-icon-text my-2 me-2"
                                        >
                                            <i className="fe fe-filter me-2" /> Filter
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary my-2 btn-icon-text"
                                        >
                                            <i className="fe fe-download-cloud me-2" /> Download Report
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* End Page Header */}
                            {/* Row */}
                            <div className="row row-sm">
                                <div className="col-sm-12 col-md-12">
                                    <div className="card custom-card">
                                        <div className="card-body">
                                            <div className="row" id="wrap">
                                                <div className="col-xl-2" id="external-events">
                                                    <h4>Draggable Events</h4>
                                                    <div id="external-events-list">
                                                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                                            <div className="fc-event-main">My Event 1</div>
                                                        </div>
                                                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                                            <div className="fc-event-main">My Event 2</div>
                                                        </div>
                                                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                                            <div className="fc-event-main">My Event 3</div>
                                                        </div>
                                                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                                            <div className="fc-event-main">My Event 4</div>
                                                        </div>
                                                        <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                                            <div className="fc-event-main">My Event 5</div>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        <input type="checkbox" id="drop-remove" />
                                                        <label htmlFor="drop-remove">remove after drop</label>
                                                    </p>
                                                </div>
                                                <div className="col-xl-10" style={{ position: "relative" }}>
                                                    {/* Render the Calendar */}
                                                    <Calendar
                                                        localizer={localizer}
                                                        events={events.map((event) => ({
                                                            title: event.title,
                                                            start: event.start,
                                                            end: event.end,
                                                        }))}
                                                        startAccessor="start"
                                                        endAccessor="end"
                                                        selectable
                                                        onSelectSlot={handleSelectSlot}
                                                        style={{ height: 500, position: "relative", zIndex: showModal ? 1 : "auto" }}
                                                    />

                                                    {/* Modal */}
                                                    {showModal && (
                                                        <div
                                                            style={{
                                                                position: "fixed",
                                                                top: 0,
                                                                left: 0,
                                                                width: "100vw",
                                                                height: "100vh",
                                                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                zIndex: 1000,
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    backgroundColor: "white",
                                                                    padding: "20px",
                                                                    borderRadius: "8px",
                                                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                                                    width: "400px",
                                                                    textAlign: "center",
                                                                }}
                                                            >
                                                                <h3>Add Event</h3>
                                                                <input
                                                                    type="text"
                                                                    value={newEvent.title}
                                                                    placeholder="Event Title"
                                                                    onChange={(e) =>
                                                                        setNewEvent((prev) => ({ ...prev, title: e.target.value }))
                                                                    }
                                                                    style={{
                                                                        padding: "8px",
                                                                        width: "100%",
                                                                        marginBottom: "10px",
                                                                        border: "1px solid #ccc",
                                                                        borderRadius: "4px",

                                                                    }}
                                                                />
                                                                <textarea
                                                                    value={newEvent.description}
                                                                    placeholder="Event Description"
                                                                    onChange={(e) =>
                                                                        setNewEvent((prev) => ({ ...prev, description: e.target.value }))
                                                                    }
                                                                    style={{
                                                                        padding: "8px",
                                                                        width: "100%",
                                                                        height: "60px",
                                                                        marginBottom: "10px",
                                                                        border: "1px solid #ccc",
                                                                        borderRadius: "4px",
                                                                    }}
                                                                />
                                                                <input
                                                                    type="text"
                                                                    value={newEvent.location}
                                                                    placeholder="Location"
                                                                    onChange={(e) =>
                                                                        setNewEvent((prev) => ({ ...prev, location: e.target.value }))
                                                                    }
                                                                    style={{
                                                                        padding: "8px",
                                                                        width: "100%",
                                                                        marginBottom: "10px",
                                                                        border: "1px solid #ccc",
                                                                        borderRadius: "4px",
                                                                    }}
                                                                />
                                                                <input
                                                                    type="text"
                                                                    value={newEvent.participants}
                                                                    placeholder="Participants"
                                                                    onChange={(e) =>
                                                                        setNewEvent((prev) => ({
                                                                            ...prev,
                                                                            participants: e.target.value,
                                                                        }))
                                                                    }
                                                                    style={{
                                                                        padding: "8px",
                                                                        width: "100%",
                                                                        marginBottom: "10px",
                                                                        border: "1px solid #ccc",
                                                                        borderRadius: "4px",
                                                                    }}
                                                                />
                                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                                    <button
                                                                        onClick={() => setShowModal(false)}
                                                                        style={{
                                                                            padding: "8px 16px",
                                                                            backgroundColor: "#dc3545",
                                                                            color: "white",
                                                                            border: "none",
                                                                            borderRadius: "4px",
                                                                            cursor: "pointer",
                                                                        }}
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                    <button
                                                                        onClick={handleAddEvent}
                                                                        style={{
                                                                            padding: "8px 16px",
                                                                            backgroundColor: "#28a745",
                                                                            color: "white",
                                                                            border: "none",
                                                                            borderRadius: "4px",
                                                                            cursor: "pointer",
                                                                        }}
                                                                    >
                                                                        Add Event
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Row */}
                        </div>
                    </div>
                </div>
                {/* End Main Content*/}
                {/* Main Footer*/}
                <div className="main-footer text-center">
                    <div className="container">
                        <div className="row row-sm">
                            <div className="col-md-12">
                                <span>
                                    Copyright © 2024 <a href="javascript:void(0)">Webkype</a>. Designed
                                    by <a href="http://webkype.com/">Webkype.com</a> All rights
                                    reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Calendars