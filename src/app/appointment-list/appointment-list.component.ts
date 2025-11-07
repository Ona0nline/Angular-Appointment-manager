import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
// Lifecycle hook
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

// When creating attributes, can either create constructor or assign default vals
export class AppointmentListComponent implements OnInit {
  


  newAppointmentTitle: string = ''
  newAppointmentDate: Date = new Date()
  appointments: Appointment[] = []

  // For loading data that should be loaded whenthe component gets created
    ngOnInit(): void {
      let savedApps = localStorage.getItem("appointments")

      this.appointments = savedApps ? JSON.parse(savedApps) : []
    
  }

  addAppointment(){
    
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate

      }
      // Transform this into json and then store into browser local storage
        this.appointments.push(newAppointment)
        this.newAppointmentTitle = ""
        this.newAppointmentDate = new Date()

        localStorage.setItem("appointments", JSON.stringify(this.appointments))

    }

    
  }
  
  deleteAppointment(index: number){
      this.appointments.splice(index, 1)
      // To update the array
      localStorage.setItem("appointments", JSON.stringify(this.appointments))

    }

}
