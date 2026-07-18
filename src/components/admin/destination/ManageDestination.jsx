import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DestinationService from "../../../services/DestinationService";
import { toast } from "react-toastify";

export default function ManageDestinations() {

  const [destinations, setDestinations] = useState([]);

  async function getDestinations() {
    let data = await DestinationService.all();
    setDestinations(data);
  }
  async function deleteDestination(id) {
    try {
      await DestinationService.deleteDestination(id);

      toast.success("Destination Deleted");

      getDestinations();

    } catch (err) {
      console.log("Error: ", err);
      toast.error("Error deleting destination");
    }
  }

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <>
      {/* Single Page Header start */}
     <div className="container-fluid bg-breadcrumb">
    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3 mb-4">Destinations</h3>
      </div>
      </div>

        {/* <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>

          <li className="breadcrumb-item">
            <a href="#">Admin</a>
          </li>

          <li className="breadcrumb-item active text-white">
            Destinations
          </li>
        </ol> */}
    

      <div className="container">

        <div className="d-flex justify-content-between mt-5">

          <h1 className="text-center">
            Destinations List
          </h1>

          <Link to="/admin/destination/add">
            <button
              className="btn border-secondary py-3 bg-white text-primary"
              type="button"
            >
              <i className="bi bi-plus"></i>
              Add Destination
            </button>
          </Link>

        </div>

        {/* Destination List */}

        <div className="row mt-4">

          {destinations.map((destination) => (

            <div
              className="col-md-4 mb-4"
              key={destination.id}
            >

              <div className="card h-100">

                <img
                  src={destination.images}
                  className="card-img-top"
                  alt={destination.name}
                  style={{
                    height: "220px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {destination.name}
                  </h5>

                  <p className="card-text">
                    <strong>Location:</strong>{" "}
                    {destination.state}
                  </p>

                  <p className="card-text">
                    {destination.description}
                  </p>

                  <p className="card-text">
                    <strong>Best Season:</strong>{" "}
                    {destination.bestSeason}
                  </p>

                  {/* <p className="card-text">
                                        <strong>Price:</strong> ₹
                                        {destination.price}
                                    </p> */}
                  <Link to={`/admin/destination/edit/${destination.id}`}>
                    <button className="btn btn-primary me-2">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteDestination(destination.id)}
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