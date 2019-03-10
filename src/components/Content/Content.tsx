import * as React from 'react';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    root: {
        position: 'relative',
        width: '100vw',
        overflow: 'scroll',
        background: '#1abc9c',
        paddingTop: '10vh'
    },
});

type ContentProps = WithStyles<typeof styles>;

const Content = (props: ContentProps) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
            <p>19</p>
            <p>20</p>
            <p>21</p>
            <p>22</p>
            <p>23</p>
            <p>24</p>
        </div>
    );
}

export default withStyles(styles)(Content);