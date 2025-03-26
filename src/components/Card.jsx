import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';
const Card = (props) => {
  let course = props.course; 
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler(){
      if(likedCourses.includes(course.id)){
        //phle se liked hua h
        setLikedCourses((prev)=>prev.filter((cid)=>(cid !==course.id)  ) );
        toast.warning("Like Removed");

      }
      else {
        //phle se liked nhi h
        // insert krna h ye course liked course me
        if(likedCourses.length ===0){
          setLikedCourses([course.id]);
        } else {
          //non-empty phle se
          setLikedCourses((prev)=>[...prev,course.id])
        }
        toast.success("Liked Succesfully");
      }
  }

 
  return (
    <div className='w-[300px] bg-gray-700 bg-opacity-80 rounded-md overflow-hidden '>
      <div className='relative '>
        <img src={course.image.url} alt="Not Found"/>
 
      <div className='m-[0px] h-[25px] w-[25px] bg-white rounded-full absolute right-1 bottom-[-10px] grid place-items-center '>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id)? (  <FcLike fontSize='1.3rem'/>):
              (<FcLikePlaceholder fontSize='1.3rem'/>)
            }
          </button>
        </div>

      </div>
      <div className='p-4 '>
        <p className='text-white font-semibold text-lg leading-6'>
          {course.title}
        </p>
        <p className='mt-2 '>
          {
            course.description.length>100 ?
            (course.description.substr(0,100)+'...'):
            (course.description)
          }
          </p>
      </div>
    </div>
  )
}

export default Card
