import { Fragment, useEffect, useState, useContext } from 'react';

/* Components */
import DashboardProducts from '../components/DashboardProducts';
import DashboardHeader from '../components/DashboardHeader';

export default function Admin() {

    return (
        <Fragment>
            <DashboardHeader />
            <DashboardProducts />
        </Fragment>
    )


}