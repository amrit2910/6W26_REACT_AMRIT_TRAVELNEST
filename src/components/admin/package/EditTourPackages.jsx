import { useEffect, useState } from "react";
import TourPackageService from "../../../services/TourPackageService";
import DestinationService from "../../../services/DestinationService";
import TourCategoryService from "../../../services/TourCategoryService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTourPackage() {

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

    const nav = useNavigate();
    const params = useParams();

    async function getData() {
        try {

            const packageData =
                await TourPackageService.single(params.id);

            const destinationData =
                await DestinationService.all();

            const categoryData =
                await TourCategoryService.all();

            setDestinations(destinationData);
            setCategories(categoryData);

            if (packageData) {

                setDestinationId(packageData.destinationId);
                setCategoryId(packageData.categoryId);
                setPackageName(packageData.packageName);
                setDescription(packageData.description);
                setDuration(packageData.duration);
                setPrice(packageData.price);
                setMaxPeople(packageData.maxPeople);
                setItinerary(packageData.itinerary);

                if (
                    packageData.images &&
                    packageData.images.length > 0
                ) {
                    setImage(packageData.images[0]);
                }

            } else {
                toast.error("No such Package");
            }

        } catch (err) {
            console.log("Error: ", err);
            toast.error("Error loading package");
        }
    }

    useEffect(() => {
        getData();
    }, []);

    async function updatePackage(e) {

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

            await TourPackageService.update(
                payload,
                params.id
            );

            toast.success("Tour Package Updated");

            nav(-1);

        } catch (err) {

            console.log("Error: ", err);
            toast.error("Error updating tour package");
        }
    }

    return (
        <>
            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    Edit Tour Package
                </h1>

            </div>

            <div className="d-flex justify-content-center mt-5 mb-5">

                <div className="col-lg-7">

                    <form onSubmit={updatePackage}>

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
                            placeholder="Package Name"
                            value={packageName}
                            onChange={(e) =>
                                setPackageName(e.target.value)
                            }
                            required
                        />

                        <textarea
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Description"
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
                            placeholder="Duration"
                            value={duration}
                            onChange={(e) =>
                                setDuration(e.target.value)
                            }
                            required
                        />

                        <input
                            type="number"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Price"
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
                            placeholder="Itinerary"
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
                            placeholder="Image URL"
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
                            Update Tour Package
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}