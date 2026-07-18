import { BrowserRouter, Routes, Route } from "react-router-dom";
//User Panel
import Layout from "./components/user/layout/Layout";
import Home from "./components/user/home/Home";
import About from "./components/user/about/About";
import Services from "./components/user/services/Services";
import Packages from "./components/user/packages/Packages";
import Blog from "./components/user/blog/Blog";
import BrowseDestinations from "./components/user/destination/BrowseDestinations";
import DestinationDetails from "./components/user/destination/DestinationDetails";
import Tour from "./components/user/tour/Tour";
import Booking from "./components/user/booking/Booking";
import Gallery from "./components/user/gallery/Gallery";
import Guide from "./components/user/guide/Guide";
import Testimonial from "./components/user/testimonial/Testimonial";
import Error from "./components/user/404/Error";
import Contact from "./components/user/contact/Contact";
//Admin Panel
import AdminLayout from "./components/admin/layout/AdminLayout";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Register from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import AddDestination from "./components/admin/destination/AddDestination";
import ManageDestination from "./components/admin/destination/ManageDestination";
import EditDestination from "./components/admin/destination/EditDestination";
import ManageTourCategories from "./components/admin/category/ManageTourCategories";
import AddTourCategory from "./components/admin/category/AddTourCategory";
import EditTourCategory from "./components/admin/category/EditTourCategory";
import ManageTourPackages from "./components/admin/package/ManageTourPackages";
import AddTourPackage from "./components/admin/package/AddTourPackage";
import EditTourPackage from "./components/admin/package/EditTourPackages";
import ManageTourGuides from "./components/admin/guide/ManageTourGuides";
import AddTourGuide from "./components/admin/guide/AddTourGuide";
import EditTourGuide from "./components/admin/guide/EditTourGuide";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="destination" element={<ManageDestination />} />

            <Route path="destination/add" element={<AddDestination />} />
            <Route path="destination/edit/:id" element={<EditDestination />} />
            <Route path="category" element={<ManageTourCategories />} />
            <Route path="category/add" element={<AddTourCategory />} />
            <Route path="category/edit/:id" element={<EditTourCategory />} />
            <Route path="package" element={<ManageTourPackages />}/>
            <Route path="packages/add"  element={<AddTourPackage />} />
            <Route path="package/edit/:id"  element={<EditTourPackage />}/>
            <Route path="guide" element={<ManageTourGuides />}/>
            <Route path="guide/add" element={<AddTourGuide />}/>
            <Route path="guide/edit/:id" element={<EditTourGuide />}/>
          </Route>


        //User Panel
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path='about' element={<About />}></Route>
            <Route path='services' element={<Services />}></Route>
            <Route path='packages' element={<Packages />}></Route>
            <Route path='blog' element={<Blog />}></Route>
            <Route path="destinations"element={<BrowseDestinations />}/>
            <Route path="destinations/:id" element={<DestinationDetails />}
/>
            <Route path='tour' element={<Tour />}></Route>
            <Route path='booking' element={<Booking />}></Route>
            <Route path='gallery' element={<Gallery />}></Route>
            <Route path='guide' element={<Guide />}></Route>
            <Route path='testimonial' element={<Testimonial />}></Route>
            <Route path='error' element={<Error />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
