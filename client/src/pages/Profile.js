export default function Profile(){
    
    return (
        <div>
        <h1> this is a user profile </h1>
        <section className="profile-header"> 
            <figure style={{marginLeft: '10vw'}}>
                <figcaption style={{color: 'white', textShadow: '0 0 10px purple'}}>
                    'Username'
                </figcaption>
            </figure>
            <figure style={{marginLeft: '70vw'}}>
                <figcaption style={{color: 'white', textShadow: '0 0 10px purple'}}>
                    'User' is listening to...
                </figcaption>
                <audio controls src='null'/>
            </figure> 
        </section>

        <section className="profile-body">
            <div className='profilefeed1' style={{border: '2px solid white'}}>Following/Liked Artists/Fans</div>
            <div className='profilefeed2' style={{border: '2px solid white'}}>Albums/Songs/Playlists</div>
            <div className='profilefeed3' style={{border: '2px solid white'}}>Comments for selected song/album/playlist</div>
        </section>
        </div>
    )
}

