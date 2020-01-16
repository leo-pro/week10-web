import React, { useState, useEffect } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import './styles.css';

function DevForm({ onSubmit }){

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [techs, setTechs] = useState([]);
    const [github_username, setGithubUsername] = useState('');

    // const [checkbox, setCheckbox] = useState([])
    //     checkedReact: true,
    //     checkedReactNative: true,
    //     checkedJavaScript: true,
    //     checkedHtml: true,
    //     checkedCss: true,
    //     checkedAngular: true,
    //     checkedPython: true,
    // })

    async function handleSubmit(e){
        e.preventDefault();

        console.log(techs);

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude 
        });

        setGithubUsername('');
        setTechs([]);
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
            <FormControlLabel
                control={
                    <Checkbox
                        value="ReactJS"
                        color="primary"
                        onChange={e => setTechs(...techs, e.target.value)}
                    />
                }
                label="ReactJS"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="React Native"
                        color="primary"
                        onChange={e => setTechs(...techs, e.target.value)}
                    />
                }
                label="React Native"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="JavaScript"
                        color="primary"
                        onChange={e => setTechs(...techs, e.target.value)}
                    />
                }
                label="JavaScript"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="HTML"
                        color="primary"
                        onChange={e => setTechs(...techs, e.target.value)}
                    />
                }
                label="HTML"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="CSS"
                        color="primary"
                        onChange={e => setTechs(...techs, e.target.value)}
                    />
                }
                label="CSS"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="Angular"
                        color="primary"
                        onChange={e => setTechs(...techs, e.target.value)}
                    />
                }
                label="Angular"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        value="Python"
                        color="primary"
                        onChange={e => setTechs(...techs, e.target.value)}
                    />
                }
                label="Python"
            />
            {/* <input 
                type="text" 
                name="techs" 
                id="techs"
                required
                value={techs}
                onChange={e => setTechs(e.target.value)}
            /> */}
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
