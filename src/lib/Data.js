export const getDestinations = async () => {
  const res = await fetch("http://localhost:8000/destination");
  const data = await res.json();
  return data;
};

export const getIdData = async (id) => {
  const res = await fetch(`http://localhost:8000/destination/${id}`);
  const data = await res.json();
  return data;
};
