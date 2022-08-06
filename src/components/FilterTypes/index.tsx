import Link from "next/link";
import { useList } from "../../contexts/ListProvider";

export default function FilterTypes() {
  const { list, filter, setFilter } = useList();

  const arrayTypes = list.map((item) => item.types);
  console.log(arrayTypes);

  const types = arrayTypes.map((item) => item[0]);

  const filteredArray = types.filter(function (ele, pos) {
    return types.indexOf(ele) == pos;
  });

  return (
    <section>
      <h1>Escolha o tipo de Pokémon:</h1>
      <ul>
        {filteredArray.map((type) => (
          <li key={type}>
            <Link href="/list">
              <button onClick={() => setFilter(type)}>{type}</button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
