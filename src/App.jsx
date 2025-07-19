import { useState } from 'react';
import './App.css'
import Table from './TableComponent'
import MedicalInformation from './MedicalInformation'; 


function App() {
  const [medicalClients, setMedicalClients] = useState([
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
                bloodPressureDuration: {year: 0, month: 0, day: 0},
                diabetesDuration: {year: 0, month: 0, day: 0},
                cholestroleDuration: {year: 0, month: 0, day: 0},
                obesityDuration: {year: 0, month: 0, day: 0},
                otherDuration:{year: 0, month: 0, day: 0}
            },
            doYouTakeMedicine: "",
            typeOfMedicine: "",
            nameOfTheTablet: "",
            bloodPressureReading: "",
            bloodSugarLevel: "",
            weight: "",
            waistSize: "",
            phoneNumber: "0944444444",
            callingDate: "",
            resultFound: "",
            correctionTaken: "",
            summary: "አንጀሊና "
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
                bloodPressureDuration: {year: 0, month: 0, day: 0},
                diabetesDuration: {year: 0, month: 0, day: 0},
                cholestroleDuration: {year: 0, month: 0, day: 0},
                obesityDuration: {year: 0, month: 0, day: 0},
                otherDuration:{year: 0, month: 0, day: 0}
            },
            doYouTakeMedicine: "",
            typeOfMedicine: "",
            nameOfTheTablet: "",
            bloodPressureReading: "",
            bloodSugarLevel: "",
            weight: "",
            waistSize: "",
            phoneNumber: "0933333333",
            callingDate: "",
            resultFound: "ትርሃስ የተገኘባት ችግር የለም",
            correctionTaken: "",
            summary: ""
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
            phoneNumber: "0922222222",
            callingDate: "",
            resultFound: "ጫላ ደህና ነው",
            correctionTaken: "",
            summary: ""
        }, 
    {
            id: 1,
            name: "abebe",
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
                bloodPressureDuration: {year: 0, month: 0, day: 0},
                diabetesDuration: {year: 0, month: 0, day: 0},
                cholestroleDuration: {year: 0, month: 0, day: 0},
                obesityDuration:{year: 0, month: 0, day: 0},
                otherDuration: {year: 0, month: 0, day: 0}
            },
            doYouTakeMedicine: "",
            typeOfMedicine: "",
            nameOfTheTablet: "",
            bloodPressureReading: "",
            bloodSugarLevel: "",
            weight: "",
            waistSize: "",
            phoneNumber: "0911111111",
            callingDate: "",
            resultFound: "",
            correctionTaken: "አበበ ተሽሎታል",
            summary: ""
        },  
  ]);
  const [medicalResult, setMedicalResult] = useState(false);
  const [medicalResultIndex, setMedicalResultIndex] = useState(2);


  const handleChange = (index, field, value, name, duration) => {  
    {name? console.log(name): console.log("no name")}
    const updated = [...medicalClients];
    (name && duration)? updated[index][field][name][duration] = value: (name && !duration)? updated[index][field][name] = value: updated[index][field] = value;

    // updated[index][field] = value;
    setMedicalClients(updated);
  }


  return (
    <div>
      {!medicalResult && 
        <div className="container">
          <h1 className="main-header">ዞዊ የባሕል ህክምና ማዕከል</h1>
          <h2 className="sub-header">የታካሚዎች የግል መረጃ መመዝገቢያ ቅጽ</h2>
          <Table medicalClients={medicalClients} setMedicalClients={setMedicalClients} medicalResult={medicalResult} setMedicalResult={setMedicalResult} handleChange={handleChange} medicalResultIndex={medicalResultIndex} setMedicalResultIndex={setMedicalResultIndex} />
        </div>
      }
      {medicalResult && <MedicalInformation medicalClients={medicalClients} handleChange={handleChange} medicalResultIndex={medicalResultIndex} setMedicalResultIndex={setMedicalResultIndex} medicalResult={medicalResult} setMedicalResult={setMedicalResult} />}
    </div>
  )
}

export default App
