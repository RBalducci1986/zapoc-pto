import { SharedService } from '../../shared.service'
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.scss'],
})
export class AddEditCatComponent implements OnInit {

  constructor(private service: SharedService) {}

  @Input() cat: any;
  CategoryId: string = '';
  CategoryName: string = '';

  ngOnInit(): void {
    this.CategoryId = this.cat.CategoryId;
    this.CategoryName = this.cat.CategoryName;
  }

  addCategory() {
    var val = { CategoryId: this.CategoryId, CategoryName: this.CategoryName };
    this.service.addCategory(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateCategory() {
    var val = { CategoryId: this.CategoryId, CategoryName: this.CategoryName };
    this.service.updateCategory(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}
