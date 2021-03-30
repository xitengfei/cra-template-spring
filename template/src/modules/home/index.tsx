import React, {useState, useEffect} from 'react';

interface Props{
    title?: string;
}

const MyComponent: React.FC<Props> = function(props){
  const {
    title
  } = props;

  return(
    <div className="my-component">
      Home Page
    </div>
  )
}

export default MyComponent;