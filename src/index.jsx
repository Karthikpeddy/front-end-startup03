import React from "react";
import ReactDOMClient from "react-dom/client";
import { Header } from "./screens/Header";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Header />);
