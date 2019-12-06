import React from 'react'

const Players = props => {

    return (
        <div className="players">

            {props.players && props.players.map(player =>

                <p>name:{player.name}
                    country:{player.country}
                    searches:{player.searches}</p>



            )}

        </div>
    )
}
export default Players;