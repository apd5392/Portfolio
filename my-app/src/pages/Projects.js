import "../Projects.css";
const Projects = () => {
  return (
    <div className="projectspage">
      <div className="projectbody">
        <h1>Take A Look At Some Of My Projects</h1>
        <h2 className="projectTitle">Hangman Project</h2>
        <p>Simple Game of Hangman where the player will have to guess a randomly selected word. The player will be able to see what category the word is under and has access to one hint when guessing the word. The game will keep track of the amount of lives the player has and track how many wins and losses the player has accrued.</p>
        <p><a href="https://p1-hangman.surge.sh/" target="_blank">Play Now</a> || <a href="https://github.com/apd5392/HangMan" target="_blank">GitHub Repo</a></p>
        <div className="projectImg">
          <img
            src=" https://i.imgur.com/fI8PsBy.png"
            alt="Picture of Hangman"
          />
        </div>
        <h2 className="projectTitle">Anime-List Project</h2>
        <p>An app that allows people to look up different heroes and villains from select animes and see what group/organization a character is part of and other details.</p>
        <p><a href="https://github.com/apd5392/Anime-List" target="_blank">GitHub Repo</a></p>
        <div className="projectImg">
          <img
            src="https://i.imgur.com/Yv2euMW.jpg"
            alt="Picture of anime"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;