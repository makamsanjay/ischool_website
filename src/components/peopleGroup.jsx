//imports 

import PeopleModal from "./peopleModal";

const peopleGroup=({title, pepGroup}) =>
{

    return(
        <>
        <h1>{title}</h1>
        <div className="peopleList" >
                {pepGroup.map((p)=>
                    <div className="peopleListItem" key={p.username}>
                        <img alt = "person" src={p.imagePath}/>
                        {/*<h3>{p.name}</h3>*/}
                        <PeopleModal {...p}/>

                    </div>
                )}
               
            </div>
        </>
    );
}

export default peopleGroup;