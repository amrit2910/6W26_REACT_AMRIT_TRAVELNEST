import { useEffect, useState } from "react";
import TourGuideService from "../../../services/TourGuideService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTourGuide() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [languages, setLanguages] = useState("");
    const [experience, setExperience] = useState("");
    const [guideFee, setGuideFee] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [availability, setAvailability] = useState(true);

    const nav = useNavigate();
    const params = useParams();

    async function getGuideDetails() {

        try {

            let res = await TourGuideService.single(params.id);

            if (res) {

                setName(res.name);
                setPhone(res.phone);
                setEmail(res.email);

                setLanguages(
                    res.languages
                        ? res.languages.join(", ")
                        : ""
                );

                setExperience(res.experience);
                setGuideFee(res.guideFee);
                setProfileImage(res.profileImage);
                setAvailability(res.availability);

            } else {
                toast.error("No such Tour Guide");
            }

        } catch (err) {
            console.log("Error: ", err);
            toast.error("Error loading tour guide");
        }
    }

    useEffect(() => {
        getGuideDetails();
    }, []);

    async function updateGuide(e) {

        e.preventDefault();

        try {

            let payload = {

                name: name,
                phone: phone,
                email: email,

                languages: languages
                    .split(",")
                    .map((language) => language.trim()),

                experience: experience,
                guideFee: guideFee,
                profileImage: profileImage,
                availability: availability

            };

            await TourGuideService.update(
                payload,
                params.id
            );

            toast.success("Tour Guide Updated");

            nav(-1);

        } catch (err) {

            console.log("Error: ", err);
            toast.error("Error updating tour guide");

        }
    }

    return (
        <>
            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    Edit Tour Guide
                </h1>

            </div>

            <div className="d-flex justify-content-center mt-5 mb-5">

                <div className="col-lg-7">

                    <form onSubmit={updateGuide}>

                        <input
                            type="text"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Guide Name"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            required
                        />

                        <input
                            type="tel"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) =>
                                setPhone(e.target.value)
                            }
                            required
                        />

                        <input
                            type="email"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />

                        <input
                            type="text"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Languages (English, Hindi, Punjabi)"
                            value={languages}
                            onChange={(e) =>
                                setLanguages(e.target.value)
                            }
                            required
                        />

                        <input
                            type="text"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Experience"
                            value={experience}
                            onChange={(e) =>
                                setExperience(e.target.value)
                            }
                            required
                        />

                        <input
                            type="number"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Guide Fee"
                            value={guideFee}
                            onChange={(e) =>
                                setGuideFee(e.target.value)
                            }
                            required
                        />

                        <input
                            type="text"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Profile Image URL"
                            value={profileImage}
                            onChange={(e) =>
                                setProfileImage(e.target.value)
                            }
                            required
                        />

                        <select
                            className="w-100 form-control py-3 mb-4"
                            value={availability}
                            onChange={(e) =>
                                setAvailability(
                                    e.target.value === "true"
                                )
                            }
                        >
                            <option value="true">
                                Available
                            </option>

                            <option value="false">
                                Not Available
                            </option>
                        </select>

                        <button
                            className="w-100 btn form-control border-secondary py-3 bg-white text-primary"
                            type="submit"
                        >
                            Update Tour Guide
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}