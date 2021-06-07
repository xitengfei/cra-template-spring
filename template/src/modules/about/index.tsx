import React, {useState, useEffect} from 'react';
import { Button } from 'antd';

interface Props{
    title?: string;
}

const About: React.FC<Props> = function(props){
  const {
    title
  } = props;

  return(
    <div className="my-component">
      <Button>About</Button>
    </div>
  )
}

export default About;