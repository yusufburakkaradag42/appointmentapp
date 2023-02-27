import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { doctorData } from "../helper/data"
import { appointmentData } from "../helper/data"

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData)
  const [appointment, setAppointmend] = useState(appointmentData)

 
    
  

  console.log(doctors)
  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors doctors={doctors} 
      appointment={appointment}
      setappointmend={setAppointmend}/>
      <AppointmentList />
    </main>
  )
  }

export default Home
