import axios from "axios";
import { useEffect, useState } from "react";
export function useAxios(url) {
	const [request, setRequest] = useState({
		loading: false,
		data: null,
		error: false,
	});
	useEffect(() => {
		setRequest({
			loading: true,
			data: null,
			error: false,
		});
		axios
			.get(url)
			.then((response) => {
				setRequest({
					loading: false,
					data: response.data,
				});
			})
			.catch((err) => {
				setRequest({
					loading: false,
					data: null,
					error: true,
				});
				console.log(err);
			});
	}, [url]);
	return request;
}
