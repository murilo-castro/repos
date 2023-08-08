import { Container, Form, SubmitButton } from "./styles";
import { FaGithub, FaPlus } from "react-icons/fa";

const Main = () => {
  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositoŕios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar Repositorios" />
        <SubmitButton>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Main;
