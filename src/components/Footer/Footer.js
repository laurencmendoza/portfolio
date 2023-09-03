import gitHubSticker from "./github-sticker.png"

export default function Footer(props) {
    return (
      <footer className="max-w-screen-md mx-auto mt-12">
        <div className="flex flex-wrap justify-evenly mt-9">
            <a href="https://github.com/laurencmendoza" target="_blank">
              <img className="my-8 mx-2 hover:scale-105" src={gitHubSticker} width="300"/>
            </a>
            <a href="https://www.linkedin.com/in/lauren-c-mendoza/" target="_blank">
              <img className="my-8 mx-2 border-white border-8 rounded-full drop-shadow-md hover:scale-105" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" width="140"/>
            </a>
            <a href="https://drive.google.com/file/d/1t2LHFTvb5aXM559u4CUgbLT5eDZi9Xih/view?usp=sharing" target="_blank">
              <img className="my-8 mx-2 border-white border-8 rounded-3xl bg-white drop-shadow-md hover:scale-105" src="https://cdn-icons-png.flaticon.com/128/5677/5677656.png" width="140"/>
            </a>
        </div>
      </footer>
    );
  }