


export const addDestination = async (formData) => {


  const destination = Object.fromEntries(formData.entries());

  const res = await fetch("http://localhost:8000/destination", {
    method: "POST",

    headers: {
      "content-type": "application/json",
    },

    body: JSON.stringify(destination),
  });

  const data = await res.json();

  if (data.insertedId) {

  }

  return data;
};