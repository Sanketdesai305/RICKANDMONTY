import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../service/character-service/character.service';

@Component({
  selector: 'app-charater-list',
  templateUrl: './charater-list.component.html',
  styleUrls: ['./charater-list.component.css']
})
export class CharaterListComponent implements OnInit {
  characterList: any[] = [];
  constructor(
    private service: CharacterService,
    private router: Router) { }

  getAllCharacter() {
    this.service.getAllCharacters().subscribe(_ => {
      this.characterList = _.results;
      console.log(this.characterList);
    })
  }

  ngOnInit(): void {
    this.getAllCharacter();
  }

}
