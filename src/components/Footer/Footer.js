import gitHubSticker from "./github-sticker.png"

export default function Footer(props) {
    return (
      <footer className="max-w-screen-md mx-auto mb-0">
        <div className="flex flex-wrap justify-evenly mt-9">
            <a href="https://github.com/laurencmendoza" target="_blank">
              <img className="my-8 mx-2 hover:scale-105" alt="Lauren Mendoza's GitHub page" src={gitHubSticker} width="300"/>
            </a>
            <a href="https://www.linkedin.com/in/lauren-c-mendoza/" target="_blank">
              <img className="my-8 mx-2 border-white border-8 rounded-full drop-shadow-md hover:scale-105" alt="Lauren Mendoza's LinkedIn" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" width="140"/>
            </a>
            <a href="https://drive.google.com/file/d/1zu-NA0EGBrC_dALJ9FoIf4jp7BAynaBP/view?usp=sharing" target="_blank">
              <img className="my-8 mx-2 border-white border-8 rounded-3xl bg-white drop-shadow-md hover:scale-105" src="https://cdn-icons-png.flaticon.com/128/5677/5677656.png" width="140" alt="Lauren Mendoza's Resumé"/>
            </a>
        </div>
      </footer>
    );
  }