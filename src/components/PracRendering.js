

function PracRendering(props) {
  return (   
        
    (props.isLogged) ? <h3>Hello Welcome {props.name}</h3> : <h3>Please login to  continue</h3>
    
  )
}

export default PracRendering;
