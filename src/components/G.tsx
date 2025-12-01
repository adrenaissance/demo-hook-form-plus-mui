import {Autocomplete, Box, MenuItem, Select, TextField, Typography} from "@mui/material"
import {ETextField} from "./ETextField"

export const G=() => {
    const categories=[
        {label: "Technology", id: 1},
        {label: "Health", id: 2},
        {label: "Finance", id: 3},
        {label: "Education", id: 4},
    ];

    return (
        <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2}}>
            <Box sx={{gridColumn: 'span 8'}}>
                <ETextField name="firstName" />
            </Box>
            <Box sx={{gridColumn: 'span 4', gridRow: 'span 2'}}>
                <ETextField multiline name="lastName" />
            </Box>
            <Box sx={{gridColumn: 'span 8'}}>
                <ETextField name="email" />
            </Box>
            <Box sx={{gridColumn: 'span 4'}}>
                <ETextField name="email 2" />
            </Box>
            <Box sx={{gridColumn: 'span 4'}}>
                <ETextField name="email 3" />
            </Box>
            <Box sx={{gridColumn: 'span 4', gridRow: 'span 2'}}>
                <ETextField multiline name="double" />
            </Box>
            <Box sx={{gridColumn: 'span 4'}}>
                <ETextField name="delivery" />
            </Box>
            <Box sx={{gridColumn: 'span 4'}}>
                <ETextField name="phone" />
            </Box>
            <Box sx={{gridColumn: 'span 12', display: 'flex', flexDirection: 'column', gap: 2}}>
                <Typography id='categories-label' htmlFor="categories" variant="caption" component="label">
                    Categories
                </Typography>
                <Select
                    fullWidth
                    labelId={`categories-label`}
                    id='categories'
                >
                    {categories.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </Box>
            <Box sx={{gridColumn: 'span 12'}}>
                <Autocomplete
                    fullWidth
                    options={categories}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => (
                        <ETextField {...params} name="Category" />
                    )}
                />
            </Box>
        </Box>
    )
}