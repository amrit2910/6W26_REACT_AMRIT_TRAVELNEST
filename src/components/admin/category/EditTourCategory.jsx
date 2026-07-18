import { useEffect, useState } from "react";
import TourCategoryService from "../../../services/TourCategoryService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTourCategory() {

    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");

    const nav = useNavigate();
    const params = useParams();

    async function updateCategory(e) {
        e.preventDefault();

        try {

            let payload = {
                name: categoryName,
                description: description,
                status: "active"
            };

            await TourCategoryService.update(
                payload,
                params.id
            );

            toast.success("Category Updated");

            nav(-1);

        } catch (err) {

            toast.error("Error updating category");
            console.log("Error: ", err);

        }
    }

    async function getCategoryDetails() {

        let res = await TourCategoryService.single(params.id);

        if (res) {

            setCategoryName(res.name);
            setDescription(res.description);

        } else {

            toast.error("No such Document");

        }
    }

    useEffect(() => {
        getCategoryDetails();
    }, []);

    return (
        <>
            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    Edit Tour Category
                </h1>

            </div>

            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">

                    <form onSubmit={updateCategory}>

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Category Name"
                            value={categoryName}
                            onChange={(e) =>
                                setCategoryName(e.target.value)
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

                        <button
                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                            type="submit"
                        >
                            Update Category
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}