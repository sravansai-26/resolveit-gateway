import { createRoot } from "react-dom/client";
import Routes from "./Routes"; // Import your Routes instead of App
import "./styles/index.css"; // Reset first
import "./styles/tailwind.css"; // Tailwind last (so utilities win)
const container = document.getElementById("root");

if (!container) {
    throw new Error("Root element not found");
}

const root = createRoot(container);

// Logic: Render the Routes component which contains your ErrorBoundary and LandingPage
root.render(<Routes />);