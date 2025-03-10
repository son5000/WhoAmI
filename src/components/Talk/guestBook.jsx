import styles from "@/components/Talk/guestBook.module.css"
import { useEffect, useRef, useState } from "react"


export function GuestBook () {
    const [ openAuthor,  setOpenAuthor ] = useState(false);
    const [ commentData,  setCommentData ] = useState(null);
    const [ comment, setComment ] = useState({
        author : '',
        message : ''
    })

    const handleChangeComment = (type,value = '') => {
        if(type === 'reset'){
            return setComment({
                author : '',
                message : ''
            });
        }

        let temp  = {...comment}
        temp[type] = value;
        setComment(temp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handlePopupOpen = () => {
        setOpenAuthor(!openAuthor);
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            e.stopPropagation();
            e.preventDefault();
            handlePopupOpen();
        }
        else {
            return;
        }
    }

    const getComments = async () => {
        try {
          const res = await fetch('http://localhost:3000/api/comment');
          if (res.ok) {
            const data = await res.json();
            setCommentData([...data]); 
          } else {
            setError('데이터를 불러오는 데 문제가 발생했습니다.');
          }
        } catch (error) {
          setError('데이터를 불러오는 중 에러가 발생했습니다.');
        }
      };

      useEffect (() => {
          getComments();
      },[])

    const scrollContainerRef = useRef(null);

    useEffect(() => {

      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }, [commentData]);  

    return (
        <>
        <div className={styles.container}>
            <div ref={scrollContainerRef}>
                <TextBox 
                    commentData={commentData}
                    setCommentData={setCommentData} 
                    />
            </div>
            <form onSubmit={handleSubmit}>
                <textarea onChange={(e) => handleChangeComment('message',e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e)}
                          value={comment.message} 
                          type="text" 
                          placeholder="메세지 입력" 
                />
                {comment.message && <button onClick={() => handlePopupOpen()}>전송</button>}
            </form>
        </div>
            { openAuthor && <Author 
                handleChangeComment={handleChangeComment} 
                author={comment.author}
                handleSubmit={handleSubmit} 
                handlePopupOpen={handlePopupOpen}
                message={comment.message}
                getComments={getComments}
            />}
        </>
    )
}


export function TextBox ({commentData}) {

    if(!commentData){
        return null;
    }

    return (
        <div>
          {commentData.map((comment) => (
            <div 
                className={styles.textBox} 
                key={comment._id}
                >
              <span>
                작성자 아이콘
              </span>
              <div>
                <p>{comment.author}</p> {/* 댓글 작성자 */}
                <div className={styles.speechBubble}>{comment.message}</div> {/* 댓글 내용 */}
                <span>{new Date(comment.createdAt).toLocaleString()}</span> {/* 댓글 작성 날짜 */}
              </div>
            </div>
          ))}
        </div>
      );  
}

export function Author ({author,handleChangeComment,handleSubmit,handlePopupOpen,message,getComments}) {

    const postComment = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/comment', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({message,author})
            });

            if (!res.ok) {
                throw new Error('댓글 작성에 실패했습니다.');
            }

        } catch (error) {
            console.error('오류 :',  error);
        }
    }

    const handleClick = async () => {  
        if(author == ''){
            return ;
        }

          try {
            await postComment(); 
            handlePopupOpen(); 
            handleChangeComment('reset'); 
            getComments(); 
          } catch (error) {
            console.error('댓글 처리 중 오류가 발생했습니다:', error);
          }
    }

    const handleKeyDown = async (e) => {
        if(author == '') {
            return ;
        }

        if (e.key === 'Enter') {
          e.preventDefault();  
      
          try {
            await postComment(); 
            handlePopupOpen(); 
            handleChangeComment('reset'); 
            getComments(); 
          } catch (error) {
            console.error('댓글 처리 중 오류가 발생했습니다:', error);
          }
        }
      };
      
      return (
          <div className={styles.authorPopup}>
            <form onSubmit={handleSubmit}>
                <button onClick={() => {
                            handlePopupOpen();
                            handleChangeComment('author');
                        }}
                    >Go back !
                </button>
                <label 
                    id="author" 
                    htmlFor=""
                    >
                    What's your Name ?
                </label>
                <input 
                    id="author" 
                    onChange={(e) => handleChangeComment('author', e.target.value )} 
                    onKeyDown={(e) => handleKeyDown(e)}
                    value={author} 
                    type="text" 
                />
                <button onClick={() => handleClick()}
                >
                Send</button>
            </form>
        </div>
    )
    
};