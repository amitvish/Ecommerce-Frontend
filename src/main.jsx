import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryClient"; // Import QueryClient
import App from "./App";

console.log("🚀 main.jsx loaded!"); // Debugging Log

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename="/Ecommerce-Frontend">
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
