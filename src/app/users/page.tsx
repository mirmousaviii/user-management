"use client"

import * as React from 'react';
import Link from "next/link";
import {Box, Paper, Button} from '@mui/material';
import {DataGrid, GridColDef, GridRenderCellParams, GridRowParams} from '@mui/x-data-grid';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Users from "@/sample-data/users.json";
import Image from "next/image";
import {User} from "@/types";


const rowsPerPage = 10;
const columns: GridColDef[] = [
    {
        field: 'avatarUrl',
        headerName: 'Avatar',
        width: 70,
        sortable: false,
        filterable: false,
        hideable: false,
        renderCell: (params: GridRenderCellParams<User>) => (
            <Image src={params.row.avatarUrl || "/default-avatar.jpg"}
                   alt={params.row.firstName}
                   width={40}
                   height={40}
                   quality={40}
                   blurDataURL="/blur-avatar.jpg"
                   placeholder="blur"
            />
        ),
    },
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
        getActions: (params: GridRowParams<User>) => [
            <Button key={params.row.id}
                    href={`/users/${params.row.id}`}
                    component={Link}
                    variant="outlined"
                    startIcon={<AccountBoxIcon/>}
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
