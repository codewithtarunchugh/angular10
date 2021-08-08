import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

@Input() dep:any;
departmentID:number=0;
DepartmentName:string="";

  ngOnInit(): void {
this.departmentID=this.dep.departmentID;
this.DepartmentName=this.dep.DepartmentName;
  }
  addDepartment(){
    var val={departmentID:this.departmentID,
    DepartmentName:this.DepartmentName}
    this.service.addDepartment(val).subscribe(res=>{alert(res.toString())});
  }
  updateDepartment(){
    var val={departmentID:this.departmentID,
      DepartmentName:this.DepartmentName}
      this.service.updateDepartment(val).subscribe(res=>{alert(res.toString())});

  }

}
