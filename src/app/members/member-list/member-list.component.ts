import { Component, inject, OnInit } from '@angular/core';
import { MemberCardComponent } from '../member-card/member-card.component';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/members.service';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  
  memberService = inject(MembersService);

 
  ngOnInit(): void {
    if (this.memberService.members().length === 0) this.loadMembers();
  }
  
  loadMembers() {
    this.memberService.getMembers()
  }
 

}
