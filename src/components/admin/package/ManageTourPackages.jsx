import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TourPackageService from "../../../services/TourPackageService";
import DestinationService from "../../../services/DestinationService";
import TourCategoryService from "../../../services/TourCategoryService";
import { toast } from "react-toastify";

export default function ManageTourPackages() {

    const [packages, setPackages] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [categories, setCategories] = useState([]);

    async function getData() {
        try {
            const packageData = await TourPackageService.all();
            const destinationData = await DestinationService.all();
            const categoryData = await TourCategoryService.all();

            setPackages(packageData);
            setDestinations(destinationData);
            setCategories(categoryData);

        } catch (err) {
            console.log("Error: ", err);
            toast.error("Error loading tour packages");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    function getDestinationName(id) {
        let destination = destinations.find(
            (item) => item.id === id
        );

        return destination ? destination.name : "Unknown Destination";
    }

    function getCategoryName(id) {
        let category = categories.find(
            (item) => item.id === id
        );

        return category ? category.name : "Unknown Category";
    }

    async function deletePackage(id) {
        try {
            await TourPackageService.deletePackage(id);

            toast.success("Tour Package Deleted");

            getData();

        } catch (err) {
            console.log("Error: ", err);
            toast.error("Error deleting tour package");
        }
    }

    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">
                    Tour Packages
                </h1>
            </div>

            <div className="container">

                <div className="d-flex justify-content-between mt-5">

                    <h1>Tour Packages List</h1>

                    <Link to="/admin/packages/add">
                        <button className="btn btn-primary">
                            <i className="bi bi-plus"></i>
                            Add Package
                        </button>
                    </Link>

                </div>

                <div className="row mt-4">

                    {packages.map((tourPackage) => (

                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={tourPackage.id}
                        >

                            <div className="card h-100">

                                {tourPackage.images &&
                                    tourPackage.images.length > 0 && (

                                        <img
                                            src={tourPackage.images[0]}
                                            className="card-img-top"
                                            alt={tourPackage.packageName}
                                            style={{
                                                height: "220px",
                                                objectFit: "cover"
                                            }}
                                        />

                                    )}

                                <div className="card-body">

                                    <h5 className="card-title">
                                        {tourPackage.packageName}
                                    </h5>

                                    <p>
                                        <strong>Destination:</strong>{" "}
                                        {getDestinationName(
                                            tourPackage.destinationId
                                        )}
                                    </p>

                                    <p>
                                        <strong>Category:</strong>{" "}
                                        {getCategoryName(
                                            tourPackage.categoryId
                                        )}
                                    </p>

                                    <p>
                                        {tourPackage.description}
                                    </p>

                                    <p>
                                        <strong>Duration:</strong>{" "}
                                        {tourPackage.duration}
                                    </p>

                                    <p>
                                        <strong>Price:</strong> ₹
                                        {tourPackage.price}
                                    </p>

                                    <p>
                                        <strong>Maximum People:</strong>{" "}
                                        {tourPackage.maxPeople}
                                    </p>

                                    <div className="mt-3">

                                        <Link
                                            to={`/admin/package/edit/${tourPackage.id}`}
                                        >
                                            <button className="btn btn-primary me-2">
                                                Edit
                                            </button>
                                        </Link>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                deletePackage(
                                                    tourPackage.id
                                                )
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