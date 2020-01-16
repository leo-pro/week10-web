import React from 'react';

import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

import './styles.css';

function DevItem({ dev }){
    function editHandle(){
        //console.log("Usuário");
    }
    
    return (
        <li key={dev._id} className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
                <div className="user-actions">
                    <EditTwoToneIcon onClick={editHandle()}></EditTwoToneIcon>
                    <DeleteForeverTwoToneIcon onClick={editHandle()}></DeleteForeverTwoToneIcon>
                </div>
            </header>
            <p>{dev.bio == null ? <i>No have bio.</i> : dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer">Acessar Perfil no Github</a>
        </li>
    );
}

export default DevItem;