import { Album } from "./componets/album/album.jsx";
import { albums } from "./albums.js";

function App() {
  return (
    <div>
      {albums.map((item, index) => (
        <Album key = {item.id} title={item.title} artist={item.artist} cover={item.cover} songs={item.songs} />
      ))}
    </div>
  );
}

export default App;
