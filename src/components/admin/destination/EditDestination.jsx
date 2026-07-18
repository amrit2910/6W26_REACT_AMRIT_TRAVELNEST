import { useEffect, useState } from "react";

import DestinationService from "../../../services/DestinationService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditDestination() {

    const [destinationName, setDestinationName] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [bestSeason, setBestSeason] = useState("");
    const [image, setImage] = useState("");

    const nav = useNavigate();
    const params = useParams();

    async function updateDestination(e) {
        e.preventDefault();

        try {

            let payload = {
                name: destinationName,
                state: state,
                country: country,
                description: description,
                bestSeason: bestSeason,
                images: [image]
            };

            await DestinationService.update(
                payload,
                params.id
            );

            toast.success("Destination Updated");

            nav(-1);

        } catch (err) {

            toast.error("Error updating destination");

            console.log("Error: ", err);
        }
    }

    async function getDestinationDetails() {

        let res = await DestinationService.single(params.id);

        if (res) {

            setDestinationName(res.name);
            setState(res.state);
            setCountry(res.country);
            setDescription(res.description);
            setBestSeason(res.bestSeason);

            if (res.images && res.images.length > 0) {
                setImage(res.images[0]);
            }

        } else {

            toast.error("No such Document");
        }
    }

    useEffect(() => {
        getDestinationDetails();
    }, []);

    return (
        <>
            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    Edit Destination
                </h1>

                <ol className="breadcrumb justify-content-center mb-0">

                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>

                    <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                    </li>

                    <li className="breadcrumb-item active text-white">
                        Edit Destination
                    </li>

                </ol>

            </div>

            <div className="d-flex justify-content-center mt-5 mb-5">

                <div className="col-lg-7">

                    <form onSubmit={updateDestination}>

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Destination Name"
                            value={destinationName}
                            onChange={(e) =>
                                setDestinationName(e.target.value)
                            }
                        />

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter State"
                            value={state}
                            onChange={(e) =>
                                setState(e.target.value)
                            }
                        />

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Country"
                            value={country}
                            onChange={(e) =>
                                setCountry(e.target.value)
                            }
                        />

                        <textarea
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Description"
                            rows="4"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                        />

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Best Season"
                            value={bestSeason}
                            onChange={(e) =>
                                setBestSeason(e.target.value)
                            }
                        />

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Image URL"
                            value={image}
                            onChange={(e) =>
                                setImage(e.target.value)
                            }
                        />

                        <button
                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                            type="submit"
                        >
                            Update Destination
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}