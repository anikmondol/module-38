export default function Actor({actor}){
    return <li style = {{
        border: '2px solid blue',
        padding: '20px',
        margin: '20px',
        borderRadius: '15px',
      }}>Name: {actor}</li>
}