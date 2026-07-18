import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TourGuideService from "../../../services/TourGuideService";
import { toast } from "react-toastify";

export default function ManageTourGuides() {

    const [guides, setGuides] = useState([]);

    async function getGuides() {
        try {
            let data = await TourGuideService.all();
            setGuides(data);
        } catch (err) {
            console.log("Error: ", err);
            toast.error("Error loading tour guides");
        }
    }

    useEffect(() => {
        getGuides();
    }, []);

    async function deleteGuide(id) {
        try {
            await TourGuideService.deleteGuide(id);

            toast.success("Tour Guide Deleted");

            getGuides();

        } catch (err) {
            console.log("Error: ", err);
            toast.error("Error deleting tour guide");
        }
    }

    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">
                    Tour Guides
                </h1>
            </div>

            <div className="container">

                <div className="d-flex justify-content-between mt-5">

                    <h1>Tour Guides List</h1>

                    <Link to="/admin/guide/add">
                        <button className="btn btn-primary">
                            <i className="bi bi-plus"></i>
                            Add Tour Guide
                        </button>
                    </Link>

                </div>

                <div className="row mt-4">

                    {guides.map((guide) => (

                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={guide.id}
                        >

                            <div className="card h-100">

                                {guide.profileImage && (
                                    <img
                                        src={guide.profileImage}
                                        className="card-img-top"
                                        alt={guide.name}
                                        style={{
                                            height: "250px",
                                            objectFit: "cover"
                                        }}
                                    />
                                )}

                                <div className="card-body">

                                    <h5 className="card-title">
                                        {guide.name}
                                    </h5>

                                    <p>
                                        <strong>Phone:</strong>{" "}
                                        {guide.phone}
                                    </p>

                                    <p>
                                        <strong>Email:</strong>{" "}
                                        {guide.email}
                                    </p>

                                    <p>
                                        <strong>Languages:</strong>{" "}
                                        {guide.languages?.join(", ")}
                                    </p>

                                    <p>
                                        <strong>Experience:</strong>{" "}
                                        {guide.experience}
                                    </p>

                                    <p>
                                        <strong>Guide Fee:</strong> ₹
                                        {guide.guideFee}
                                    </p>

                                    <p>
                                        <strong>Availability:</strong>{" "}
                                        {guide.availability
                                            ? "Available"
                                            : "Not Available"}
                                    </p>

                                    <div className="mt-3">

                                        <Link
                                            to={`/admin/guide/edit/${guide.id}`}
                                        >
                                            <button className="btn btn-primary me-2">
                                                Edit
                                            </button>
                                        </Link>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                deleteGuide(guide.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}