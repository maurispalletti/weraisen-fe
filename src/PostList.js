import PostData from '../data/Ciudades.json'
function PostList (props) {
    
        return (
            {PostData.map((nombre)=> { 
                return <h1> {nombre.nombre}</h1>})}

        );
    }
