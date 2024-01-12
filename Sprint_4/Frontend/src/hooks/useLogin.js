import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const API_URL = "/user/login";

  const login = async (email, password) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Check if the response has content before parsing as JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const user = await response.json();

          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user));

          console.log("User logged in successfully!");

          navigate("/jobs");
        } else {
          console.error("Empty or non-JSON response");
        }
      } else {
        // Handle non-ok response
        const error = await response.json();

        alert(error.message);
        console.error("Login failed");
      }
    } catch (err) {
      console.error(err);
    }
  };
}
