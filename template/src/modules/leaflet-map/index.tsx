import React, {useState, useEffect} from 'react';
import { Button } from 'antd';

interface Props{
    title?: string;
}

const MyComponent: React.FC<Props> = function(props){
  const {
    title
  } = props;

  return(
    <div className="my-component">
      <Button>LeafletMap</Button>
    </div>
  )
}

export default MyComponent;