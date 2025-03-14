import { FunctionComponent } from "preact/src/index.d.ts";
type Episode = {
  id: string;
  name: string;
};
export type Props = {
  character: {
    id: number;
    name: string;
    status: string;
    origin: string;
    image: string;
    episodes: Episode[];
  };
};

const Character: FunctionComponent<Props> = (props) => {
  const character = props.character; // se hace para que haya una sola props
  return (
    <div class="characterOnlyContainer">
      <div class="casa">
        <a href="/">
          <img src="/casa.svg" alt="volver" width="20px">
            Volver
          </img>
        </a>
      </div>

      <h1>
        {character.name}
      </h1>

      <div class="characterColumn">
        <img src={character.image} alt={character.name} />

        <div>Status: {character.status}</div>
        <div>Origin: {character.origin}</div>
      </div>

      <ul class="characterEpisodes">
        Episodes:
        {character.episodes.map((ep) => (
          <div key={ep.id}>
            <li>
              <a href={`/episode/${ep.id}`}>{ep.name}</a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Character;
