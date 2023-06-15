import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PredictionPage = () => {
	const [selectedCrime, setSelectedCrime] = useState(null);
	const [selectedDistrict, setSelectedDistrict] = useState(null);
	const [hour, setHour] = useState(null);
	const [selectedDate, setSelectedDate] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Prepare the data to send to the backend
		const data = {
			selectedCrime: selectedCrime.value,
			selectedDistrict: selectedDistrict.value,
			hour,
			selectedDate: selectedDate.toISOString().split("T")[0],
		};

		try {
			// Send the data to the Flask backend
			fetch("/getPrediction", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			})
				.then((response) => response.text())
				.then((html) => {
					// Render the returned HTML template
					const parser = new DOMParser();
					const doc = parser.parseFromString(html, "text/html");
					const mapContainer = document.getElementById("mapContainer");
					mapContainer.innerHTML = "";
					mapContainer.appendChild(doc.documentElement);
				});
		} catch (error) {
			// Handle network error
			console.error("Network error:", error);
		}
		console.log(data);
		console.log(JSON.stringify(data));
	};

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

	const hourOptions = [];

	for (let i = 0; i <= 23; i++) {
		hourOptions.push({ value: i, label: i.toString() });
	}

	return (
		<div>
			<h1>Prediction Page</h1>
			<br></br>
			<h1 className="text-center">Prediction Page</h1>
			<form onSubmit={handleSubmit}>
				<div className="col-md-3 col-sm-6 form-group">
					<label htmlFor="hour">Hour:</label>
					<Select
						id="hour"
						options={hourOptions}
						onChange={(selectedOption) => setHour(selectedOption.value)}
						placeholder="Select hour"
					/>
				</div>

				<div className="col-md-3 col-md-6 form-group">
					<label htmlFor="crime">Crime Type:</label>
					<Select
						id="crime"
						options={crimeOptions}
						onChange={(selectedOption) => setSelectedCrime(selectedOption)}
						placeholder="Select a crime type"
					/>
				</div>

				<div className="col-md-3 col-md-6 form-group">
					<label htmlFor="district">District:</label>
					<Select
						id="district"
						options={districtOptions}
						onChange={(selectedOption) => setSelectedDistrict(selectedOption)}
						placeholder="Select a crime type"
					/>
				</div>
				<div className="col-md-3 col-sm-6 form-group">
					<label>Date:</label>
					<DatePicker
						selected={selectedDate}
						onChange={(date) => setSelectedDate(date)}
						dateFormat="yyyy/MM/dd"
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
				<div id="mapContainer"></div>
			</form>
		</div>
	);
};

export default PredictionPage;
