import React, { useEffect } from "react";
import TestService from '../services/TestService'

export const Home = () => {


    useEffect(() => {
        TestService.instance.helloWorld();
    })

    return(
        <div>
            Home
        </div>
    );
}