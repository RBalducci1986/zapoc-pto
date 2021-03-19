import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.scss']
})
export class ShowCatComponent implements OnInit {

  constructor(private service:SharedService) { }

  CategoryList:any=[];

  ModalTitle: string = '';
  ActivateAddEditCatComp: boolean = false;
  cat: any;

  ngOnInit(): void {
    this.refreshCatList();
  }

  addClick() {
    this.cat={
      CategoryId: 0,
      CategoryName:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCatComp = true;
  }

  closeClick() {
    this.ActivateAddEditCatComp = false;
    this.refreshCatList();
  }

  editClick(val: any) {
    this.cat = val;
    this.ModalTitle = "Edit Category";
    this.ActivateAddEditCatComp = true;
  }

  refreshCatList(){
    this.service.getCatList().subscribe(data=>{
      this.CategoryList=data;
    });
  }

}
