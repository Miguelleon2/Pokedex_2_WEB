import React from 'react';
import { Link } from 'react-router-dom';

export const CardPokemon = ({ pokemon }) => {
	return (
		<Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
			<div className='card-img'>
				<img
					src={pokemon.sprites.other.dream_world.front_default}
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className='card-info'>
				<span className='pokemon-id'>N° {pokemon.id}</span>
				<h3>{pokemon.name}</h3>
				<div className='card-types'>
					{pokemon.types.map(type => (  //recorremos porque la api devuelve un arreglo re suave, entoces para eso el map y el class para que duvuelva el nombre y el tipo digamos bulvasur planta
						<span key={type.type.name} className={type.type.name}>          
							{type.type.name}
						</span>
					))}
				</div>
			</div>
		</Link>
	);
};