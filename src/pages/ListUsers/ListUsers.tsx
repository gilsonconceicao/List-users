import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// list material ui
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// icons 
import {BsTrash} from 'react-icons/bs';
// styles
import styles from './List.module.css';

const ListUsers = () => {
    // storage 
    const storageUsers = JSON.parse(localStorage.getItem('peoples') || '[]');

    useEffect(() => {
        
    }, [storageUsers])

    const removeTaskList = (id:any):void => {
      const listBeforeremoved = storageUsers.filter((item:any) => item.id != id); 
      localStorage.setItem("peoples", JSON.stringify(listBeforeremoved));  

      window.location.href = '/'
    } 
    
    return (
        <div className={styles['list_container']}>
            <Link to='/'>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </Link>
            <h1>ListUsers</h1>

            {storageUsers.length >= 1 ? storageUsers.map((item:any) => (
            <List >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.name} secondary={item.email + ', ' + item.age + ' anos.'}/>
                    <button 
                      className={styles['button_remove']}
                      onClick={() => removeTaskList(item.id)}   
                    >
                      <BsTrash/>
                    </button>
                </ListItem>
            </List>
            )) : 
            <p style={{margin: '10px 0 ', fontSize: '20px'}}>Não contem usuários cadastrados...</p>    
            }


        </div>
    )
}

export default ListUsers