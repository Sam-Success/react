import Navbar from "./Components/navbar"
import BookingForm from "./Components/BookingForm"
import CarType from "./Components/CarType"
import DriversForm from "./Components/DriversForm"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div>
        <Navbar />
        <BookingForm />
        <CarType />
        <DriversForm />
        <Footer />
    </div>
  )
}

export default App
