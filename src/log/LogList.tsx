// in src/posts.jsx
import {ReferenceField, FilterForm, SearchInput, List,ImageField ,Datagrid, TextField, EmailField, BooleanField } from 'react-admin';
import { Stack } from '@mui/material';

const Search = [
    <SearchInput source="q" alwaysOn />,
];
const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={Search} />
    </Stack>
)

export const LogList = () => (
    <List>
        <ListToolbar />
        <Datagrid rowClick="show">
            <TextField source="id" />
            <ReferenceField source="user_id" reference="user" />
            <TextField source="action" />
            <TextField source="action_date" />
            <TextField source="user_ip" />
        </Datagrid>
    </List>
);