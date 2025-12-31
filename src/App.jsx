import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TripsListing from './pages/TripsListing';
import TripDetails from './pages/TripDetails';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Ticket from './pages/Ticket';
import Deals from './pages/Deals';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<TripsListing />} />
            <Route path="/trip/:id" element={<TripDetails />} />
            <Route path="/booking/:id" element={<Booking />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
