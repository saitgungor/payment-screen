export const helper = async (endPoint) => {
  const response = await fetch(
    `https://api.apilayer.com/bincheck/${endPoint}`,
    {
      method: "GET",
      headers: {
        apikey: "Fv6WCZo5yZlmhdhvZ4xfu68oN2t4GGU8",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
};
