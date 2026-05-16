import { revalidatePath } from "next/cache";

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
  return data;
};

export const updateDestination = async (id, formData) => {
  const updateDestination = Object.fromEntries(formData.entries());

  const res = await fetch(`http://localhost:8000/destination/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updateDestination),
  });
  const data = await res.json();

  if (data.modifyCount > 0) {
    revalidatePath(`http://localhost:8000/destination/${id}`);
  }

  return data;
};
