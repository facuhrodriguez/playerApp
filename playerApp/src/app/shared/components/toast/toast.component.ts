import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  @Input() title: string = '';
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  public showSucess(): void {
    this.toastr.success(this.title);
  }

}
