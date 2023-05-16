import Card from '../Card/Card';


export default function Cards({dogs, onClose}) {
   return (
      <div>
         {
            dogs.map(({id, name, temperaments, lifeSpan, weight, height, image}) => {
               return (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    temperaments={temperaments}                     
                    lifeSpan={lifeSpan}
                    weight={weight}
                    height={height}
                    image={image.url}
                    onClose={onClose}
                  />
               )
            })
         }
      </div>
   );
}