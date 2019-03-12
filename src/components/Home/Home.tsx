import * as React from 'react';
import * as request from 'superagent';
import { withStyles, WithStyles, createStyles, Theme } from '@material-ui/core/styles';
import HomeState from './HomeState';
import SweetsCard from '../SweetsCard/SweetsCard';

const styles = (theme: Theme) => createStyles({
    root: {
        position: 'relative',
        width: '100vw',
        height: '86vh',
        overflow: 'scroll',
    },
});

type HomeProps = WithStyles<typeof styles>;

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            sweets: [],
            isLoaded: false
        };
    }

    componentWillMount() {
        request
            .get('http://35.229.235.150/sweets')
            .then(response => {
                this.setState({
                    sweets: response.body
                });
            })
            .then(() => {
                this.setState({
                    isLoaded: true
                });
                console.log(JSON.stringify(this.state));
            });
    }

    render() {
        const { classes } = this.props;
        const { isLoaded, sweets } = this.state;
        const cards = sweets.map((s, i) => <SweetsCard key={i} sweet={s}/>);
        return (
            isLoaded ?
                <div className={classes.root}>
                    {
                        cards
                    }
                </div>
                :
                <p>ロード中</p>
        );
    }
}

export default withStyles(styles)(Home);