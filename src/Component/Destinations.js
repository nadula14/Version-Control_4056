import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Destinations.css';

export default function MediaCard() {
  const handleLearnMoreClick = () => {
    
    window.location.href = 'https://traveltriangle.com/blog/most-beautiful-places-in-sri-lanka/';
  };

  return (
    <div className='displayflex'>
      <Card className='card' sx={{ maxWidth: 345 }}>
      <div className='imge-container-1'>

      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ella – Witness The Countryside Charm
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Looking for the best places to visit in Sri Lanka? Get enamored by the stunning views through Ella Gap overlooking a spectacular gap in the southern mountain wall. Situated in the middle of beautiful countryside, with small vegetable plots, tea plantations on the hill slopes and forests on the tops this hill station is nothing less than breathtaking. Ella undoubtedly, is one of the most beautiful places to visit in Sri Lanka.

Location: Town in Sri Lanka
Famous for: Hikes, mountain views, train rides
Best time to visit: January to March is the best time to visit Ella as the chances of rainfall are low and you can also enjoy hiking
How to reach: Ella is 235 km from Colombo......
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLearnMoreClick}>
          See More
        </Button>
      </CardActions>
    </Card>
    <Card className='card' sx={{ maxWidth: 345 }}>
    <div className='imge-container-2'>

</div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Nuwara Eliya – Covered With Lush-Greenery
        </Typography>
        <Typography variant="body2" color="text.secondary">
        One of the most beautiful Sri Lanka tourist places, this 19th century hill station Nuwara Eliya retains its colonial ambiance with its golf course, gentlemen’s clubs and mock-Tudor buildings. It is one of the most beautiful locations in Sri Lanka for a scenic rail ride. Experience the stunning views of the surrounding tea plantations, waterfalls and dramatic mountains the train takes you from Kandy to Nuwara Eliya. You wouldn’t want the ride to end! You can enjoy trekking in Kandy and explore the beauty of nature. It is one of the safest places to visiting Sri Lanka during Covid. If you are looking for best places to visit in Rishikesh in 2 days, Nuwara Eliya should be on your itinerary.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLearnMoreClick}>
          see More
        </Button>
      </CardActions>
    </Card>


    <Card className='card' sx={{ maxWidth: 345 }}>
    <div className='imge-container-3'>

</div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Pinnawala Elephant Orphanage – See The Giant Beasts
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Can you imagine anything as heartwarming as staring at baby elephants as they enjoy a river soak?  The Pinnawalla Elephant Orphanage has many reasons to be called one of the best things to see in Sri Lanka! It won’t be hard to believe if you wouldn’t want to leave this paradise.

This place is 13 km away from the town of Kegalle and one can come from any public transport. This is a very popular tourist destination and gives visitors a very different kind of experience. Watching the baby elephants doing mischief and moving here and there is a lifetime experience. One cannot get to see all this anywhere else.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLearnMoreClick}>
          see More
        </Button>
      </CardActions>
    </Card>
    </div>
    
    
  );
}