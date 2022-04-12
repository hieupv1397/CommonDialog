import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})

export class CommonDialogComponent implements OnInit {
  @Input() fields: any;
  @Input() title: string = "";
  @Input() _pData !: any;


  constructor() { }

  callParent() {
    this._pData.callParentMethod("Hello Dear, start function in parent");

  }

  ngOnInit(): void {
    
  }

}
