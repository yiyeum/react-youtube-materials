import React, { useState } from 'react'
import { Box, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, withStyles, WithStyles } from '@material-ui/core'

const styles = {
    jsonBox: {
        backgroundColor: '#f49988',
        display: 'inline-block',
        color: '#ffffff',
        borderRadius: '5px',
        '& p': {
            letterSpacing: '1.5px'
        }
    }
};

const ProfileBase = (props: WithStyles<typeof styles>) => {
    const { classes } = props;
    const [location, setLocation] = useState({
        city: "",
        state: ""
    });

    const [profile, setProfile] = useState({
        name: "",
        company: {
            employeeId: "",
            isManager: false
        }
   });

    const onChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation({ 
            ...location,
            [e.target.name]: e.target.value 
        });
    };

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value 
        });
    }

    const onChangeCompany = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({
            ...profile,
            company: {
                ...profile.company,
                [e.target.name]: e.target.value
            }
        });
    }

    const onChangeIsManager = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile({
            ...profile,
            company: {
                ...profile.company,
                [e.target.name]: !profile.company.isManager
            }
        });
    }

    return (
        <>
            <Box m={5}>
                <Typography variant='h6'>Handle State with Object</Typography>
            </Box>
            <Box ml={5} p={2} className={classes.jsonBox}>
                <Typography variant='body1'>{JSON.stringify(location)}</Typography>
            </Box>
            <Box m={5}>
                <TextField label='City' value={location.city} name='city' onChange={onChangeLocation} />
            </Box>
            <Box m={5}>
                <TextField label='State' value={location.state} name='state' onChange={onChangeLocation} />
            </Box>

            <Box ml={5} p={2} className={classes.jsonBox}>
                <Typography variant='body1'>{JSON.stringify(profile)}</Typography>
            </Box>
            <Box m={5}>
                <TextField label='Name' value={profile.name} name='name' onChange={onChangeName} />
            </Box>
            <Box m={5}>
                <TextField label='Employee ID' value={profile.company.employeeId} name='employeeId' onChange={onChangeCompany} />
            </Box>
            <Box m={5}>
                <FormLabel component="legend">Is Manager</FormLabel>
                <RadioGroup value={profile.company.isManager}  name="isManager" onChange={onChangeIsManager}>
                    <FormControlLabel value={false} control={<Radio />} label="F" />
                    <FormControlLabel value={true} control={<Radio />} label="T" />
                </RadioGroup>
            </Box>
        </>
    )
}

export const Profile = withStyles(styles)(ProfileBase);
