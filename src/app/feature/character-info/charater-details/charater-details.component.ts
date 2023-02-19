import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../service/character-service/character.service';

@Component({
  selector: 'app-charater-details',
  templateUrl: './charater-details.component.html',
  styleUrls: ['./charater-details.component.css']
})
export class CharaterDetailsComponent implements OnInit {

  characterId: string | null = null;
  characterDetails: any;

  constructor(
    private service: CharacterService,
    private route: ActivatedRoute
  ) { }

  getCharacterById() {
    this.service.getCharacterById(Number(this.characterId)).subscribe(_ => {
      this.characterDetails = _;
    });
  }


  ngOnInit(): void {
    this.characterId = this.route.snapshot.paramMap.get('id');
    this.getCharacterById();
  }

}
