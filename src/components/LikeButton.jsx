import { useState } from "react";

function LikeButton() {
  const [liked, setLike] = useState(false);
  const [buttonClick] = useState(false);

  return (
    <><hr></hr>
      <div>
        <button onClick={() => { setLike(!liked);
        alert(liked ? "Unliked!" : "Liked!")
        }}>
          {liked ? "❤️" : "🤍"}
        </button>
      </div>
    </>
  );
}

export default LikeButton;

