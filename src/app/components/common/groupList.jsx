import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemButton, Paper } from "@mui/material";
import { purple } from "@mui/material/colors";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    if (!Array.isArray(items)) {
        return (
            <Paper variant="outlined" sx={{ ml: 0.5 }}>
                <List>
                    {Object.keys(items).map((item) => (
                        <ListItem
                            disablePadding
                            key={items[item][valueProperty]}
                        >
                            <ListItemButton
                                selected={items[item] === selectedItem}
                                sx={{
                                    "& .Mui-selected": {
                                        background: purple[100] // сделать фиолетовым
                                    }
                                }}
                                onClick={() => onItemSelect(items[item])}
                            >
                                {items[item][contentProperty]}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        );
    }
    return (
        <Paper variant="outlined" sx={{ ml: 0.5 }}>
            <List>
                {items.map((item) => (
                    <ListItem disablePadding key={items[item][valueProperty]}>
                        <ListItemButton
                            selected={item === selectedItem}
                            onClick={() => onItemSelect(items[item])}
                        >
                            {items[item][contentProperty]}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};
GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;
