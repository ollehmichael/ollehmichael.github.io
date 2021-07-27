import { Card, Icon } from "semantic-ui-react";

type ProjectProps = {
  title: string;
  githubLink: string;
  languages: string;
  description: string;
};

const ProjectContainer: React.FC<ProjectProps> = (props) => {
  const { title, githubLink, languages, description } = props;
  return (
    <div style={{ marginTop: "5vh" }}>
      <Card style={{ width: "80vw" }}>
        <Card.Content header={title} />
        <Card.Content description={description} />
        <Card.Content extra>
          <Icon name="user" />
          {languages}
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          {githubLink}
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProjectContainer;
