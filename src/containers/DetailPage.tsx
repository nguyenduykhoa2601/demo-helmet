import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function DetailPage() {
	const [item, setItem] = useState<any>({});
	const param = useParams();

	console.log(param?.id);

	useEffect(() => {
		const getApi = async () => {
			try {
				const res = await axios.get(
					`https://picsum.photos/id/${param?.id}/info`
				);
				setItem(res.data);
			} catch (error) {}
		};

		if (param?.id) {
			getApi();
		}
	}, [param]);

	console.log("item", item);

	return (
		<div>
			{item && (
				<>
					<Helmet>
						<meta property="og:image" content={item?.download_url} />
						<meta property="og:title" content={`HELLO ${item?.id}`} />
						<meta property="og:description" content={item?.author} />
					</Helmet>
					<img
						src={item?.download_url}
						alt=""
						width={item.width}
						height={item.height}
					/>
				</>
			)}
		</div>
	);
}
