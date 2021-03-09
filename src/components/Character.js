// Write your Character component here
import React, {usestate, useEffect} from 'react';
import axios from "axios";


class Character extends React.Component {
render() {
return (
<div>
<h1>Character Name: {this.props.characterData.name}</h1>
<h1>Character Hair Color: {this.props.characterData.hairColor}</h1>
</div>
)
}
}

export default Character 