export default function Profile(){
    
    return (
        <div>
        <h1> this is a user profile </h1>
        <section> 
            <figure>
                <figcaption style={{color: 'white', textShadow: '0 0 10px purple'}}>
                    'Username'
                </figcaption>
            </figure>
            <figure>
    <figcaption style={{color: 'white', textShadow: '0 0 10px purple'}}>
    'User' is listening to...
    </figcaption>
    <audio controls src='null'/>
</figure> 
        </section>
        <section>
            <div>Following/Liked Artists/Fans</div>
        </section>
        <section>
            <div>Albums/Songs/Playlists</div>
            <div>Comments for selected song/album/playlist</div>
        </section>
        </div>
    )
}