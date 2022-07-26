import React, { useEffect, useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
	const [data, setData] = useState([]);
	const history = useNavigate();

	useEffect(() => {
		const getApi = async () => {
			const res = await axios.get(process.env.REACT_APP_ENDPOINT ?? "");
			setData(res.data);
		};

		getApi();
	}, []);
	return (
		<div className="App">
			{data.map((item: any) => {
				return (
					<div key={item?.id}>
						<div onClick={() => history(`/about/${item?.id}`)}>
							{item?.author}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default App;
