import React, { useState, useEffect } from 'react';

import './styles.css';

function DevForm({ onSubmit }){

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [techs, setTechs] = useState('');
    const [github_username, setGithubUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude 
        });

        setGithubUsername('');
        setTechs('');
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
                (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    },[]);

    return(
        <form onSubmit={handleSubmit}>
          <div className="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input 
              type="text" 
              name="github_username" 
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
                {/* ReactJS
                <input 
                    type="checkbox"
                    name="techs"
                    id="techs"
                    required
                    value={techs.split(', ')}
                /> */}
            <input 
                type="text" 
                name="techs" 
                id="techs"
                required
                value={techs}
                onChange={e => setTechs(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="text" 
                name="latitude" 
                id="latitude"
                required
                onChange={e => setLatitude(e.target.value)}
                value={latitude}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="text" 
              name="longitude" 
              id="longitude"
              required 
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
    );
}

export default DevForm;
