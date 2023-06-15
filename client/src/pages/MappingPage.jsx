import React, { useState, useEffect } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MappingPage = () => {
	const [selectedCrime, setSelectedCrime] = useState([]);
	const [selectedDistrict, setSelectedDistrict] = useState([]);
	const [fromDate, setFromDate] = useState(null);
	const [toDate, setToDate] = useState(null);
	const [mapUrl, setMapUrl] = useState(null);

	const crimeOptions = [
		{ value: "BATTERY", label: "Battery" },
		{ value: "THEFT", label: "Theft" },
		{ value: "NARCOTICS", label: "Narcotics" },
		{ value: "ASSAULT", label: "Assault" },
		{ value: "BURGLARY", label: "Burglary" },
		{ value: "ROBBERY", label: "Robbery" },
		{ value: "OTHER OFFENSE", label: "Other Offense" },
		{ value: "CRIMINAL DAMAGE", label: "Criminal Damage" },
		{ value: "WEAPONS VIOLATION", label: "Weapons Violation" },
		{ value: "DECEPTIVE PRACTICE", label: "Deceptive Practice" },
		{ value: "CRIMINAL TRESPASS", label: "Criminal Trespass" },
		{ value: "MOTOR VEHICLE THEFT", label: "Motor Vehicle Theft" },
		{ value: "SEX OFFENSE", label: "Sex Offense" },
		{
			value: "INTERFERENCE WITH PUBLIC OFFICER",
			label: "Interference with Public Officer",
		},
		{
			value: "OFFENSE INVOLVING CHILDREN",
			label: "Offense Involving Children",
		},
		{ value: "PUBLIC PEACE VIOLATION", label: "Public Peace Violation" },
		{ value: "PROSTITUTION", label: "Prostitution" },
		{ value: "GAMBLING", label: "Gambling" },
		{ value: "CRIM SEXUAL ASSAULT", label: "Crim Sexual Assault" },
		{ value: "LIQUOR LAW VIOLATION", label: "Liquor Law Violation" },
		{ value: "ARSON", label: "Arson" },
		{ value: "STALKING", label: "Stalking" },
		{ value: "KIDNAPPING", label: "Kidnapping" },
		{ value: "INTIMIDATION", label: "Intimidation" },
		{
			value: "CONCEALED CARRY LICENSE VIOLATION",
			label: "Concealed Carry License Violation",
		},
		{ value: "NON - CRIMINAL", label: "Non - Criminal" },
		{ value: "HUMAN TRAFFICKING", label: "Human Trafficking" },
		{ value: "OBSCENITY", label: "Obscenity" },
		{ value: "CRIMINAL SEXUAL ASSAULT", label: "Criminal Sexual Assault" },
		{ value: "PUBLIC INDECENCY", label: "Public Indecency" },
		{ value: "OTHER NARCOTIC VIOLATION", label: "Other Narcotic Violation" },
		{ value: "NON-CRIMINAL", label: "Non-Criminal" },
		{ value: "HOMICIDE", label: "Homicide" },
		{
			value: "NON-CRIMINAL (SUBJECT SPECIFIED)",
			label: "Non-Criminal (Subject Specified)",
		},
		{ value: "RITUALISM", label: "Ritualism" },
	];

	const districtOptions = [
		{ value: 1, label: "Near South Side" },
		{ value: 2, label: "Douglas" },
		{ value: 3, label: "Woodlawn" },
		{ value: 4, label: "South Chicago" },
		{ value: 5, label: "Pullman" },
		{ value: 6, label: "Chatham" },
		{ value: 7, label: "Englewood" },
		{ value: 8, label: "Gage Park" },
		{ value: 9, label: "New City" },
		{ value: 10, label: "Lower West Side" },
		{ value: 11, label: "East Garfield Park" },
		{ value: 12, label: "Near West Side" },
		{ value: 14, label: "West Town" },
		{ value: 15, label: "West Garfield Park" },
		{ value: 16, label: "Jefferson Park" },
		{ value: 17, label: "North Center" },
		{ value: 18, label: "Near North Side" },
		{ value: 19, label: "Lake View" },
		{ value: 20, label: "Uptown" },
		{ value: 21, label: "Loop" },
		{ value: 22, label: "Beverly" },
		{ value: 24, label: "Edgewater" },
		{ value: 25, label: "Humboldt Park" },
		{ value: 31, label: "Dunning" },
	];

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			selectedCrime: selectedCrime.map((crime) => crime.value),
			selectedDistrict: selectedDistrict.map((district) => district.value),
			fromDate: fromDate.toISOString().split("T")[0],
			toDate: toDate.toISOString().split("T")[0],
		};
		try {
			const response = await fetch("/getMap", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((response) => response.text())
				.then((data) => {
					// Extract the map URL from the HTML
					const regex = /var mapFile = "(.*?)"/;
					const match = data.match(regex);
					const mapFileUrl = match ? match[1] : null;

					// Assuming the response contains the HTML template
					// const template = await response.text();
					// const mapFile = await response.text();
					// console.log(map);
					setMapUrl(mapFileUrl);
				});
			console.log(mapUrl);

			// Render the template
			// document.getElementById("mapContainer").innerHTML = template;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>Prediction Page</h1>
			<br></br>
			<h1 className="text-center">Mapping</h1>
			<form onSubmit={handleSubmit}>
				<div className="col-lg-9 col-md-9 col-md-6 form-group">
					<label htmlFor="crime">Crime Type:</label>
					<Select
						id="crime"
						isMulti
						options={crimeOptions}
						onChange={(selectedOptions) => setSelectedCrime(selectedOptions)}
						placeholder="Select a crime type"
					/>
					<label htmlFor="district">District:</label>
					<Select
						id="district"
						isMulti
						options={districtOptions}
						onChange={(selectedOptions) => setSelectedDistrict(selectedOptions)}
						placeholder="Select a crime type"
					/>
				</div>

				<div className="col-md-3 col-sm-6 form-group">
					<label>From:</label>
					<DatePicker
						selected={fromDate}
						onChange={(date) => setFromDate(date)}
						dateFormat="yyyy/MM/dd"
					/>
					<br></br>
					<br />
					<label>To:</label>
					<DatePicker
						selected={toDate}
						onChange={(date) => setToDate(date)}
						dateFormat="yyyy/MM/dd"
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			<div id="map">
				{mapUrl && (
					<iframe src={mapUrl} width="100%" height="500px" title="Crime Map" />
				)}
			</div>
		</div>
	);
};

export default MappingPage;
