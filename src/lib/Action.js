
import { redirect } from "next/navigation";

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

  return data;
};

export const deleteDestination = async (id) => {
  const res = await fetch(`http://localhost:8000/destination/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();
  redirect("/destination")
  

  return data;
};
