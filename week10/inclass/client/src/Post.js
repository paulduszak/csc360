import React from "react";
import {Link} from 'react-navi'

function Post({ title, content, author, id, short = false }) {
  
  let processedContent = content

  if (short) {
    if (content.length > 30) {
      processedContent = content.substring(0, 30) + '...'
    }
  }


  return (
    <div>
      <Link href={`/post/${id}`}><h3>{title}</h3></Link>

      <div>{processedContent}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      {short &&
        <div>
            <br />
            <Link href={`/post/${id}`}>View full post</Link>
        </div>
        }

    </div>
  );
}

export default React.memo(Post)
