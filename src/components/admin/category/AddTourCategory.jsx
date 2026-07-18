import { useState } from "react";
import TourCategoryService from "../../../services/TourCategoryService";
import { toast } from "react-toastify";

export default function AddTourCategory() {

    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");

    async function addCategory(e) {
        e.preventDefault();

        try {

            let payload = {
                name: categoryName,
                description: description,
                status: "active"
            };

            await TourCategoryService.add(payload);

            toast.success("Tour Category Added");

            setCategoryName("");
            setDescription("");

        } catch (err) {

            console.log("Error: ", err);
            toast.error("Error adding tour category");

        }
    }

    return (
        <>
        <div className="container-fluid bg-breadcrumb">
    <div className="container text-center p-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 m-0">
            <div className="container-fluid page-header p-5">

                <h1 className="text-center text-white display-6">
                    Add Tour Category
                </h1>

                {/* <ol className="breadcrumb justify-content-center mb-0">

                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>

                    <li className="breadcrumb-item">
                        <a href="#">Admin</a>
                    </li>

                    <li className="breadcrumb-item active text-white">
                        Add Tour Category
                    </li>

                </ol> */}

            </div>

            <div className="d-flex justify-content-center mt-5">

                <div className="col-lg-7">

                    <form onSubmit={addCategory}>

                        <input
                            type="text"
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Category Name"
                            value={categoryName}
                            onChange={(e) =>
                                setCategoryName(e.target.value)
                            }
                            required
                        />

                        <textarea
                            className="w-100 form-control border-0 py-3 mb-4"
                            placeholder="Enter Description"
                            rows="4"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                            required
                        />

                        <button
                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                            type="submit"
                        >
                            Add Category
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