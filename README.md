# 🌍 TraveGo - Premium Travel Booking Platform

![TraveGo Banner](https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80)

A modern, full-stack travel booking web application built with React.js, Tailwind CSS, and Firebase. Book curated trips to 500+ destinations worldwide including Bali, Maldives, Switzerland, Dubai, and Paris.

## ✨ Live Demo

🔗 **[View Live Site](https://devaprakashj.github.io/TraveGO/)**

---

## 👨‍💻 Developer

**Devaprakash J** - AI & ML Engineer | Full Stack Developer | Freelancer

- 🔗 LinkedIn: [linkedin.com/in/devaprakashj](https://www.linkedin.com/in/devaprakashj/)
- 📧 Email: devaprakashofficial@gmail.com
- 🌍 Location: India

> Looking for a freelance developer for your travel, booking, or web project? Contact me!

---

## 🚀 Features

### Core Features
- ✅ **Homepage** with Hero section, Categories, Featured Trips, Testimonials
- ✅ **Trip Listing** with Search, Category Filter, Price Filter
- ✅ **Trip Details** page with Itinerary, Highlights, and Booking
- ✅ **Booking Flow** - Complete booking process with form validation
- ✅ **Payment Page** - Secure payment simulation
- ✅ **Digital Ticket** - Booking confirmation with QR code
- ✅ **Deals Page** - Limited-time offers with countdown
- ✅ **Contact Page** - Firebase-integrated contact form

### Design Features
- 🎨 Modern, premium UI with glassmorphism effects
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- ✨ Smooth animations with Framer Motion
- 🌙 Beautiful color scheme with custom primary colors
- 🖼️ Auto-sliding Partners/Brands marquee

### SEO Features
- 🔍 Full SEO meta tags (Title, Description, Keywords)
- 📊 JSON-LD Schema (Person, Website, TravelAgency, TouristTrip, FAQ)
- 🗺️ Sitemap.xml for search engines
- 🤖 Robots.txt configured
- 📱 Open Graph & Twitter Card tags
- ⭐ Rich snippets ready

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend Framework |
| **Vite** | Build Tool |
| **Tailwind CSS v4** | Styling |
| **Framer Motion** | Animations |
| **React Router** | Navigation |
| **Firebase Firestore** | Database (Bookings, Contacts, Newsletter) |
| **Lucide React** | Icons |

---

## 📁 Project Structure

```
Travel Web/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── FeaturedTrips.jsx
│   │   ├── TripCard.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── TripsListing.jsx
│   │   ├── TripDetails.jsx
│   │   ├── Booking.jsx
│   │   ├── Payment.jsx
│   │   ├── Ticket.jsx
│   │   ├── Deals.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── tripsData.js
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devaprakashj/TraveGO.git
   cd TraveGO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
```

---

## 🔥 Firebase Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Update `src/firebase.js` with your config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy!

### Deploy to Netlify

```bash
npm run build
# Upload `dist` folder to Netlify
```

---

## 📸 Screenshots

| Homepage | Trip Details | Booking |
|----------|--------------|---------|
| Hero with search | Itinerary view | Form & summary |
| Categories | Highlights | Payment flow |
| Featured trips | Sidebar CTA | Digital ticket |

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💼 Hire Me

Need a similar travel booking website or any web/AI project?

**Devaprakash J** is available for freelance projects!

- 🔗 [LinkedIn](https://www.linkedin.com/in/devaprakashj/)
- 📧 [devaprakashofficial@gmail.com](mailto:devaprakashofficial@gmail.com)

---

**⭐ If you like this project, give it a star on GitHub!**
