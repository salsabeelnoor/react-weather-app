import { useLocalStorage } from "../hooks"

const FavoriteProvider = ({children}) => {
    const [ favorites, setFavorites] = useLocalStorage("favorites", []);

    const addToFavorites = (latitude, longitude, location) => {
        setFavorites(
            ...favorites,
            {
                latitude: latitude,
                longitude: longitude,
                location: location
            }
        )
    };

    const removeFromFavorites = (location) => {
        const restFavorites = favorites.filter(fav => fav.location !== location);
        setFavorites(restFavorites);
    }
    return(
        <FavoriteProvider.Provider value={{favorites, addToFavorites, removeFromFavorites}}>
            {children}
        </FavoriteProvider.Provider>
    )
}
export default FavoriteProvider;