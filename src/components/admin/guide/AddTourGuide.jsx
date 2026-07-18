import { useState } from "react";
import TourGuideService from "../../../services/TourGuideService";
import { toast } from "react-toastify";

export default function AddTourGuide() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [languages, setLanguages] = useState("");
    const [experience, setExperience] = useState("");
    const [guideFee, setGuideFee] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [availability, setAvailability] = useState(true);

    async function addGuide(e) {

        e.preventDefault();

        try {

            let payload = {
                name: name,
                phone: phone,
                email: email,

                // Convert comma-separated text into an array
                languages: languages
                    .split(",")
                    .map((language) => language.trim()),

                experience: experience,
                guideFee: guideFee,
                profileImage: profileImage,
                availability: availability
            };

            await TourGuideService.add(payload);

            toast.success("Tour Guide Added");

            setName("");
            setPhone("");
            setEmail("");
            setLanguages("");
            setExperience("");
            setGuideFee("");
            setProfileImage("");
            setAvailability(true);

        } catch (err) {

            console.log("Error: ", err);
            toast.error("Error adding tour guide");

        }
    }

    return (
        <>
            <div className="container-fluid page-header py-5">

                <h1 className="text-center text-white display-6">
                    Add Tour Guide
                </h1>

            </div>

            <div className="d-flex justify-content-center mt-5 mb-5">

                <div className="col-lg-7">

                    <form onSubmit={addGuide}>

                        <input
                            type="text"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Enter Guide Name"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            required
                        />

                        <input
                            type="tel"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Enter Phone Number"
                            value={phone}
                            onChange={(e) =>
                                setPhone(e.target.value)
                            }
                            required
                        />

                        <input
                            type="email"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />

                        <input
                            type="text"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Languages (e.g. English, Hindi, Punjabi)"
                            value={languages}
                            onChange={(e) =>
                                setLanguages(e.target.value)
                            }
                            required
                        />

                        <input
                            type="text"
                            className="w-100 form-control py-3 mb-4"
                            placeholder="Years of Experience"
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
                            Add Tour Guide
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}