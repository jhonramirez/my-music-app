import { useFavoriteSong } from "../../../hooks";
import { BodyTemplate } from "../..";

export const FavoritesPage = () => {
  const favoriteSongs = useFavoriteSong();

  return (
    <BodyTemplate
      title={
        favoriteSongs.length > 0
          ? "Favoritos"
          : "Aquí aparecerán las canciones que te gusten"
      }
      songs={favoriteSongs}
    />
  );
};
