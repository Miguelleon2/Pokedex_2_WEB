import { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';
import { PokemonContext } from './PokemonContext';



export const PokemonProvider = ({ children }) => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [globalPokemons, setGlobalPokemons] = useState([]);

    // Utilizar CustomHook - useForm
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: '',
    });


    //estados para la aplicacion simples
    const [loading, setLoading] = useState(true); //carga
    const [active, setActive] = useState(false); //para filtar si el boton es precionado etc


    //Llamar pokemones o sea consumir parte de la api
    const getAllPokemons = async (limit = 50) => {

        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`); //que empiece desde el pokemon 0 y el limite en este caso 50 offset inicio y limit pues limite
        const data = await res.json();
        //console.log(data)

        const promises = data.results.map(async pokemon => { //voy a recorrer la data.result que es un arreglo de los pokemones

            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });  //devuelve arreglo de promesas
        //console.log(promises);

        const results = await Promise.all(promises);
        //console.log(results);

        setAllPokemons([...allPokemons, ...results]); //combino mis arreglos para cunado le de cargar mas en un soslo arreglo
        setLoading(false);
    }

    //funcion para llamar a todos los pekegays
    const getGlobalPokemons = async () => {

        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`); //que empiece desde el pokemon 0 y el limite en este caso 50 offset inicio y limit pues limite
        const data = await res.json();
        //console.log(data)

        const promises = data.results.map(async pokemon => { //voy a recorrer la data.result que es un arreglo de los pokemones
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });  //devuelve arreglo de promesas
        //console.log(promises);

        const results = await Promise.all(promises);
        //console.log(results);

        setGlobalPokemons(results);
        setLoading(false);
    }

    //llamar a un pokemon por id
    const getPokemonByID = async id => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon/${id}`);
        const data = await res.json();
        return data;
    };



    useEffect(() => {
        getAllPokemons()

    }, [offset])

    useEffect(() => {
        getGlobalPokemons()

    }, [])

    // BTN CARGAR MÁS
	const onClickLoadMore = () => {
		setOffset(offset + 50);
	};


    return (
        <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonByID,
            onClickLoadMore

        }}>
            {children}
        </PokemonContext.Provider>
    );
};