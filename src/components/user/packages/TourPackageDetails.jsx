import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import TourPackageService from "../../../services/TourPackageService";
import DestinationService from "../../../services/DestinationService";
import TourCategoryService from "../../../services/TourCategoryService";

export default function TourPackageDetails() {

    const [tourPackage, setTourPackage] = useState(null);
    const [destination, setDestination] = useState(null);
    const [category, setCategory] = useState(null);

    const params = useParams();

    async function getPackageDetails() {

        const packageData =
            await TourPackageService.single(params.id);

        if (packageData) {

            setTourPackage(packageData);

            const destinationData =
                await DestinationService.single(
                    packageData.destinationId
                );

            const categoryData =
                await TourCategoryService.single(
                    packageData.categoryId
                );

            setDestination(destinationData);
            setCategory(categoryData);
        }
    }

    useEffect(() => {
        getPackageDetails();
    }, []);

    if (!tourPackage) {
        return (
            <h3 className="text-center mt-5">
                Loading...
            </h3>
        );
    }

    return (
        <>
            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    {tourPackage.packageName}
                </h1>

            </div>

            <div className="container py-5">

                <div className="row">

                    <div className="col-lg-6">

                        {tourPackage.images &&
                            tourPackage.images.length > 0 && (

                            <img
                                src={tourPackage.images[0]}
                                className="img-fluid rounded"
                                alt={tourPackage.packageName}
                            />

                        )}

                    </div>

                    <div className="col-lg-6">

                        <h2>
                            {tourPackage.packageName}
                        </h2>

                        {destination && (
                            <p>
                                <strong>
                                    Destination:
                                </strong>{" "}
                                {destination.name}
                            </p>
                        )}

                        {category && (
                            <p>
                                <strong>
                                    Category:
                                </strong>{" "}
                                {category.name}
                            </p>
                        )}

                        <p>
                            {tourPackage.description}
                        </p>

                        <p>
                            <strong>
                                Duration:
                            </strong>{" "}
                            {tourPackage.duration}
                        </p>

                        <p>
                            <strong>
                                Price:
                            </strong>{" "}
                            ₹{tourPackage.price}
                        </p>

                        <p>
                            <strong>
                                Maximum People:
                            </strong>{" "}
                            {tourPackage.maxPeople}
                        </p>

                        <Link
                            to={`/booking/${tourPackage.id}`}
                        >
                            <button className="btn btn-primary">
                                Book Now
                            </button>
                        </Link>

                    </div>

                </div>

                <div className="mt-5">

                    <h3>
                        Itinerary
                    </h3>

                    <p>
                        {tourPackage.itinerary}
                    </p>

                </div>

            </div>
        </>
    );
}