import { useState } from 'react';
import environment from './../../config/env';
import axios from 'axios';
import './CommentComponent.sass';

function CommentComponent({ comment }) {
  const url = `http://${environment.apihost}:${environment.apiport}/api/v1/comments`;
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [msg, setMsg] = useState(comment.comment);
  const dni = comment.dni;

  const update = async () => {
    setLoading(true);
    try {
      await axios.put(url+`/${comment._id}`, {comment: text});
      const data = await axios.get(url+`/${comment._id}`);
      setMsg(data.data.comment)
      setLoading(false)
      setEdit(false);
    } catch (err) {
      setLoading(false);
      setEdit(false);
    }
  }

  const startEdit = () => {
    setEdit(true);
    setText(msg);
  }

  return (<div className='comment-item'>
    <div className='comment-dni'>
      <span>{dni}</span>
      {!edit && <button onClick={startEdit}>Edit</button>}
      {edit && <button onClick={update} disabled={loading}>OK{loading && ' Loading...'}</button>}
    </div>
    <div className='comment-msg'>
      {!edit && <span>{msg}</span>}
      {edit && <input type='text' value={text} onChange={(ev)=>setText(ev.target.value)}/>}
    </div>
  </div>)
}

export default CommentComponent;