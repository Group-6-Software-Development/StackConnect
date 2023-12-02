const useSignup = () => {
  const API_URL = "http://localhost:5000/api/user/register";

  const handleSignup = async (email, password, role) => {
    console.log(email, password, role);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
      } else {
        const error = await response.json();

        alert(error.message);
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return {
    handleSignup,
  };
};

export default useSignup;
