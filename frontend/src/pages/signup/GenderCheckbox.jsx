const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className="flex gap-6 mt-3 mb-4">
			{/* Male */}
			<label
				className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border transition 
				${selectedGender === "male" ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white" : "border-slate-400 text-slate-200"}`}
			>
				<input
					type="radio"
					name="gender"
					value="male"
					checked={selectedGender === "male"}
					onChange={() => onCheckboxChange("male")}
					className="hidden"
				/>
				Male
			</label>

			{/* Female */}
			<label
				className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border transition 
				${selectedGender === "female" ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white" : "border-slate-400 text-slate-200"}`}
			>
				<input
					type="radio"
					name="gender"
					value="female"
					checked={selectedGender === "female"}
					onChange={() => onCheckboxChange("female")}
					className="hidden"
				/>
				Female
			</label>
		</div>
	);
};

export default GenderCheckbox;
