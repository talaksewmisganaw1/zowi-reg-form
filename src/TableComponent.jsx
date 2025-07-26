import { useState, useEffect } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Searchbar from "./Searchbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



function Table({ medicalClients, setMedicalClients, medicalResult, setMedicalResult, handleChange, medicalResultIndex, setMedicalResultIndex }) {
  

  const [searchValue, setSearchValue] = useState("");
  
  const filterdItems = searchValue? medicalClients.filter((client) => client.name.startsWith(searchValue) || client.phoneNumber.startsWith(searchValue)): medicalClients;

  const addrow = () => {
    setMedicalClients([ 
        {
            id: medicalClients.length + 1,
            name: "",
            phoneNumber: "",
            age: "",
            sex: "",
            location: "",
            diseaseType: {
                highBloodPressure: false,
                diabetes: false,
                cholestrole: false,
                obesity: false,
                other: false
            },
            duration: {
                bloodPressureDuration: {year: 0, month: 0, day: 0},
                diabetesDuration: {year: 0, month: 0, day: 0},
                cholestroleDuration: {year: 0, month: 0, day: 0},
                obesityDuration: {year: 0, month: 0, day: 0},
                otherDuration: {year: 0, month: 0, day: 0}
            },
            doYouTakeMedicine: "",
            typeOfMedicine: "",
            nameOfTheTablet: "",
            bloodPressureReading: "",
            bloodSugarLevel: "",
            weight: "",
            waistSize: "",
            callingDate: null,
            resultFound: "",
            correctionTaken: "",
            summary: "",
            followupNote: "",
            appointmentDates: []
        }, ...medicalClients
    ]);
  };

  const handleSearch = (e) => {
    setSearchValue(e.currentTarget.value);
  }

  const handleMedicalResultView = (index) => {
    setMedicalResult(true);
    setMedicalResultIndex(index)
  }

  return (
    <div className="table-and-btn">
        <div className="btn-and-search">
            <Searchbar handleSearch={handleSearch} searchValue={searchValue}/>
            <button className="add-btn" onClick={addrow}><i className="fa-solid fa-pencil"></i><span>አዲስ ታካሚ</span></button>
        </div>
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr className="border-1">
                        <th></th>
                        <th className="table-header card-number">ካርድ ቁጥር</th>
                        <th className="table-header">ስም</th>
                        <th className="table-header">ስልክ ቁጥር</th>
                        <th className="table-header">እድሜ</th>
                        <th className="table-header">ፆታ</th>
                        <th className="table-header">የመጡበት አካባቢ</th>
                        <th className="table-header">የሚታከሙት በሽታ አይነት</th>
                        <th className="table-header">በሽታው ከተከሰተ ምን ያክል ጊዜ ሆነ?</th>
                        <th className="table-header">መድኃኒት ይወስዳሉን?</th>
                        <th className="table-header">ከስኳር በሽታ መድኃኒት የሚወስዱ ከሆነ የመድኃኒቱ አይነት</th>
                        <th className="table-header">የመድኃኒቱ አይነት የሚዋጥ ከሆነ የመድኃኒቱ ስምና መጠን</th>
                        <th className="table-header">የስኳር መጠን(የዕለት)</th>
                        <th className="table-header">የግፊት መጠን</th>
                        <th className="table-header">የክብደት መጠን</th>
                        <th className="table-header">የሆድ ዙሪያ መጠን</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        filterdItems.length > 0? (filterdItems.map((row, index) => (
                        <tr className="client-information" key={row.id}>
                            <td className="med-icon-container"><button className="med-icon" onClick={() => handleMedicalResultView(index)}><FontAwesomeIcon icon={faFilePen} /></button></td>
                            <td className="table-data card-number">
                                {row.id < 1000? String(row.id).padStart(4,'0'): row.id} 
                            </td>
                            <td className="table-data">
                                <input type="text" value={row.name} onChange={(e) => {handleChange(index, "name", e.target.value)}} placeholder="የታካሚ ስም" className="name"/>
                            </td>
                            <td className="table-data">
                                <input type="number" value={row.phoneNumber} onChange={(e) => {handleChange(index, "phoneNumber", e.target.value)}} placeholder="ስልክ ቁጥር" className="number"/>
                            </td>
                            <td className="table-data">
                                <input type="number" value={row.age} onChange={(e) => {handleChange(index, "age", e.target.value)}} placeholder="የታካሚ እድሜ" className="age"/>
                            </td>
                            <td className="table-data">
                                <div className="sex-container radio-btn-container">
                                    <label>
                                        <input
                                        type="radio"
                                        name={`sex-${row.id}`}
                                        value="male"
                                        checked={row.sex === "male"}
                                        onChange={(e) => handleChange(index, "sex", e.target.value)}
                                        />
                                        ወንድ
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        name={`sex-${row.id}`}
                                        value="female"
                                        checked={row.sex === "female"}
                                        onChange={(e) => handleChange(index, "sex", e.target.value)}
                                        />
                                        ሴት
                                    </label>
                                </div>
                            </td>
                            <td className="table-data">
                                <input type="text" value={row.location} onChange={(e) => {handleChange(index, "location", e.target.value)}}/>
                            </td>
                            <td className="table-data">
                                <div className="disease-type-container checkbox-container">
                                    <label>
                                        <input
                                        type="checkbox"
                                        name={`highBloodPressure`}
                                        checked={row.diseaseType.highBloodPressure}
                                        onChange={(e) => handleChange(index, "diseaseType", e.target.checked, e.target.name)}
                                        />
                                        ደም ግፊት
                                    </label>
                                    <label>
                                        <input
                                        type="checkbox"
                                        name={`diabetes`}
                                        checked={row.doYouTakeMedicine.diabetes}
                                        onChange={(e) => handleChange(index, "diseaseType", e.target.checked, e.target.name)}
                                        />
                                        ስኳር
                                    </label>
                                    <label>
                                        <input
                                        type="checkbox"
                                        name={`cholestrole`}
                                        value="cholestrole"
                                        checked={row.doYouTakeMedicine.cholestrole}
                                        onChange={(e) => handleChange(index, "diseaseType", e.target.checked, e.target.name)}
                                        />
                                        ኮሌስትሮል
                                    </label>
                                    <label>
                                        <input
                                        type="checkbox"
                                        name={`obesity`}
                                        value="obesity"
                                        checked={row.doYouTakeMedicine.obesity}
                                        onChange={(e) => handleChange(index, "diseaseType", e.target.checked, e.target.name)}
                                        />
                                        ከመጠን ያለፈ ውፍረት
                                    </label>
                                    <label>
                                        <input
                                        type="checkbox"
                                        name={`other`}
                                        value="other"
                                        checked={row.doYouTakeMedicine.other}
                                        onChange={(e) => handleChange(index, "diseaseType", e.target.checked, e.target.name)}
                                        />
                                        ሌላ
                                    </label>
                                </div>
                            </td>
                            <td className="table-data">
                                <div className="duration-container checkbox-container">
                                    {medicalClients[index].diseaseType.highBloodPressure && 
                                        <div className="duration">
                                            ደም ግፊት ከተከሰተ: 
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`bloodPressureDuration`}
                                                    value={row.duration.bloodPressureDuration.year}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.year)}
                                                />
                                                አመት
                                            </label>
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`bloodPressureDuration`}
                                                    value={row.duration.bloodPressureDuration.month}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.month)}
                                                />
                                                ወር
                                            </label>
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`bloodPressureDuration`}
                                                    value={row.duration.bloodPressureDuration.day}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.day)}
                                                />
                                                ቀን 
                                            </label>
                                        </div>
                                    }
                                    
                                    {medicalClients[index].diseaseType.diabetes &&
                                        <div className="duration">
                                            ስኳር ከተከሰተ: 
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`diabetesDuration`}
                                                    value={row.duration.diabetesDuration.year}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.year)}
                                                />
                                                አመት 
                                            </label>
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`diabetesDuration`}
                                                    value={row.duration.diabetesDuration.month}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.month)}
                                                />
                                                ወር
                                            </label>
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`diabetesDuration`}
                                                    value={row.duration.diabetesDuration.day}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.day)}
                                                />
                                                ቀን 
                                            </label>
                                        </div>
                                    }
                                    {medicalClients[index].diseaseType.cholestrole &&
                                        <div className="duration">
                                            ኮሌስትሮል ከተከሰተ:
                                             <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`cholestroleDuration`}
                                                    value={row.duration.cholestroleDuration.year}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.year)}
                                                />
                                                አመት 
                                            </label>
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`cholestroleDuration`}
                                                    value={row.duration.cholestroleDuration.month}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.month)}
                                                />
                                                ወር 
                                            </label>
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`cholestroleDuration`}
                                                    value={row.duration.cholestroleDuration.day}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.day)}
                                                />
                                                ቀን
                                            </label>
                                        </div>
                                    }
                                    {medicalClients[index].diseaseType.obesity &&
                                        <div className="duration">
                                            ከመጠን ያለፈ ውፍረት ከተከሰተ: 
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`obesityDuration`}
                                                    value={row.duration.obesityDuration.year}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.year)}
                                                />
                                                አመት 
                                            </label>
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`obesityDuration`}
                                                    value={row.duration.obesityDuration.month}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.month)}
                                                />
                                                ወር
                                            </label>
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`obesityDuration`}
                                                    value={row.duration.obesityDuration.day}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.day)}
                                                />
                                                ቀን
                                            </label>
                                        </div>
                                    }
                                    {medicalClients[index].diseaseType.other &&
                                        <div className="duration">
                                            ሌላ: 
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`otherDuration`}
                                                    value={row.duration.otherDuration.year}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.year)}
                                                />
                                                አመት
                                            </label>
                                            <label className="duration-label">
                                                <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`otherDuration`}
                                                    value={row.duration.otherDuration.month}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.month)}
                                                />
                                                ወር 
                                            </label>
                                            <label className="duration-label">
                                               <input
                                                    className="duration-input"
                                                    type="number"
                                                    name={`otherDuration`}
                                                    value={row.duration.otherDuration.day}
                                                    onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name, e.target.name.day)}
                                                />
                                                ቀን 
                                            </label>
                                        </div>
                                    }
                                </div>
                            </td>
                            <td className="table-data">
                                <div className="radio-btn-container">
                                    <label>
                                        <input
                                        type="radio"
                                        name={`doYouTakeMedicine-${row.id}`}
                                        value="yes"
                                        checked={row.doYouTakeMedicine === "yes"}
                                        onChange={(e) => handleChange(index, "doYouTakeMedicine", e.target.value)}
                                        />
                                        አዎ
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        name={`doYouTakeMedicine-${row.id}`}
                                        value="no"
                                        checked={row.doYouTakeMedicine === "no"}
                                        onChange={(e) => handleChange(index, "doYouTakeMedicine", e.target.value)}
                                        />
                                        አይ
                                    </label>
                                </div>
                            </td>
                            <td className="table-data">
                                <div className="radio-btn-container">
                                    <label>
                                        <input
                                        type="radio"
                                        name={`typeOfMedicine-${row.id}`}
                                        value="tablet"
                                        checked={row.typeOfMedicine === "tablet"}
                                        onChange={(e) => handleChange(index, "typeOfMedicine", e.target.value)}
                                        />
                                        የሚዋጥ እንክብል
                                    </label>
                                    <label>
                                        <input
                                        type="radio"
                                        name={`typeOfMedicine-${row.id}`}
                                        value="insulin"
                                        checked={row.typeOfMedicine === "insulin"}
                                        onChange={(e) => handleChange(index, "typeOfMedicine", e.target.value)}
                                        />
                                        መርፌ(ኢንሱሊን)
                                    </label>
                                </div>
                            </td>
                            <td className="table-data">
                                <input type="text" value={row.nameOfTheTablet} onChange={(e) => {handleChange(index, "nameOfTheTablet", e.target.value)}}/>
                            </td>
                            <td className="table-data">
                                <input type="text" value={row.bloodPressureReading} onChange={(e) => {handleChange(index, "bloodPressureReading", e.target.value)}}/>
                            </td>
                            <td className="table-data">
                                <input type="text" value={row.bloodSugarLevel} onChange={(e) => {handleChange(index, "bloodSugarLevel", e.target.value)}}/>
                            </td>
                            <td className="table-data">
                                <input type="text" value={row.weight} onChange={(e) => {handleChange(index, "weight", e.target.value)}}/>
                            </td>
                            <td className="table-data">
                                <input type="text" value={row.waistSize} onChange={(e) => {handleChange(index, "waistSize", e.target.value)}}/>
                            </td>
                        </tr> 
                        ))): <tr style={{fontSize: "1.3rem", width: "100%"}}><td style={{padding: ".2rem .2rem .2rem 3rem", color: "red"}} colSpan="5"> NO MATCH FOUND! </td></tr>
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table
