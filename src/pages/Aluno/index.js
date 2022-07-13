import { useParams } from "react-router-dom";
export function Aluno({ todosAlunos }) {
  const { aluno } = useParams();

  return (
    <div>
      {todosAlunos
        .filter((currentElement) => {
          return currentElement.name === aluno;
        })
        .map((currentElement) => {
          return (
            <div>
              <p>Nome: {currentElement.nome}</p>
              <p>Sobrenome: {currentElement.sobrenome}</p>
              <p>Idade: {currentElement.idade}</p>
            </div>
          );
        })}
    </div>
  );
}
