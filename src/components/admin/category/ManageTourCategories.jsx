import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import TourCategoryService from "../../../services/TourCategoryService";

export default function ManageTourCategories() {

    const [categories, setCategories] = useState([]);

    async function getCategories() {
        let data = await TourCategoryService.all();
        setCategories(data);
    }
    async function deleteCategory(id) {

        try {

            await TourCategoryService.deleteCategory(id);

            toast.success("Category Deleted");

            getCategories();

        } catch (err) {

            console.log("Error: ", err);
            toast.error("Error deleting category");

        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
         <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Tour Categories</h3>
      </div>
      </div>
            {/* <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">
                    Tour Categories
                </h1>
            </div> */}

            <div className="container">

                <div className="d-flex justify-content-between mt-4">

                    <h1>Tour Categories List</h1>

                    <Link to="/admin/category/add">
                        <button className="btn btn-primary">
                            <i className="bi bi-plus"></i>
                            Add Category
                        </button>
                    </Link>

                </div>

                <div className="row mt-4">

                    {categories.map((category) => (

                        <div
                            className="col-md-4 mb-4"
                            key={category.id}
                        >

                            <div className="card h-100">

                                <div className="card-body">

                                    <h5 className="card-title">
                                        {category.name}
                                    </h5>

                                    <p className="card-text">
                                        {category.description}
                                    </p>

                                    <p>
                                        <strong>Status:</strong>{" "}
                                        {category.status}
                                    </p>
                                    <Link to={`/admin/category/edit/${category.id}`}>
                                        <button className="btn btn-primary me-2">
                                            Edit
                                        </button>
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteCategory(category.id)}
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}