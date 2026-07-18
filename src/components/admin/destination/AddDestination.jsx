import { useState } from "react";
import DestinationService from "../../../services/DestinationService";
import { toast } from "react-toastify";

export default function AddDestination() {
    const [destinationName, setDestinationName] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");
    const [bestSeason, setBestSeason] = useState("");
    const [image, setImage] = useState("");

    async function addDestination(e) {
        e.preventDefault();

        try {
            let payload = {
                name: destinationName,
                state: state,
                country: country,
                description: description,
                bestSeason: bestSeason,
                images: [image],
                status: "active"
            };


            await DestinationService.add(payload);

            toast.success("Destination Added");

            setDestinationName("");
            setState("");
            setCountry("");
            setDescription("");
            setBestSeason("");
            setImage("");

        } catch (err) {
            console.log("Error: ", err);
            toast.error("Error adding destination");
        }
    }

    return (
        <>
         <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">
                    Add Destination
                </h1>

                {/* <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>

                    <li className="breadcrumb-item">
                        <a href="#">Admin</a>
                    </li>

                    <li className="breadcrumb-item active text-white">
                        Add Destination
                    </li>
                </ol> */}
            </div>

            <div className="d-flex justify-content-center mt-5 mb-5">

                <div className="col-lg-7">

                    <form onSubmit={addDestination}>

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Destination Name"
                            value={destinationName}
                            onChange={(e) =>
                                setDestinationName(e.target.value)
                            }
                            required
                        />

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter state"
                            value={state}
                            onChange={(e) =>
                                setState(e.target.value)
                            }
                            required
                        />
                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter country"
                            value={country}
                            onChange={(e) =>
                                setCountry(e.target.value)
                            }
                            required
                        />
                        <textarea
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter description"
                            rows="4"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            required
                        />

                        {/* <input
                            type="number"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            required
                        /> */}

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Best season"
                            value={bestSeason}
                            onChange={(e) =>
                                setBestSeason(e.target.value)
                            }
                            required
                        />

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Image URL"
                            value={image}
                            onChange={(e) =>
                                setImage(e.target.value)
                            }
                            required
                        />

                        <button
                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                            type="submit"
                        >
                            Submit
                        </button>

                    </form>

                </div>

            </div>
            </h3>
            </div>
</div>
        </>
    );
}