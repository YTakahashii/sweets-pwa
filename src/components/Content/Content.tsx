import * as React from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
        flexGrow: 1,
        maxHeight: '85vh',
        overflow: 'scroll'
    },
});

type ContentProps = WithStyles<typeof styles>;

const Content = (props: ContentProps) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
            <p>a</p>
        </div>
    );
}

export default withStyles(styles)(Content);