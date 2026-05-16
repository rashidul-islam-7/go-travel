export const getDestinations = async () => {
  const res = await fetch("http://localhost:8000/destination");

  if (!res.ok) {
    throw new Error("Failed to fetch destinations");
  }

  return await res.json();
};

export const getIdData = async (id) => {
  const res = await fetch(`http://localhost:8000/destination/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch destination by id");
  }

  return await res.json();
};
