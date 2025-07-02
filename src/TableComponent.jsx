import { useState } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';



function Table() {
  const [medicalClients, setMedicalClients] = useState([
    {
            id: 1,
            name: "አበበ ፍራንሲስኮ",
            age: "64",
            sex: "male",
            location: "",
            diseaseType: {
                highBloodPressure: false,
                diabetes: false,
                cholestrole: false,
                obesity: false,
                other: false
            },
            duration: {
                bloodPressureDuration: "",
                diabetesDuration: "",
                cholestroleDuration: "",
                obesityDuration: "",
                otherDuration: ""
            },
            doYouTakeMedicine: "",
            typeOfMedicine: "",
            nameOfTheTablet: "",
            bloodPressureReading: "",
            bloodSugarLevel: "",
            weight: "",
            waistSize: "",
            phoneNumber: ""
        },
        {
            id: 2,
            name: "ጫላ መኮንን",
            age: "76",
            sex: "male",
            location: "",
            diseaseType: {
                highBloodPressure: false,
                diabetes: false,
                cholestrole: false,
                obesity: false,
                other: false
            },
            duration: {
                bloodPressureDuration: "",
                diabetesDuration: "",
                cholestroleDuration: "",
                obesityDuration: "",
                otherDuration: ""
            },
            doYouTakeMedicine: "",
            typeOfMedicine: "",
            nameOfTheTablet: "",
            bloodPressureReading: "",
            bloodSugarLevel: "",
            weight: "",
            waistSize: "",
            phoneNumber: ""
        }, 
        {
            id: 3,
            name: "ትርሃስ ወርቁ",
            age: "55",
            sex: "female",
            location: "",
            diseaseType: {
                highBloodPressure: false,
                diabetes: false,
                cholestrole: false,
                obesity: false,
                other: false
            },
            duration: {
                bloodPressureDuration: "",
                diabetesDuration: "",
                cholestroleDuration: "",
                obesityDuration: "",
                otherDuration: ""
            },
            doYouTakeMedicine: "",
            typeOfMedicine: "",
            nameOfTheTablet: "",
            bloodPressureReading: "",
            bloodSugarLevel: "",
            weight: "",
            waistSize: "",
            phoneNumber: ""
        },
        {
            id: 4,
            name: "አንጀሊና ቢክሰኝ",
            age: "32",
            sex: "female",
            location: "",
            diseaseType: {
                highBloodPressure: false,
                diabetes: false,
                cholestrole: false,
                obesity: false,
                other: false
            },
            duration: {
                bloodPressureDuration: "",
                diabetesDuration: "",
                cholestroleDuration: "",
                obesityDuration: "",
                otherDuration: ""
            },
            doYouTakeMedicine: "",
            typeOfMedicine: "",
            nameOfTheTablet: "",
            bloodPressureReading: "",
            bloodSugarLevel: "",
            weight: "",
            waistSize: "",
            phoneNumber: ""
        }
  ]);

  const addrow = () => {
    setMedicalClients([
        ...medicalClients, 
        {
            id: medicalClients.length + 1,
            name: "",
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
                bloodPressureDuration: "",
                diabetesDuration: "",
                cholestroleDuration: "",
                obesityDuration: "",
                otherDuration: ""
            },
            doYouTakeMedicine: "",
            typeOfMedicine: "",
            nameOfTheTablet: "",
            bloodPressureReading: "",
            bloodSugarLevel: "",
            weight: "",
            waistSize: "",
            phoneNumber: ""
        }, 
    ]);
  };

  const handleChange = (index, field, value, name) => {
    const updated = [...medicalClients];
    name? updated[index][field][name] = value: updated[index][field] = value;
    setMedicalClients(updated);
  }

  return (
    <div className="table-and-btn">
        <button className="add-btn" onClick={addrow}><i className="fa-solid fa-pencil"></i><span>አዲስ ታካሚ</span></button>
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr className="border-1">
                        <th className="table-header card-number">ካርድ ቁጥር</th>
                        <th className="table-header">ስም</th>
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
                        <th className="table-header">ስልክ ቁጥር</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        medicalClients.map((row, index) => (
                        <tr className="client-information" key={row.id}>
                            <td className="table-data card-number">
                                {row.id < 1000? String(row.id).padStart(4,'0'): row.id} 
                            </td>
                            <td className="table-data">
                                <input type="text" value={row.name} onChange={(e) => {handleChange(index, "name", e.target.value)}}/>
                            </td>
                            <td className="table-data">
                                <input type="number" value={row.age} onChange={(e) => {handleChange(index, "age", e.target.value)}} />
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
                                        <label>
                                            ደም ግፊት ከተከሰተ: 
                                            <input
                                            type="text"
                                            name={`bloodPressureDuration`}
                                            value={row.duration.bloodPressureDuration}
                                            onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name)}
                                            />
                                        </label>
                                    }
                                    
                                    {medicalClients[index].diseaseType.diabetes &&
                                        <label>
                                            ስኳር ከተከሰተ: 
                                            <input
                                            type="text"
                                            name={`diabetesDuration`}
                                            value={row.duration["diabetesDuration"]}
                                            onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name)}
                                            />
                                        </label>
                                    }
                                    {medicalClients[index].diseaseType.cholestrole &&
                                        <label>
                                            ኮሌስትሮል ከተከሰተ: 
                                            <input
                                            type="text"
                                            name={`cholestroleDuration`}
                                            value={row.duration["cholestroleDuration"]}
                                            onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name)}
                                            />
                                        </label>
                                    }
                                    {medicalClients[index].diseaseType.obesity &&
                                        <label>
                                            ከመጠን ያለፈ ውፍረት ከተከሰተ: 
                                            <input
                                            type="text"
                                            name={`obesityDuration`}
                                            value={row.duration["obesityDuration"]}
                                            onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name)}
                                            />
                                        </label>
                                    }
                                    {medicalClients[index].diseaseType.other &&
                                        <label>
                                            ሌላ: 
                                            <input
                                            type="text"
                                            name={`otherDuration`}
                                            value={row.duration["otherDuration"]}
                                            onChange={(e) => handleChange(index, "duration", e.target.value, e.target.name)}
                                            /> 
                                        </label>
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
                            <td className="table-data">
                                <input type="number" value={row.phoneNumber} onChange={(e) => {handleChange(index, "phoneNumber", e.target.value)}}/>
                            </td>
                        </tr> 
                        )) 
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Table
