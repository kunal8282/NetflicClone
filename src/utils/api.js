export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      // If the response status is not in the range 200-299, consider it an error
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    // Parse the response body as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any network errors or errors during the fetch operation
    console.error("Error fetching data:", error.message);
    throw error; // Re-throw the error to propagate it further if needed
  }
};
