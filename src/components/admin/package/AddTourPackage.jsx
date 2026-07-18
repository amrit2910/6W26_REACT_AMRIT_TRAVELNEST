import { useEffect, useState } from "react";
import TourPackageService from "../../../services/TourPackageService";
import DestinationService from "../../../services/DestinationService";
import TourCategoryService from "../../../services/TourCategoryService";
import { toast } from "react-toastify";

export default function AddTourPackage() {

    const [destinations, setDestinations] = useState([]);
    const [categories, setCategories] = useState([]);

    const [destinationId, setDestinationId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [packageName, setPackageName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const [maxPeople, setMaxPeople] = useState("");
    const [itinerary, setItinerary] = useState("");
    const [image, setImage] = useState("");

    async function getDestinations() {
        let data = await DestinationService.all();
        setDestinations(data);
    }

    async function getCategories() {
        let data = await TourCategoryService.all();
        setCategories(data);
    }

    useEffect(() => {
        getDestinations();
        getCategories();
    }, []);

    async function addPackage(e) {
        e.preventDefault();

        try {

            let payload = {
                destinationId: destinationId,
                categoryId: categoryId,
                packageName: packageName,
                description: description,
                duration: duration,
                price: price,
                maxPeople: maxPeople,
                itinerary: itinerary,
                images: [image],
                status: "active"
            };

            await TourPackageService.add(payload);

            toast.success("Tour Package Added");

            setDestinationId("");
            setCategoryId("");
            setPackageName("");
            setDescription("");
            setDuration("");
            setPrice("");
            setMaxPeople("");
            setItinerary("");
            setImage("");

        } catch (err) {

            console.log("Error: ", err);
            toast.error("Error adding tour package");

        }
    }

    return (
        <>
            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    Add Tour Package
                </h1>

            </div>

            <div className="d-flex justify-content-center mt-5 mb-5">

                <div className="col-lg-7">

                    <form onSubmit={addPackage}>

                        <select
                            className="w-100 form-control py-3 mb-4"
                            value={destinationId}
                            onChange={(e) =>
                                setDestinationId(e.target.value)
                            }
                            required
                        >
                            <option value="">
                                Select Destination
                            </option>

                            {destinations.map((destination) => (

                                <option
                                    key={destination.id}
                                    value={destination.id}
                                >
                                    {destination.name}
                                </option>

                            ))}

                        </select>

                        <select
                            className="w-100 form-control py-3 mb-4"
                            value={categoryId}
                            onChange={(e) =>
                                setCategoryId(e.target.value)
                            }
                            required
                        >
                            <option value="">
                                Select Category
                            </option>

                            {categories.map((category) => (

                                <option
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>

                            ))}

                        </select>

                        <input
                            type="text"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Enter Package Name"
                            value={packageName}
                            onChange={(e) =>
                                setPackageName(e.target.value)
                            }
                            required
                        />

                        <textarea
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Enter Description"
                            rows="4"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            required
                        />

                        <input
                            type="text"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Enter Duration"
                            value={duration}
                            onChange={(e) =>
                                setDuration(e.target.value)
                            }
                            required
                        />

                        <input
                            type="number"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Enter Price"
                            value={price}
                            onChange={(e) =>
                                setPrice(e.target.value)
                            }
                            required
                        />

                        <input
                            type="number"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Maximum People"
                            value={maxPeople}
                            onChange={(e) =>
                                setMaxPeople(e.target.value)
                            }
                            required
                        />

                        <textarea
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Enter Itinerary"
                            rows="5"
                            value={itinerary}
                            onChange={(e) =>
                                setItinerary(e.target.value)
                            }
                            required
                        />

                        <input
                            type="text"
                            className="w-100 form-control py-3 mb-4"
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
                            Add Tour Package
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}