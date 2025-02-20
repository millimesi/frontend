export const jobLoader = async ({ params }) => {
  try {
    const res = await fetch(`/api/jobs/${params.id}`);
    if (!res.ok) {
      throw new Error("Could not get response from api request!");
    }
    return await res.json();
  } catch (error) {
    console.error("Error: ", error);
    return {};
  }
};
