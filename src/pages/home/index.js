export function Home({ todosAlunos }) {
  return (
    <div>
      {todosAlunos.map((aluno) => {
        return (
          <div>
            <link to={`/${aluno.name}`}>{aluno.name}</link>
          </div>
        );
      })}
    </div>
  );
}
