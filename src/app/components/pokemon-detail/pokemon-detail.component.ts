import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonImage = '';
  pokemonType = [];

  constructor(private router: ActivatedRoute,
              private pokemonService: PokemonService) {

    this.router.params.subscribe(
      params => {
        this.getPokemon(params.id);
      }
    );
  }

  ngOnInit(): void {
  }

  getPokemon(id) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImage = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
    );
  }

}
