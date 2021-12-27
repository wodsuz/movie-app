import React from 'react';

import { useParams } from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import {category as cate} from '../api/tmdbApi'
import Moviegrid from '../components/movie-grid/Moviegrid';
const Catalog = () => {

    const {category} = useParams();
    console.log(category)

    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'Tv Series'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <Moviegrid category={category}  />

                    
                </div>
            </div> 
        </>
    )
}

export default Catalog;
