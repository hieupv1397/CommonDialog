import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMsg = '';

  fields = [
    {
      title: "Mã nhân viên",
      name: "usersCode",
      validate: ["require", "number"],
      type: "textbox",
    },
    {
      title: "Tên nhân viên",
      name: "userName",
      validate: ["require", "maxlength100"],
      type: "textbox",
    },
    {
      title: "Giới tính",
      name: "userSex",
      validate: ["require"],
      type: "dropdownlist",
      data: ["Nam", "Nữ"]
    }
  ]

  parentMethod(name: string) {
    window.alert(name)
  }

  getParentMethod(): any {
    return {
      callParentMethod: (name: any) => {
        this.parentMethod(name)
      }
    }
  }

  title = 'CommonDialog';
}
