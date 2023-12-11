import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();
  const API_URL = "http://localhost:5000/user/login";

  const login = async (object) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });

      if (response.ok) {
        const user = await response.json();

        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user));

        console.log("User logged in successfully!");

        navigate("/jobs");
      } else {
        const error = await response.json();

        alert(error.message);
        console.error("Signup failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { login };
}
