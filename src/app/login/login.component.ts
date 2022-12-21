import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private httpClient: HttpClient, private matSnackBar: MatSnackBar, private router: Router){}

  ngOnInit(): void {
      
  }
  onLogin(loginForm: NgForm){
    
    console.log(loginForm.value);
    
    this.httpClient.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`,
    {...loginForm.value, returnSecureToken: true})
    .subscribe(
      (response) => {
        console.log(response),
          this.matSnackBar.open("Successfully Logged in","OK",{
            verticalPosition: "top",
            horizontalPosition: "center",
            panelClass:"bg-success"
          })
          sessionStorage.setItem("name",loginForm.value.email)
          this.router.navigate(['./','quiz']);
      },
      (error)=> {
        let errorMessage = "Signup Failed" + error.error.error.message;
      
        this.matSnackBar.open(errorMessage,"OK",{
          verticalPosition: "top",
          horizontalPosition: "center",
          panelClass:"bg-danger"
        })
      }
    );
  }
}
    


