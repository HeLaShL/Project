import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css','../app.component.css']
})
 //export class Questions{
   //id:number;
   //question:string;

 //}
export class Screen3Component implements OnInit {
  listQuestions:any[]=[];
  listResponses:number[]=[];
  listResponsesQuestion4:number[]=[];
  optionsQuestion4:any[]=[];
  constructor(private httpClient:HttpClient) {     
    this.httpClient.get("http://localhost:3004/questions")
    .subscribe((data:any[])=>{
      console.log(data);
      if (data.length){
        for (let index = 0; index < data.length; index++) {
          var obj: any = {};
          obj.id=data[index].id;
          obj.question=data[index].text;
          var listOptions:any[]=[];
          
          debugger;
          for (let j = 0; j < data[index].options.length; j++) {
            var o=data[index].options[j];
            var option: any = {};
            option.id=o.id;
            option.text=o.text;
            listOptions[j]=option;
          }
          obj.options=listOptions;
          this.listQuestions[index]=obj;
          
        }
       
      }
    });
    this.httpClient.get("http://localhost:3004/question4Options")
    .subscribe((data:any[])=>{
      console.log(data);
      if (data.length){
        for (let index = 0; index < data.length; index++) {
          var obj: any = {};
          obj.id=data[index].id;
          obj.text=data[index].text;
          this.optionsQuestion4[index]=obj;
          
        }
       
      }
    });
  }

  ngOnInit() {
    
  }
  navigateToHome(){
    (<HTMLDivElement> document.getElementById("mainContainer")).className="";
    
  }
  showForm(){
    (<HTMLDivElement> document.getElementById("mainContainer")).className="";
    
  }
  onchangeRadioBtn(questionid,questionoption){
      debugger;
      document.getElementById("response_"+questionid).innerHTML=questionoption;
      if (this.listResponses.indexOf(questionid)==-1){
        this.listResponses.push(questionid);
      }
      if (this.listResponses.length==this.listQuestions.length && 
        this.optionsQuestion4.length== this.listResponsesQuestion4.length){
          //enable btn
          document.getElementById("btn-save-form").classList.remove("btn-disabled");
  }
}
onchangeQuestion4(optionid,questionoption){
  debugger;
  var e = (document.getElementById("dropdown"+optionid)) as HTMLSelectElement;
  document.getElementById("response4_"+optionid).innerHTML=e.options[e.selectedIndex].innerText;
  // document.getElementById("mySelect").value="";
  if (this.listResponsesQuestion4.indexOf(optionid)==-1){
    this.listResponsesQuestion4.push(optionid);
  }
  if (this.listResponses.length==this.listQuestions.length && 
    this.optionsQuestion4.length== this.listResponsesQuestion4.length){
  //enable btn
  document.getElementById("btn-save-form").classList.remove("btn-disabled");
}}
saveForm(){
  document.getElementById("questions").classList.add("hiddenContainer");
  document.getElementById("responses").classList.remove("hiddenContainer");
  
}
}
