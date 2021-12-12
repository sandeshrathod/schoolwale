import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalUrl } from 'src/app/comman/global_variable';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css']
})
export class OtpverificationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  sentmail(mail:string){

        let headers = new Headers();
        headers.append('Contetn-Type','application/json');  
    
        //const link:string = GlobalUrl+'users/mailer'; 
        
        //alert('hello');
          
             this.http.post('http://localhost:8000/users/mailer',JSON.stringify({'gmail':mail}))
            .subscribe((result)=>{
              alert(result);      
            });
    
      }

}
