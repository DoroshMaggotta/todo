import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MyList(props) {
    const [checked, setChecked] = React.useState([1]);
    const [selectedTasks, setSelectedTasks] = React.useState([]);
    const handleToggle = (value) => () => {
        const currentIndex = selectedTasks.indexOf(value);
        const newSelectedTasks = [...selectedTasks];



        if (currentIndex === -1) {
            newSelectedTasks.push(value);
        } else {
            newSelectedTasks.splice(currentIndex, 1);
        }

        setSelectedTasks(newSelectedTasks);
    };
    const handleDelete = (value) => () => {
        const newTasks = props.tasks.filter((task) => task !== value);
        props.setTasks(newTasks);
    };

    return (
        <List fullWidth dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {props.tasks.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <>
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(value)}
                                    checked={selectedTasks.indexOf(value) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={handleDelete(value)}
                                >
                                    <DeleteIcon />
                                </IconButton>

                            </>
                        }
                        disablePadding
                        sx={{ textDecorationLine: selectedTasks.indexOf(value) !== -1 ? 'line-through' : 'none' }}
                    >
                        <ListItemButton>
                            <ListItemText id={labelId} primary={value} />
                        </ListItemButton>
                        {/*<IconButton aria-label="delete">*/}
                        {/*    <DeleteIcon />*/}
                        {/*</IconButton>*/}
                    </ListItem>
                );
            })}
        </List>
    );
}
