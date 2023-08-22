import { useCallback, useState } from "react";
import { Container, Form, SubmitButton } from "./styles";
import { FaGithub, FaPlus, FaSpinner } from "react-icons/fa";
import api from "../../sevirces/api";

const Main = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const submit = async () => {
        setLoading(true);

        try {
          const response = await api.get(`repos/${newRepo}`);
          const { full_name } = response.data;
          console.log(full_name);
          setRepositories([...repositories, full_name]);
          setNewRepo("");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      submit();
    },
    [newRepo, repositories]
  );

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositoŕios
      </h1>

      <Form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Adicionar Repositorios"
          value={newRepo}
          onChange={(event) => setNewRepo(event.target.value)}
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>
      <ul>
        {repositories.map((repositorie) => (
          <li key={repositorie}>{repositorie}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Main;
