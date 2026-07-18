import { useEffect, useState } from "react";
import DestinationService from "../../../services/DestinationService";
import { Link } from "react-router-dom";

export default function BrowseDestinations() {

    const [destinations, setDestinations] = useState([]);

    async function getDestinations() {
        let data = await DestinationService.all();
        setDestinations(data);
    }

    useEffect(() => {
        getDestinations();
    }, []);

    return (
        <>
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">
                    Explore Destinations
                </h1>
            </div>

            <div className="container py-5">

                <div className="row">

                    {destinations.map((destination) => (

                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={destination.id}
                        >

                            <div className="card h-100">

                                {destination.images &&
                                    destination.images.length > 0 && (

                                    <img
                                        src={destination.images[0]}
                                        className="card-img-top"
                                        alt={destination.name}
                                        style={{
                                            height: "230px",
                                            objectFit: "cover"
                                        }}
                                    />

                                )}

                                <div className="card-body">

                                    <h4 className="card-title">
                                        {destination.name}
                                    </h4>

                                    <p>
                                        <strong>State:</strong>{" "}
                                        {destination.state}
                                    </p>

                                    <p>
                                        {destination.description}
                                    </p>

                                    <p>
                                        <strong>Best Season:</strong>{" "}
                                        {destination.bestSeason}
                                    </p>

                                    <Link
                                        to={`/destinations/${destination.id}`}
                                    >
                                        <button className="btn btn-primary">
                                            View Details
                                        </button>
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}