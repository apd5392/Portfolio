import "../Projects.css";
const Projects = () => {
  return (
    <div className="projectspage">
      <div className="intro">
        <h1>Take A Look At Some Of My Projects</h1>
        <h2 className="projectTitle">Hangman Project</h2>
        <p>Description</p>
        <p>links</p>
        <div className="projectImg">
          <img
            src=" https://i.imgur.com/fI8PsBy.png"
            alt="Picture of Hangman"
          />
        </div>
        <h2 className="projectTitle">Anime-List Project</h2>
        <p>An app that allows people to look up different heroes and villains from select animes and see what group/organization a character is part of and other details.</p>
        <p>links</p>
        <div className="projectImg">
          <img
            src=" https://i.imgur.com/fI8PsBy.png"
            alt="Picture of anime"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
