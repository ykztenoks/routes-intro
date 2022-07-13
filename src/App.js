import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Home } from "./pages/home/index";
import { Aluno } from "./pages/Aluno/index";
function App() {
  const [todosAlunos, setTodosALunos] = useState([
    { name: "karen", sobrenome: "Okasaki", idade: 28 },
    { name: "tathy", sobrenome: "Silva", idade: 28 },
    { name: "tulio", sobrenome: "Okasaki", idade: 28 },
    { name: "daniboy", sobrenome: "Okasaki", idade: 28 },
    { name: "adriano", sobrenome: "Okasaki", idade: 28 },
  ]);

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home todosAlunos={todosAlunos} />} />
        <Route path={"/:aluno"} element={<Aluno todosAlunos={todosAlunos} />} />
      </Routes>
    </div>
  );
}

export default App;
