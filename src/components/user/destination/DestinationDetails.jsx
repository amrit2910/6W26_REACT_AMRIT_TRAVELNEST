import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DestinationService from "../../../services/DestinationService";
import TourPackageService from "../../../services/TourPackageService";

export default function DestinationDetails() {

    const [destination, setDestination] = useState(null);
    const [packages, setPackages] = useState([]);

    const params = useParams();

    async function getDetails() {

        const destinationData =
            await DestinationService.single(params.id);

        const packageData =
            await TourPackageService.all();

        setDestination(destinationData);

        const relatedPackages = packageData.filter(
            (tourPackage) =>
                tourPackage.destinationId === params.id
        );

        setPackages(relatedPackages);
    }

    useEffect(() => {
        getDetails();
    }, []);

    if (!destination) {
        return <h3 className="text-center mt-5">Loading...</h3>;
    }

    return (
        <>
            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    {destination.name}
                </h1>

            </div>

            <div className="container py-5">

                <div className="row">

                    <div className="col-lg-6">

                        {destination.images &&
                            destination.images.length > 0 && (

                            <img
                                src={destination.images[0]}
                                className="img-fluid rounded"
                                alt={destination.name}
                            />

                        )}

                    </div>

                    <div className="col-lg-6">

                        <h2>{destination.name}</h2>

                        <p>
                            <strong>State:</strong>{" "}
                            {destination.state}
                        </p>

                        <p>
                            <strong>Country:</strong>{" "}
                            {destination.country}
                        </p>

                        <p>
                            <strong>Best Season:</strong>{" "}
                            {destination.bestSeason}
                        </p>

                        <p>
                            {destination.description}
                        </p>

                    </div>

                </div>

                <hr className="my-5" />

                <h2 className="mb-4">
                    Tour Packages for {destination.name}
                </h2>

                <div className="row">

                    {packages.length === 0 ? (

                        <p>No tour packages available yet.</p>

                    ) : (

                        packages.map((tourPackage) => (

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
                                            alt={
                                                tourPackage.packageName
                                            }
                                        />

                                    )}

                                    <div className="card-body">

                                        <h5>
                                            {
                                                tourPackage.packageName
                                            }
                                        </h5>

                                        <p>
                                            {
                                                tourPackage.description
                                            }
                                        </p>

                                        <p>
                                            <strong>
                                                Duration:
                                            </strong>{" "}
                                            {
                                                tourPackage.duration
                                            }
                                        </p>

                                        <p>
                                            <strong>
                                                Price:
                                            </strong>{" "}
                                            ₹
                                            {
                                                tourPackage.price
                                            }
                                        </p>

                                        <Link
                                            to={`/customer/package/${tourPackage.id}`}
                                        >
                                            <button className="btn btn-primary">
                                                View Package
                                            </button>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>
        </>
    );
}