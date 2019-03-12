import * as React from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        position: 'relative',
        width: '100vw',
        height: '86vh',
        overflow: 'scroll',
        background: '#1abc9c',
    },
});

type ContentProps = WithStyles<typeof styles>;

const Content = (props: ContentProps) => {
    const { classes } = props;
    return (
        <div className={classes.root} id='contents'>
            {
                Array.from(new Array(600)).map((v, i) => <p key={i}>{i}</p>)
            }
        </div>
    );
}

export default withStyles(styles)(Content);