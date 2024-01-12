import { useNavigate } from "react-router-dom";

export default function useLogin({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const API_URL = "/user/login";

  const login = async (email, password) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log("---------");
      console.log(response.status);
      console.log(response.message.json());
      if (response.ok) {
        const user = await response.json();

        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user));

        console.log("User logged in successfully!");

        setIsAuthenticated(true);

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
