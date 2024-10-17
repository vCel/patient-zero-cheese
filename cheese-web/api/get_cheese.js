const api_url = "http://localhost:3000";

export const getCheeseList = async () => {
  return await fetch(`${api_url}/cheeses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
