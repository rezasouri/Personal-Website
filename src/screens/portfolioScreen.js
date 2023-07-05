import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Portfolio from '../components/portfolio'
import Title from '../components/title'
import { getTranslates } from '../localization/index'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        padding: 30,
        paddingTop: 60,
        [theme.breakpoints.down('xs')]: {
            paddingRight: 10,
            paddingLeft: 10
        }
    }

}))

export default function PortfolioScreen() {
    const classes = useStyles()
    const translate = getTranslates()
    return (
        <div className={classes.root}>
            <Title title={translate.portfolios} />
            <Grid item container xs={12} direction='row' justifyContent='flex-start' alignItems='center'>
                {translate.portfoliosList.map((portfolio) =>
                    <Portfolio key={portfolio.id} title={portfolio.title} desc={portfolio.desc} image={portfolio.image} />
                )}
            </Grid>
        </div>
    )
}
