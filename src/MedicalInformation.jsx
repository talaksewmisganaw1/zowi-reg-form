import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function MedicalInformation({medicalClients, handleChange, medicalResultIndex, setMedicalResultIndex, medicalResult, setMedicalResult}) {

  const [appointments, setAppointments] = useState(medicalClients[medicalResultIndex].appointmentDates)

  const handleBackBtn = () => {
    setMedicalResult(false);
    setMedicalResultIndex(null)
  }

  const deleteAppointment = (i) => {
    const modifiedArr = [...appointments];
    modifiedArr.splice(i, 1)
    setAppointments(modifiedArr)
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
          <label className="information-label-and-input appointment-section">
            <p className="labels">የቀጠሮ ቀን፡ </p>
            <div className='appointment-container'>
              {/* {console.log(medicalClients[medicalResultIndex].appointmentDates.forEach(item => console.log(item)))} */}
              {console.log(appointments)}
              <div className="appointments">
                {appointments.length > 0? appointments.map((element, i) => (
                  <div className="appointment" key={i}>
                    <span className="appointment-number">{i + 1}.</span><span className='appointment-date'>{element}</span><span className='delete-icon' onClick={() => {deleteAppointment(i)}}><FontAwesomeIcon icon={faTrash} /></span>
                  </div>
                )): <ul><li className='no-appointment'>እስካሁን የተሰጠ ቀጠሮ የለም።</li></ul>}
              </div>
              <div className="appointment-input-field">
                <span>አዲስ የቀጠሮ ቀን፡ </span>
                <input type="date" className="callingday-input" />
                <button className="add-appointment-btn" onClick={(e) => {setAppointments([...appointments, e.currentTarget.previousElementSibling.value])}}> <FontAwesomeIcon icon={faPlus} /> </button>
              </div>
            </div>
          </label>
        </div>
  </div>
  )
}

export default MedicalInformation
