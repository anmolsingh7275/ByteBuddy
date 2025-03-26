import { prevUser } from "./context/UserContext";

export async function query() {
	const response = await fetch(
		,
		{
			headers: {
				Authorization: "Bearer ",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ inputs: prevUser.prompt }),
		}
	);
	const result = await response.blob();
	return result;
}

