import Character from "../components/Character.tsx";
import Axios from "npm:axios";

type Character = {
  id: string;
  name: string;
  image: string;
};

type Data = {
  results: Character[];
};

export default async function Home(req: Request) {
  const url = new URL(req.url);
  const name = url.searchParams.get("name") || "";

  try {
    const characters = await Axios.get<Data>(
      `https://rickandmortyapi.com/api/character/?name=${name}`,
    );

    return (
      <div>
        <h1>Rick & Morty Characters</h1>

        <div>
          <form method="get">
            <div>
              <input type="text" name="name" placeholder="Introduce nombre" />
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>

        <div class="characterContainer">
          {characters.data.results.map((p) => {
            return (
              <div class="characterCard" key={p.id}>
                <h3>{p.name}</h3>
                <div class="characterImage">
                  <img src={p.image} alt={p.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } catch (e) {
    return <div>Ha habido un error</div>;
  }
}
