import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

DepartmentList:any=[];

ModelTitle:string="";
ActivateAddEditDepComp:boolean=false;
dep:any;

DepartmentIdFilter:string="";
DepartmentNameFilter:string="";
DepartmentListWithoutFilter:any[]=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      departmentID:0,
      DepartmentName:""
    }
this.ModelTitle="Add Department";
this.ActivateAddEditDepComp=true;
  }

  editClick(item:any)
  {

    this.dep=item;
    this.ModelTitle="Edit Department"
    this.ActivateAddEditDepComp=true;
  }
  closeClick()
  {
this.ActivateAddEditDepComp=false;
this.refreshDepList();
  }
  deleteClick(item:any)
  {
    if(confirm('Are you sure??'))
    {
      this.service.deleteDepartment(item.departmentID).subscribe(data=>{alert(data.toString());this.refreshDepList();})
    }
  }
refreshDepList()
{
 this.service.getDepList().subscribe(data=>
  {
 this.DepartmentList=data;
 this.DepartmentListWithoutFilter=data;
 })
}
FilterFn()
{

  var DepartmentIdFilter=this.DepartmentIdFilter;
  var DepartmentNameFilter=this.DepartmentNameFilter;
}

}
