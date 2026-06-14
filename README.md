# 🍔 Vingo - Food Delivery Web App

Vingo is a full-stack, production-ready food delivery platform built with the MERN stack. It supports multiple user roles (Customer, Restaurant Owner, Delivery Boy), real-time order tracking, online payments, and a complete order management workflow — similar to apps like Zomato or Swiggy.

🔗 **Live Demo:** [https://vingo-frontend-k9tr.onrender.com/](https://vingo-frontend-k9tr.onrender.com/)

---
## screenshorts
<img width="1161" height="904" alt="image" src="https://github.com/user-attachments/assets/14cbaa55-a131-4981-8cb7-79716142b8b0" />
<img width="1651" height="835" alt="image" src="https://github.com/user-attachments/assets/711cfd6a-e133-4845-abb3-fea8017239ab" />



## ✨ Features

- **Multi-Role System** — Separate dashboards and flows for Customers, Restaurant Owners, and Delivery Boys
- **Authentication** — Email/Password login & signup with JWT, plus Google Sign-In
- **Password Reset via Email OTP**
- **Shop & Menu Management** — Owners can create/edit shops and manage food items with image uploads (Cloudinary)
- **Location-Based Discovery** — Browse nearby shops and food items based on user's city/location (Geoapify)
- **Cart & Checkout** — Add items from multiple shops, manage quantities, and place orders
- **Online Payments** — Integrated Razorpay payment gateway for secure transactions
- **Order Management** — Owners can update order status; orders are auto-assigned to nearby delivery boys
- **Real-Time Updates** — Live order status updates and delivery tracking using Socket.io
- **Live Delivery Tracking** — Real-time map view of delivery boy location during order delivery
- **Delivery OTP Verification** — Secure handover confirmation via OTP sent to customer's email

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Redux Toolkit
- Tailwind CSS
- Leaflet / Maps for live tracking

**Backend**
- Node.js & Express
- MongoDB & Mongoose
- Socket.io for real-time communication
- JWT for authentication

**Third-Party Services**
- Firebase (Google Authentication)
- Cloudinary (Image Storage)
- Razorpay (Payment Gateway)
- Geoapify (Geolocation & Address Autocomplete)
- Nodemailer (Email OTP)

---

## 📂 Project Structure

```
vingo/
├── backend/        # Express server, REST APIs, Socket.io, DB models
└── frontend/       # React app (Vite), Redux store, UI components
```

---

## 🚀 Deployment

Both frontend and backend are deployed on **Render**.

---

## 📌 Future Improvements

- Admin panel for platform-wide management
- Ratings & reviews for shops and items
- Push notifications for order updates
- Multi-language support

---

## 👤 Author

**Krishna Para**
- GitHub: [@Krishna-para](https://github.com/Krishna-para)
- LinkedIn: [Krishna Para](https://www.linkedin.com/in/krishna-para/)
