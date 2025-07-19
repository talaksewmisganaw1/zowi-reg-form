import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function MedicalInformation({medicalClients, handleChange, medicalResultIndex, setMedicalResultIndex, medicalResult, setMedicalResult}) {

  const handleBackBtn = () => {
    setMedicalResult(false);
    setMedicalResultIndex(null)
  }


  return (
    <div className="medical-information">
        <button className="back-btn" onClick={() => {handleBackBtn()}}><FontAwesomeIcon icon={faArrowLeft} /></button>
        <h1>ከህክምና በኋላ በክትትል የተገኙ የታካሚው የህክምና ውጤቶች</h1>
        <h2>(በተቋሙ ባለሙያዎች ብቻ የሚሞላ)</h2>
        <div className="inputs">
          <p className="name-in-result-page"><span>ስም፡ </span>{medicalClients[medicalResultIndex].name}</p>
          <label className="information-label-and-input"><p className="labels">ለታካሚው የተደወለበት ቀን፡ </p><input type="date" className="callingday-input" value={medicalClients[medicalResultIndex].callingDate} onChange={(e) => {handleChange(medicalResultIndex, "callingDate", e.currentTarget.value)}} /></label>
          <label className="information-label-and-input"><p className="labels">የተገኘው ውጤት፡ </p><textarea className="lined-textarea" value={medicalClients[medicalResultIndex].resultFound} onChange={(e) => {handleChange(medicalResultIndex, "resultFound", e.currentTarget.value)}}></textarea></label>
          <label className="information-label-and-input"><p className="labels">የተወሰደ ማስተካከያ፡ </p><textarea className="lined-textarea" value={medicalClients[medicalResultIndex].correctionTaken} onChange={(e)=>{handleChange(medicalResultIndex, "correctionTaken", e.currentTarget.value)}}></textarea></label>
          <label className="information-label-and-input"><p className="labels">ማጠቃለያ፡ </p><textarea className="lined-textarea" value={medicalClients[medicalResultIndex].summary} onChange={() => {handleChange(medicalResultIndex, "summary", e.currentTarget.value)}}></textarea></label>
          <label className="information-label-and-input"><p className="labels">የቀጠሮ ቀን፡ </p><input type="date" className="callingday-input" value={medicalClients[medicalResultIndex].callingDate} onChange={(e) => {handleChange(medicalResultIndex, "callingDate", e.currentTarget.value)}} /></label>
        </div>
    </div>
  )
}

export default MedicalInformation
