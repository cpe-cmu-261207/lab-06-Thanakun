import axios from "axios";
import { useEffect, useState } from "react";

const Current = () => {
	const [price, setPrice] = useState(0);
	const [date, setDate] = useState("");
	const [load, setLoad] = useState(false);

	useEffect(() => {
		axios.get("https://api.coindesk.com/v1/bpi/currentprice/thb.json")
			.then(resp => {
				setPrice(resp.data.bpi.THB.rate_float)
				setDate(resp.data.time.updated)
				setLoad(true);
			})
			.catch(err => console.log(err))
		setLoad(false);
	}, [])

	return (
		<div className="text-center space-y-3">
				<p className="text-2xl font-semibold">Current price</p>
				{load ? 
					<div>
						<p className="text-2xl">{(price).toLocaleString()} THB</p>
						<p> (Last updated {date})  </p>
					</div>
					: <p className="text-2xl">Loading ...</p>
				}
		</div>
	);
};

export default Current;