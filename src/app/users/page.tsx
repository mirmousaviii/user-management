"use client"

import * as React from 'react';
import Link from "next/link";
import {Box, Paper, Button} from '@mui/material';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Users from "./users.json";


const rowsPerPage = 10;
const columns: GridColDef[] = [
    {
        field: 'firstName',
        headerName: 'Name',
        width: 200,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
        sortable: false,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 200,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
        type: 'actions',
        getActions: (params) => [
            <Button key={params.row.id}
                    href={`/users/${params.row.id}`}
                    component={Link}
                    variant="contained"
                    startIcon={<AccountBoxIcon />}
            >
                Details
            </Button>
        ],
    },
];


export default function EnhancedTable() {

    return (
        <Box>
            <Paper>
                <DataGrid
                    rows={Users}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: rowsPerPage,
                            },
                        },
                    }}
                    pageSizeOptions={[rowsPerPage]}
                    disableRowSelectionOnClick
                />
            </Paper>
        </Box>
    );
}
