export const SignUpApi = async (formData) => {
  console.log(formData);
  try {
    const res = await fetch(
      "https://treepe-backend-api.onrender.com/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const loginApi = async (credentials) => {
  try {
    const response = await fetch(
      "https://treepe-backend-api.onrender.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    // Check if the response status is not OK
    if (!response.ok) {
      const errorData = await response.json().catch(() => null); // Attempt to parse JSON, fallback to null
      const errorMessage =
        errorData?.message || "Login failed due to an error.";
      throw new Error(errorMessage);
    }

    // Parse and return the JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error and re-throw it for the caller to handle
    console.log("Login API error:", error);
    // throw new Error(error.message || "Something went wrong while logging in.");
  }
};

export const VerifyApi = async (formData) => {
  console.log(formData);
  try {
    const res = await fetch(
      "https://treepe-backend-api.onrender.com/auth/verify-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
